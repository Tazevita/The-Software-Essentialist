import { booleanCalculator } from "./index";

describe("boolean calculator", () => {
  it("answers with True when given 'TRUE'", () => {
    expect(booleanCalculator("TRUE")).toBeTruthy();
  });
});
