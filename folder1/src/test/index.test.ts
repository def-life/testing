import { describe, expect, test } from "@jest/globals"
import { sum } from "../index"


describe("sum function", () => {
    test("should add positive number correctly", () => {
        expect(sum(2, 3)).toBe(5)
    })

    test("should add negative number correctly", () => {
        expect(sum(-2, -3)).toBe(-5)
    })
})