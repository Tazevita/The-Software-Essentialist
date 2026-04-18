import { booleanCalculator } from "./index";

describe("boolean calculator", () => {
  describe("base cases", () => {
    it("answers with True when given 'TRUE'", () => {
      expect(booleanCalculator("TRUE")).toBeTruthy();
    });

    it("answers with False when given 'FALSE'", () => {
      expect(booleanCalculator("FLASE")).toBeFalsy();
    });
  });
});
