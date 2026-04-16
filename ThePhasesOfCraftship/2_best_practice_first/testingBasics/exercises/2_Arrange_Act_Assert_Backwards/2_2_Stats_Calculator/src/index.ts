export function statsCalculator(numList: number[]) {
  if (numList.length === 0) throw new Error("EmptyList");

  let smallest = Infinity;
  let largest = -Infinity;
  let sum = 0;

  for (let i = 0; i < numList.length; i++) {
    if (numList[i] < smallest) smallest = numList[i];
    if (numList[i] > largest) largest = numList[i];

    sum = sum + numList[i];
  }

  return {
    smallest,
    largest,
    size: numList.length,
    average: sum / numList.length,
  };
}
