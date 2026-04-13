export class Palindrome {
  palindromeChecker(str: string) {
    return (
      str.split(" ").join("").toLowerCase() ===
      str.split("").reverse().join("").toLowerCase().split(" ").join("")
    );
  }
}
