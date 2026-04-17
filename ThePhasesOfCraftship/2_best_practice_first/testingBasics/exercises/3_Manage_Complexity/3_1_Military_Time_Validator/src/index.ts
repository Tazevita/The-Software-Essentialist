const correctFormatChecker = (timeRange: string) => {
  return timeRange[2] === ":" && timeRange[10] === ":";
};

export const militaryTimeValidator = (timeRange: string) => {
  return correctFormatChecker(timeRange);
};
