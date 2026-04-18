export const booleanCalculator = (booleanString: string) => {
  booleanString = booleanString.replace("NOT TRUE", "FALSE");
  booleanString = booleanString.replace("NOT FALSE", "TRUE");

  booleanString = booleanString.replace("TRUE AND TRUE", "TRUE");
  booleanString = booleanString.replace("TRUE AND FALSE", "FALSE");
  booleanString = booleanString.replace("FALSE AND TRUE", "FALSE");
  booleanString = booleanString.replace("FLASE AND FALSE", "FALSE");

  booleanString = booleanString.replace("TRUE OR TRUE", "TRUE");
  booleanString = booleanString.replace("TRUE OR FALSE", "TRUE");
  booleanString = booleanString.replace("FALSE OR TRUE", "TRUE");
  booleanString = booleanString.replace("FALSE OR FALSE", "FALSE");

  if (booleanString !== "TRUE" && booleanString !== "FALSE")
    throw new Error("Invalid Boolean Sring");

  return booleanString === "TRUE";
};
