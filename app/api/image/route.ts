import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Replicate from "replicate";
import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const body = await req.json();
    const { prompt, amount = "1", resolution = "512x512" } = body;

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    if (!prompt) return new NextResponse("Prompt is required", { status: 400 });
    if (!amount) return new NextResponse("Amount is required", { status: 400 });
    if (!resolution) return new NextResponse("Resolution is required", { status: 400 });

    const [freeTrial, isPro] = await Promise.all([checkApiLimit(), checkSubscription()]);

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired.", { status: 403 });
    }

    const [width, height] = resolution.split("x").map(Number);

    const images = await Promise.all(
      Array.from({ length: parseInt(amount, 10) }).map(() =>
        replicate.run("stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b", {
          input: { prompt, width, height, num_outputs: 1 },
        })
      )
    );

    if (!isPro) await incrementApiLimit();

    return NextResponse.json(images.flat().map((url) => ({ url })));
  } catch (error) {
    console.error("[IMAGE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
