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

  it("should return true when a valid palindrome is inputted even if the casing is off like 'Mom'", () => {
    let palindrome = new Palindrome();
    expect(palindrome.palindromeChecker("Mom")).toBeTruthy();
  });

  it("should return true when a valid palindrome is inputted even if the casing is off and spaces are in the way like 'Was It A Rat I Saw'", () => {
    let palindrome = new Palindrome();
    expect(palindrome.palindromeChecker("Was It A Rat I Saw")).toBeTruthy();
  });
});
