import { Palindrome } from "./index";

describe("palindrome checker", () => {
  it("should return true when a valid palindrome is inputted like 'mom'", () => {
    let palindrome = new Palindrome();
    expect(palindrome.palindromeChecker("mom")).toBeTruthy();
  });

  it("should return false when an invalid palindrome is inputted like 'bill'", () => {
    let palindrome = new Palindrome();
    expect(palindrome.palindromeChecker("bill")).toBeFalsy();
  });
});
