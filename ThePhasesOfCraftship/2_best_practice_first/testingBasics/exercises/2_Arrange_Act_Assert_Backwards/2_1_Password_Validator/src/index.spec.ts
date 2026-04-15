import { passwordValidator } from "./index";

describe("password validator", () => {
  it("blocks the password 'Mom4' because its less than 5 characters", () => {
    expect(passwordValidator("Mom4").errors).toContain(
      "Password must be over 5 characters long",
    );
  });

  it("blocks the password 'MotherMotherLength20 because its over 15 characters long' ", () => {
    expect(passwordValidator("MotherMotherLength20").errors).toContain(
      "Password must be less than 15 characters long",
    );
  });

  it("blocks the password 'Mother' because it doesn't contain a number", () => {
    expect(passwordValidator("Mother").errors).toContain(
      "Password must contain a number",
    );
  });

  it("blocks the password 'mom55' because there is no uppercase letter", () => {
    expect(passwordValidator("mom55").errors).toContain(
      "Password must contain an uppercase letter",
    );
  });

  it("accepts password 'Mom55' because it meets all the reqs", () => {
    expect(passwordValidator("Mom55").isValid).toBeTruthy();
  });
});
