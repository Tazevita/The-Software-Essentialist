const getHours = (time: string) => Number(time.substring(0, 2));
const getMinutes = (time: string) => Number(time.substring(3, 5));

const correctFormatChecker = (timeRange: string) => {
  return (
    timeRange[2] === ":" &&
    timeRange[10] === ":" &&
    timeRange.substring(5, 8) === " - " &&
    timeRange.length === 13
  );
};

const validTimeChecker = (time: string) => {
  return (
    !Number.isNaN(getHours(time)) &&
    !Number.isNaN(getMinutes(time)) &&
    Number.isInteger(getHours(time)) && // decimals are numbers but not integers
    Number.isInteger(getMinutes(time)) &&
    getHours(time) < 24 &&
    getMinutes(time) < 60
  );
};

const validTimeRange = (firstTime: string, secondTime: string) => {
  if (getHours(firstTime) === getHours(secondTime)) {
    return getMinutes(firstTime) < getMinutes(secondTime);
  } else {
    return getHours(firstTime) < getHours(secondTime);
  }
};

export const militaryTimeValidator = (timeRange: string) => {
  return (
    correctFormatChecker(timeRange) &&
    validTimeChecker(timeRange.substring(0, 5)) &&
    validTimeChecker(timeRange.substring(8, 13)) &&
    validTimeRange(timeRange.substring(0, 5), timeRange.substring(8, 13))
  );
};
