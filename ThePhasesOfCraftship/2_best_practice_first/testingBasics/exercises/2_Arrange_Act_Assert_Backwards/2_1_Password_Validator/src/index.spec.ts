import { passwordValidator } from "./index";

describe("password validator", () => {
  it("returns false when we check password 'Mom4' because password length is less than 5", () => {
    expect(passwordValidator("Mom4").isValid).toBeFalsy();
  });
  it("returns 1 error when we check password that indicates password length is less than 5 when we input 'Mom4'", () => {
    expect(passwordValidator("Mom4").errors).toContain(
      "Password under 5 characters",
    );
  });
});
