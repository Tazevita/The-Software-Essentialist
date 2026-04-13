export class Palindrome {
  palindromeChecker(str: string) {
    return str === str.split("").reverse().join("");
  }
}
