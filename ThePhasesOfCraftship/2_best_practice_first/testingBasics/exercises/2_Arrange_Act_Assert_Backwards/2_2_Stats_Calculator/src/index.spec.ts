import { statsCalculator } from "./index";

describe("stats calculator", () => {
  it("doesn't accept empty lists", () => {
    expect(() => statsCalculator([])).toThrowError("EmptyList");
  });
});
