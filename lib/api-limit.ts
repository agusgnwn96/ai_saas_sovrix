import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { MAX_FREE_COUNTS } from "@/lib/constants";

export const incrementApiLimit = async () => {
  const { userId } = await auth();
  if (!userId) return;

  await prisma.userApiLimit.upsert({
    where: { userId },
    create: { userId, count: 1 },
    update: { count: { increment: 1 } },
  });
};

export const checkApiLimit = async () => {
  const { userId } = await auth();
  if (!userId) return false;

  const userApiLimit = await prisma.userApiLimit.findUnique({ where: { userId } });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) return true;
  return false;
};

export const getApiLimitCount = async () => {
  const { userId } = await auth();
  if (!userId) return 0;

  const userApiLimit = await prisma.userApiLimit.findUnique({ where: { userId } });
  return userApiLimit?.count ?? 0;
};
