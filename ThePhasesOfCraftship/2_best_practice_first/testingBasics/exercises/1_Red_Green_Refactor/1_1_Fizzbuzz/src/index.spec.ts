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

  it("returns inputted number in string form", () => {
    expect(fizzBuzz(1)).toBe("1");
  });

  it("returns 'fizz' when the number is a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("fizz");
  });
});
