export function fizzBuzz(num: number) {
  if (num < 1) {
    throw new Error("Number too low");
  } else if (num > 100) {
    throw new Error("Number too high");
  }
  return String(num);
}
