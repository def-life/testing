import { app } from "..";
import { describe, expect, test, vi } from "vitest"
import request from "supertest";
import { prisma } from "../db"

vi.mock("../db")
// instead of manual mocks, can use mocking via a factory function or spyOn utility.

describe("express server", () => {

    describe("sum route", () => {
        test("should return sum of 2 numbers", async () => {
            const response = await request(app).post("/sum").send({ a: 1, b: 2 })
            expect(response.status).toBe(200)
            expect(response.body.answer).toBe(3)
        })

        test("should add to the database", async () => {
            const response = await request(app).post("/sum").send({ a: 1, b: 2 })
            expect(prisma.sum.create).toHaveBeenCalled()
            expect(prisma.sum.create).toReturnWith({ a: 1, b: 2, result: 3, id: 1 })
            expect(prisma.sum.create).toHaveBeenCalledWith({ data: { a: 1, b: 2, result: 3 } })
        })
    })
})