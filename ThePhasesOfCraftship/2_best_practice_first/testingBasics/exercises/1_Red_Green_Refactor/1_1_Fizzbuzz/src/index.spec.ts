import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("returns a string", () => {
    expect(typeof fizzBuzz(5)).toBe("string");
  });

  it("only accepts numbers greater than or equal to 1", () => {
    expect(() => fizzBuzz(0)).toThrow("Number too low");
  });

  it("only accepts numbers less than or equal to 100", () => {
    expect(() => fizzBuzz(101)).toThrow("Number too high");
  });
});
