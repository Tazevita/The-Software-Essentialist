import { Palindrome } from "./index";

describe("palindrome checker", () => {
  it("should return true when a valid palindrome is inputted like 'mom'", () => {
    let palindrome = new Palindrome();
    expect(palindrome.palindromeChecker("mom")).toBeTruthy();
  });
});
