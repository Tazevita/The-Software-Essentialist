import { militaryTimeValidator } from "./index";

describe("military time validator", () => {
  it("blocks '10:10PIG20:20' because it doesn't match the required format", () => {
    expect(militaryTimeValidator("10:10PIG20:20")).toBeFalsy();
  });

  it("blocks 'aa:aa - bb:bb' because our times need numbers and not letters", () => {
    expect(militaryTimeValidator("aa:aa - bb:bb")).toBeFalsy();
  });

  it("blocks '01:12 - 14:3' because both times must contain 4 digits and a colon", () => {
    expect(militaryTimeValidator("01:12 - 14:3")).toBeFalsy();
  });

  it("blocks '23:59 - 24:01' because the second time is past the hour limit 23", () => {
    expect(militaryTimeValidator("23:59 - 24:01")).toBeFalsy();
  });

  it("blocks '01:60 - 02:30' because the first time is past the minute limit 59", () => {
    expect(militaryTimeValidator("01:60 - 02:30")).toBeFalsy();
  });

  it("blocks '23:12 - 10:11' because the first time is past the second time", () => {
    expect(militaryTimeValidator("23:12 - 10:11")).toBeFalsy();
  });

  it.each(["01:12 - 14:32", "00:00 - 23:59", "23:58 - 23:59"])(
    "validates a valid military time range like %s",
    (timeRange) => {
      expect(militaryTimeValidator(timeRange)).toBeTruthy();
    },
  );
});
