export const booleanCalculator = (booleanString: string) => {
  booleanString = booleanString.replace("NOT TRUE", "FALSE");
  booleanString = booleanString.replace("NOT FALSE", "TRUE");

  booleanString = booleanString.replace("TRUE AND TRUE", "TRUE");
  booleanString = booleanString.replace("TRUE AND FALSE", "FALSE");
  booleanString = booleanString.replace("FALSE AND TRUE", "FALSE");
  booleanString = booleanString.replace("FLASE AND FALSE", "FALSE");

  return booleanString === "TRUE";
};
