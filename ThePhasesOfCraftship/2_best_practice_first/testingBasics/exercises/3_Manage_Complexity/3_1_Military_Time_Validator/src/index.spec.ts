import { militaryTimeValidator } from "./index";

describe("military time validator", () => {
  it("validates a valid military time range like '01:12 - 14:32'", () => {
    expect(militaryTimeValidator("01:12 - 14:32")).toBeTruthy();
  });
});
