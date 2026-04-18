import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const client = new Anthropic();

const SYSTEM_PROMPT = `You are an expert software engineer. When generating code, always use markdown code blocks with the appropriate language identifier. Provide clear, concise, well-structured code with brief explanations where helpful.`;

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    if (!messages) return new NextResponse("Messages are required", { status: 400 });

    const [freeTrial, isPro] = await Promise.all([checkApiLimit(), checkSubscription()]);

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired.", { status: 403 });
    }

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    if (!isPro) await incrementApiLimit();

    const content = response.content[0];
    if (!content) return new NextResponse("No content in response", { status: 500 });
    return NextResponse.json(content);
  } catch (error) {
    console.error("[CODE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
