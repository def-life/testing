import { PrismaClient } from "@prisma/client";
import { mockDeep } from "vitest-mock-extended"
const prisma = mockDeep<PrismaClient>();
prisma.sum.create.mockResolvedValue({ a: 1, b: 2, result: 3, id: 1 })

export { prisma }