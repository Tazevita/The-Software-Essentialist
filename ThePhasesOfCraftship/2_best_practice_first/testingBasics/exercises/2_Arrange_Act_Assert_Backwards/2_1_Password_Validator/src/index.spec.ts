import { passwordValidator } from "./index";

describe("password validator", () => {
  it("returns object that contains a valid status of false when we check password 'Mom4' because password length is less than 5", () => {
    expect(passwordValidator("Mom4").isValid).toBeFalsy();
  });

  it("returns object that contains 1 error when we check password that indicates password length is less than 5 when we input 'Mom4'", () => {
    expect(passwordValidator("Mom4").errors).toContain(
      "Password must be over 5 characters long",
    );
  });

  it("returns object that contains 1 error when we check password that indicates password length is more than 15 when we input 'MotherMotherLength20'", () => {
    expect(passwordValidator("MotherMotherLength20").errors).toContain(
      "Password must be less than 15 characters long",
    );
  });

  it("returns object that contains 1 error that indicates there are no numbers when we input 'Mother'", () => {
    expect(passwordValidator("Mother").errors).toContain(
      "Password must contain a number",
    );
  });

  it("returns object that contains 1 error that indicates there are no upper case letters when we input 'mom55'", () => {
    expect(passwordValidator("mom55").errors).toContain(
      "Password must contain an uppercase letter",
    );
  });

  it("return object that contains 3 errors that indicate that there is no upper case letters, that there are no numbers, and that password is too short when we input 'mom'", () => {
    let results = passwordValidator("mom");
    expect(results.errors).toContain(
      "Password must contain an uppercase letter",
    );
    expect(results.errors).toContain("Password must contain a number");
    expect(results.errors).toContain("Password must be over 5 characters long");
  });
});
