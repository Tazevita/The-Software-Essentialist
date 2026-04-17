const correctFormatChecker = (timeRange: string) => {
  return (
    timeRange[2] === ":" &&
    timeRange[10] === ":" &&
    timeRange.substring(5, 8) === " - "
  );
};

const validTimeChecker = (time: string) => {
  return !(
    Number.isNaN(Number(time.substring(0, 2))) &&
    Number.isNaN(Number(time.substring(3, 5)))
  );
};

export const militaryTimeValidator = (timeRange: string) => {
  return (
    correctFormatChecker(timeRange) &&
    validTimeChecker(timeRange.substring(0, 5)) &&
    validTimeChecker(timeRange.substring(8, 13))
  );
};
