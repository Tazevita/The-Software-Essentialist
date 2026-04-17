import { militaryTimeValidator } from "./index";

describe("military time validator", () => {
  it("blocks 'time1 and time2' because it doesn't match the required format", () => {
    expect(militaryTimeValidator("time1 and time2")).toBeFalsy();
  });

  it("validates a valid military time range like '01:12 - 14:32'", () => {
    expect(militaryTimeValidator("01:12 - 14:32")).toBeTruthy();
  });
});
