import { passwordValidator, PASSWORD_ERRORS } from "./index";

describe("password validator", () => {
  it.each(["Mom4", "Abc4", "Ab3"])(
    "blocks the password %s because its less than 5 characters",
    (password) => {
      expect(passwordValidator(password).errors).toContain(
        PASSWORD_ERRORS.TOO_SHORT,
      );
    },
  );

  it.each([
    "MotherMotherLength20",
    "PasswordIsWayTooLong20",
    "16AgainTooLong16",
  ])(
    "blocks the password %s because its over 15 characters long ",
    (password) => {
      expect(passwordValidator(password).errors).toContain(
        PASSWORD_ERRORS.TOO_LONG,
      );
    },
  );

  it.each(["Mother", "Password", "Invalid"])(
    "blocks the password %s because it doesn't contain a number",
    (password) => {
      expect(passwordValidator(password).errors).toContain(
        PASSWORD_ERRORS.NO_NUMBER,
      );
    },
  );

  it.each(["mom55", "invalid8", "nocapital11"])(
    "blocks the password %s because there is no uppercase letter",
    (password) => {
      expect(passwordValidator(password).errors).toContain(
        PASSWORD_ERRORS.NO_UPPERCASE,
      );
    },
  );

  it.each([
    ["mom", 3],
    ["Pass", 2],
    ["no2", 2],
  ])("blocks the password %s for multiple reasons", (password, errorCount) => {
    expect(passwordValidator(password).errors).toHaveLength(errorCount);
  });

  it.each(["Mom55", "Valid6", "Password9"])(
    "accepts password %s because it meets all the reqs",
    (password) => {
      expect(passwordValidator(password).isValid).toBeTruthy();
    },
  );
});
