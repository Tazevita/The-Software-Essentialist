import { militaryTimeValidator } from "./index";

describe("military time validator", () => {
  it("blocks '10:10PIG20:20' because it doesn't match the required format", () => {
    expect(militaryTimeValidator("10:10PIG20:20")).toBeFalsy();
  });

  it("blocks 'aa:aa - bb:bb' because our times need numbers and not letters", () => {
    expect(militaryTimeValidator("aa:aa - bb:bb")).toBeFalsy();
  });

  it("validates a valid military time range like '01:12 - 14:32'", () => {
    expect(militaryTimeValidator("01:12 - 14:32")).toBeTruthy();
  });
});
