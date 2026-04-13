import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("returns a string", () => {
    expect(typeof fizzBuzz(5)).toBe("string");
  });

  it("only accepts numbers greater than 1", () => {
    expect(() => fizzBuzz(0)).toThrow("Number to low");
  });
});
