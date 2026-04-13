function removeSpacesFromString(str: string) {
  return str.split(" ").join("");
}
function reverseString(str: string) {
  return str.split("").reverse().join("");
}
export class Palindrome {
  palindromeChecker(str: string) {
    return (
      removeSpacesFromString(str).toLowerCase() ===
      removeSpacesFromString(reverseString(str).toLowerCase())
    );
  }
}
