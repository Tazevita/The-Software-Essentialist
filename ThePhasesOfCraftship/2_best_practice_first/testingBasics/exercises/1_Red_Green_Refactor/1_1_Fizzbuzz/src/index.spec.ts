import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("only accepts numbers greater than or equal to 1. Testcase: 0", () => {
    expect(() => fizzBuzz(0)).toThrow("Number too low");
  });

  it("only accepts numbers less than or equal to 100. Testcase: 101", () => {
    expect(() => fizzBuzz(101)).toThrow("Number too high");
  });

  it("returns inputted number in string form when not a multiple of 3 or 5. Testcase: 1", () => {
    expect(fizzBuzz(1)).toBe("1");
  });

  it("returns 'fizz' when the number inputted is a multiple of 3. Testcase: 3", () => {
    expect(fizzBuzz(3)).toBe("fizz");
  });

  it("returns 'fizz' when the number inputted is a multiple of 3. Testcase: 6", () => {
    expect(fizzBuzz(6)).toBe("fizz");
  });

  it("returns 'buzz' when the number inputted is a multiple of 5. Testcase: 5", () => {
    expect(fizzBuzz(5)).toBe("buzz");
  });

  it("returns 'buzz' when the number inputted is a multiple of 5. Testcase: 10", () => {
    expect(fizzBuzz(10)).toBe("buzz");
  });

  it("returns 'fizzbuzz' when the number inputted is a multiple of 5 and 3. Testcase: 15", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });

  it("returns 'fizzbuzz' when the number inputted is a multiple of 5 and 3. Testcase: 45", () => {
    expect(fizzBuzz(45)).toBe("fizzbuzz");
  });
});
