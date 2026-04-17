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
    !Number.isNaN(Number(time.substring(0, 2))) &&
    !Number.isNaN(Number(time.substring(3, 5))) &&
    Number(time.substring(0, 2)) < 24 &&
    Number(time.substring(3, 5)) < 60
  );
};

const validTimeRange = (firstTime: string, secondTime: string) => {
  if (firstTime.substring(0, 2) === secondTime.substring(0, 2)) {
    return (
      Number(firstTime.substring(3, 5)) < Number(secondTime.substring(3, 5))
    );
  } else {
    return (
      Number(firstTime.substring(0, 2)) < Number(secondTime.substring(0, 2))
    );
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
