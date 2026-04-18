import { booleanCalculator } from "./index";

describe("boolean calculator", () => {
  it("blocks invalid boolean strings", () => {
    expect(() => booleanCalculator("Random Stuff Haha")).toThrowError();
  });

  describe("single boolean strings", () => {
    it("answers with True when given 'TRUE'", () => {
      expect(booleanCalculator("TRUE")).toBeTruthy();
    });

    it("answers with False when given 'FALSE'", () => {
      expect(booleanCalculator("FALSE")).toBeFalsy();
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

  describe("boolean strings using 'OR'", () => {
    it("answers with False when given 'FALSE OR FALSE'", () => {
      expect(booleanCalculator("FALSE OR FALSE")).toBeFalsy();
    });
    it("answers with True when given 'TRUE OR FALSE'", () => {
      expect(booleanCalculator("TRUE OR FALSE")).toBeTruthy();
    });
  });

  describe("boolean strings using multiple operations", () => {
    it("answers with False when given 'TRUE OR FALSE AND NOT FALSE", () => {
      expect(booleanCalculator("TRUE OR FALSE AND NOT FALSE")).toBeTruthy();
    });
    it("answers with True when given 'TRUE OR TRUE OR TRUE AND FALSE'", () => {
      expect(booleanCalculator("TRUE OR TRUE OR TRUE AND FALSE")).toBeTruthy();
    });
  });

  describe("boolean strings using parenthesis", () => {
    it("answers with False when given '(TRUE OR TRUE OR TRUE) AND FALSE'", () => {
      expect(booleanCalculator("(TRUE OR TRUE OR TRUE) AND FALSE")).toBeFalsy();
    });
    it("answers with False when given 'NOT (TRUE AND TRUE)'", () => {
      expect(booleanCalculator("NOT (TRUE AND TRUE)")).toBeFalsy();
    });
  });
});
