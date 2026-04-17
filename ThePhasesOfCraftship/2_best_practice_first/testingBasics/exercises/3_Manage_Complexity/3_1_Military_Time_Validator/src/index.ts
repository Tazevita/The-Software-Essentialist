const correctFormatChecker = (timeRange: string) => {
  return (
    timeRange[2] === ":" &&
    timeRange[10] === ":" &&
    timeRange.substring(5, 8) === " - "
  );
};

export const militaryTimeValidator = (timeRange: string) => {
  return correctFormatChecker(timeRange);
};
