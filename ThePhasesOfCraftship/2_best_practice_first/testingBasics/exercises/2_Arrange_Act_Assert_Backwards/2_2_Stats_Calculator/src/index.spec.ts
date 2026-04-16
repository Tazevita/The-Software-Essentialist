import { statsCalculator } from "./index";

const lists = [
  {
    list: [2, 4, 21, -8, 53, 40],
    smallest: -8,
    largest: 53,
    size: 6,
    average: 18.666666666666668,
  },
  {
    list: [18, 3, 81, 30, 20],
    smallest: 3,
    largest: 81,
    size: 5,
    average: 30.4,
  },
  {
    list: [180, 92, 121, 561, 51, 401],
    smallest: 51,
    largest: 561,
    size: 6,
    average: 234.33333333333334,
  },
];

describe("stats calculator", () => {
  it("doesn't accept empty lists", () => {
    expect(() => statsCalculator([])).toThrowError("EmptyList");
  });

  describe("gets smallest number of a list", () => {
    it.each(lists)(
      "gets the smallest number $smallest from the list $list",
      ({ list, smallest }) => {
        expect(statsCalculator(list).smallest).toBe(smallest);
      },
    );
  });

  describe("gets largest number of a list", () => {
    it.each(lists)(
      "gets the largest number $largest from the list $list",
      ({ list, largest }) => {
        expect(statsCalculator(list).largest).toBe(largest);
      },
    );
  });

  describe("gets the size of a list", () => {
    it.each(lists)(
      "gets the list size $size from the list $list",
      ({ list, size }) => {
        expect(statsCalculator(list).size).toBe(size);
      },
    );
  });

  describe("gets the average of a list", () => {
    it.each(lists)(
      "gets the list average $average from the list $list",
      ({ list, average }) => {
        expect(statsCalculator(list).average).toBe(average);
      },
    );
  });
});
