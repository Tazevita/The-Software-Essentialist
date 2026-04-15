import { passwordValidator } from "./index";

describe("password validator", () => {
  it("returns object that contains a valid status of false when we check password 'Mom4' because password length is less than 5", () => {
    expect(passwordValidator("Mom4").isValid).toBeFalsy();
  });
  it("returns object that contains 1 error when we check password that indicates password length is less than 5 when we input 'Mom4'", () => {
    expect(passwordValidator("Mom4").errors).toContain(
      "Password under 5 characters",
    );
  });
  it("returns object that contains 1 error that indicates there are no numbers when we input 'Mother'", () => {
    expect(passwordValidator("Mother").errors).toContain(
      "Password conatains no numbers",
    );
  });
});
