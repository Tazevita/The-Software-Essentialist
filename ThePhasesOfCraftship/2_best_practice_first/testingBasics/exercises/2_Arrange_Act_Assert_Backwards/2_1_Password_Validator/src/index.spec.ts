import { passwordValidator } from "./index";

describe("password validator", () => {
  it("returns false when we check password 'Mom4' because password length is less than 5", () => {
    expect(passwordValidator("Mom4").isValid).toBeFalsy();
  });
});
