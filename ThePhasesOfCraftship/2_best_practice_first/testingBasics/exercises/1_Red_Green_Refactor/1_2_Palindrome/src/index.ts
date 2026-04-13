export class Palindrome {
  palindromeChecker(str: string) {
    return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
  }
}
