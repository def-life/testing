import app from "..";
import { beforeAll, describe, expect, test } from "@jest/globals"
import request from "supertest";


describe("express server", () => {

    describe("sum route", () => {
        test("should return sum of 2 numbers", async () => {
            const response = await request(app).post("/sum").set({ "a": "1", "b": "2" })
            expect(response.status).toBe(200)
            expect(response.body.data).toBe(3)
        })
    })
})