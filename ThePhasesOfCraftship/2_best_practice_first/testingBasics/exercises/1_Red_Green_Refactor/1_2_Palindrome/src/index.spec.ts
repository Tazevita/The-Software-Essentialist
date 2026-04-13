import { Palindrome } from "./index";

describe("palindrome checker", () => {
  let palindrome: Palindrome;
  beforeEach(() => {
    palindrome = new Palindrome();
  });

  it("should return true when a valid palindrome is inputted like 'mom', 'pop', 'dad', and 'anna'", () => {
    ["mom", "pop", "dad", "anna"].forEach((palindromeCheckerInput) => {
      expect(palindrome.palindromeChecker(palindromeCheckerInput)).toBeTruthy();
    });
  });

  it("should return false when an invalid palindrome is inputted like 'bill', 'john', 'alex', 'james'", () => {
    ["bill", "john", "alex", "james"].forEach((palindromeCheckerInput) => {
      expect(palindrome.palindromeChecker(palindromeCheckerInput)).toBeFalsy();
    });
  });

  it("should return true when a valid palindrome is inputted even if the casing is off like 'Mom', 'Pop', 'daD', and 'AnNa'", () => {
    ["Mom", "Pop", "daD", "AnNa"].forEach((palindromeCheckerInput) => {
      expect(palindrome.palindromeChecker(palindromeCheckerInput)).toBeTruthy();
    });
  });

  it("should return true when a valid palindrome is inputted even if the casing is off and spaces are in the way like 'Was It A Rat I Saw', or 'Never Odd or Even'", () => {
    ["Was It A Rat I Saw", "Never Odd or Even"].forEach(
      (palindromeCheckerInput) => {
        expect(
          palindrome.palindromeChecker(palindromeCheckerInput),
        ).toBeTruthy();
      },
    );
  });
});
