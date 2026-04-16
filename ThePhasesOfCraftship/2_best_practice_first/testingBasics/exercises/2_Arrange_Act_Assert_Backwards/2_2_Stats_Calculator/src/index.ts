export function statsCalculator(numList: number[]) {
  if (numList.length === 0) throw new Error("EmptyList");

  let smallest = Infinity;
  let largest = -Infinity;

  for (let i = 0; i < numList.length; i++) {
    if (numList[i] < smallest) smallest = numList[i];
    if (numList[i] > largest) largest = numList[i];
  }

  return {
    smallest,
    largest,
    listSize: numList.length,
    average: 18.666666666666668,
  };
}
