const validateString = (str: string) => {
  const allWords = str.split(" ");

  allWords.forEach((word) => {
    if (
      word !== "TRUE" &&
      word !== "FALSE" &&
      word !== "AND" &&
      word !== "OR" &&
      word !== "NOT"
    )
      throw new Error("Invalid Boolean String");
  });
};

const handlePureString = (booleanString: string) => {
  while (booleanString.length > 5) {
    booleanString = booleanString.replace("NOT TRUE", "FALSE");
    booleanString = booleanString.replace("NOT FALSE", "TRUE");

    booleanString = booleanString.replace("TRUE AND TRUE", "TRUE");
    booleanString = booleanString.replace("TRUE AND FALSE", "FALSE");
    booleanString = booleanString.replace("FALSE AND TRUE", "FALSE");
    booleanString = booleanString.replace("FALSE AND FALSE", "FALSE");

    booleanString = booleanString.replace("TRUE OR TRUE", "TRUE");
    booleanString = booleanString.replace("TRUE OR FALSE", "TRUE");
    booleanString = booleanString.replace("FALSE OR TRUE", "TRUE");
    booleanString = booleanString.replace("FALSE OR FALSE", "FALSE");
  }

  return booleanString;
};

export const booleanCalculator = (booleanString: string) => {
  validateString(booleanString);

  booleanString = handlePureString(booleanString);

  return booleanString === "TRUE";
};
