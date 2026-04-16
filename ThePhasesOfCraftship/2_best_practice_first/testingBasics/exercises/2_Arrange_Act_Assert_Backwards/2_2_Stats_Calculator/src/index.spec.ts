import { statsCalculator } from "./index";

describe("stats calculator", () => {
  it("doesn't accept empty lists", () => {
    expect(() => statsCalculator([])).toThrowError("EmptyList");
  });

  describe("gets smallest number of a list", () => {
    it.each([
      [-8, [2, 4, 21, -8, 53, 40]],
      [3, [18, 3, 81, 30, 20]],
      [51, [180, 92, 121, 561, 51, 401]],
    ])("gets the smallest number %s from the list %s", (lowestNum, numList) => {
      expect(statsCalculator(numList).smallest).toBe(lowestNum);
    });
  });

  describe("gets largest number of a list", () => {
    it.each([
      [53, [2, 4, 21, -8, 53, 40]],
      [81, [18, 3, 81, 30, 20]],
      [561, [180, 92, 121, 561, 51, 401]],
    ])("gets the largest number %s from the list %s", (largestNum, numList) => {
      expect(statsCalculator(numList).largest).toBe(largestNum);
    });
  });

  describe("gets the size of a list", () => {
    it.each([
      [6, [2, 4, 21, -8, 53, 40]],
      [5, [18, 3, 81, 30, 20]],
      [6, [180, 92, 121, 561, 51, 401]],
    ])("gets the list size %s from the list %s", (listSize, numList) => {
      expect(statsCalculator(numList).listSize).toBe(listSize);
    });
  });

  describe("gets the average of a list", () => {
    it.each([[18.666666666666668, [2, 4, 21, -8, 53, 40]]])(
      "gets the list average %s from the list %s",
      (average, numList) => {
        expect(statsCalculator(numList).average).toBe(average);
      },
    );
  });
});
