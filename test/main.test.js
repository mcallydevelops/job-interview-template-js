const sum = require('../src/main')

describe("Sum", () => {
    it("should add two numbers together", () => {
        expect(sum(1,2)).toEqual(3)
    })
})