function removeSpaces(str: string) {
  return str.split(" ").join("");
}

export class Palindrome {
  palindromeChecker(str: string) {
    return (
      removeSpaces(str).toLowerCase() ===
      removeSpaces(str.split("").reverse().join("").toLowerCase())
    );
  }
}
