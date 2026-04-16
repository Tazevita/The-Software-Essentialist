import { statsCalculator } from "./index";

describe("stats calculator", () => {
  it("doesn't accept empty lists", () => {
    expect(() => statsCalculator([])).toThrowError("EmptyList");
  });

  describe("gets smallest number of a list", () => {
    it.each([[2, [2, 4, 21, -8, 53, 40]]])(
      "gets the lowest number %s from the list %s",
      (lowestNum, numList) => {
        expect(statsCalculator(numList).smallest).toBe(lowestNum);
      },
    );
  });
});
