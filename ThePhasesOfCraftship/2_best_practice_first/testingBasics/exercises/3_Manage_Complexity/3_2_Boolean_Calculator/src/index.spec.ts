import { booleanCalculator } from "./index";

describe("boolean calculator", () => {
  describe("single boolean strings", () => {
    it("answers with True when given 'TRUE'", () => {
      expect(booleanCalculator("TRUE")).toBeTruthy();
    });

    it("answers with False when given 'FALSE'", () => {
      expect(booleanCalculator("FLASE")).toBeFalsy();
    });
  });
  describe("boolean strings using 'NOT'", () => {
    it("answers with False when given 'NOT TRUE'", () => {
      expect(booleanCalculator("NOT TRUE")).toBeFalsy();
    });
  });
});
