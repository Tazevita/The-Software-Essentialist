const validateParenthesis = (str: string) => {
  let stack = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack++;
    }
    if (str[i] === ")") {
      stack--;
    }

    if (stack < 0) {
      throw new Error("Invalid Boolean String");
    }
  }

  if (str.split("(").length - 1 !== str.split(")").length - 1 || stack > 0)
    throw new Error("Invalid Boolean String");
};

const validateWords = (str: string) => {
  while (str.indexOf("(") !== -1 && str.indexOf(")") !== -1) {
    str = str.replace("(", "");
    str = str.replace(")", "");
  }

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

const validateString = (str: string) => {
  validateParenthesis(str);
  validateWords(str);
};

const handlePureString = (booleanString: string) => {
  while (booleanString !== "TRUE" && booleanString !== "FALSE") {
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

const handleParenthesis = (booleanString: string) => {
  while (booleanString.includes("(")) {
    booleanString = booleanString.replace(
      booleanString.substring(
        booleanString.indexOf("("),
        booleanString.indexOf(")") + 1,
      ),
      handlePureString(
        booleanString.substring(
          booleanString.indexOf("(") + 1,
          booleanString.indexOf(")"),
        ),
      ),
    );
  }
  return booleanString;
};

export const booleanCalculator = (booleanString: string) => {
  validateString(booleanString);

  booleanString = handleParenthesis(booleanString);
  booleanString = handlePureString(booleanString);

  return booleanString === "TRUE";
};
