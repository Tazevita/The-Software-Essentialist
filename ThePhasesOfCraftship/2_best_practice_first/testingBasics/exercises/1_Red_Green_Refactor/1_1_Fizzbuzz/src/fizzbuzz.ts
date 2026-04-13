export function fizzBuzz(num: number) {
  if (num < 1) {
    throw new Error("Number too low");
  }
  if (num > 100) {
    throw new Error("Number too high");
  }

  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }
  if (num % 3 === 0) {
    return "fizz";
  }
  if (num % 5 === 0) {
    return "buzz";
  }

  return String(num);
}
