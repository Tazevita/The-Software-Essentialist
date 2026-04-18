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
    it("answers with True when given 'NOT FALSE'", () => {
      expect(booleanCalculator("NOT FALSE")).toBeTruthy();
    });
  });

  describe("boolean strings using 'AND'", () => {
    it("answers with False when given 'TRUE AND FALSE'", () => {
      expect(booleanCalculator("TRUE AND FALSE")).toBeFalsy();
    });
    it("answers with True when given 'TRUE AND TRUE'", () => {
      expect(booleanCalculator("TRUE AND TRUE")).toBeTruthy();
    });
  });
});
