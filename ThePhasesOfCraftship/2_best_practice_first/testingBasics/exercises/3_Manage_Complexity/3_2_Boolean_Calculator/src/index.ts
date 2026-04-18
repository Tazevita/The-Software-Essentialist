export const booleanCalculator = (booleanString: string) => {
  booleanString = booleanString.replace("NOT TRUE", "FALSE");
  booleanString = booleanString.replace("NOT FALSE", "TRUE");

  return booleanString === "TRUE";
};
