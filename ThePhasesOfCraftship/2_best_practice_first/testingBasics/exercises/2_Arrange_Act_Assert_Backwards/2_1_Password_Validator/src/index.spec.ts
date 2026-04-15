import { passwordValidator, PASSWORD_ERRORS } from "./index";

describe("password validator", () => {
  describe("blocks passwords that are not in between the lengths of 5-15", () => {
    it.each(["Mom4", "Abc4", "Ab3"])(
      "blocks the password %s because its less than 5 characters",
      (password) => {
        let result = passwordValidator(password);
        expect(result.errors).toContain(PASSWORD_ERRORS.TOO_SHORT);
        expect(result.isValid).toBeFalsy();
      },
    );

    it.each([
      "MotherMotherLength20",
      "PasswordIsWayTooLong20",
      "16AgainTooLong16",
    ])(
      "blocks the password %s because its over 15 characters long ",
      (password) => {
        let result = passwordValidator(password);
        expect(result.errors).toContain(PASSWORD_ERRORS.TOO_LONG);
        expect(result.isValid).toBeFalsy();
      },
    );
  });

  describe("blocks passwords that don't contain a number", () => {
    it.each(["Mother", "Password", "Invalid"])(
      "blocks the password %s because it doesn't contain a number",
      (password) => {
        let result = passwordValidator(password);
        expect(result.errors).toContain(PASSWORD_ERRORS.NO_NUMBER);
        expect(result.isValid).toBeFalsy();
      },
    );
  });

  describe("blocks passwords that don't contain an upper case letter", () => {
    it.each(["mom55", "invalid8", "nocapital11"])(
      "blocks the password %s because there is no upper case letter",
      (password) => {
        let result = passwordValidator(password);
        expect(result.errors).toContain(PASSWORD_ERRORS.NO_UPPERCASE);
        expect(result.isValid).toBeFalsy();
      },
    );
  });

  describe("blocks passwords that have multiple errors", () => {
    it.each([
      [
        "mom",
        3,
        [
          PASSWORD_ERRORS.NO_NUMBER,
          PASSWORD_ERRORS.NO_UPPERCASE,
          PASSWORD_ERRORS.TOO_SHORT,
        ],
      ],
      ["Pass", 2, [PASSWORD_ERRORS.NO_NUMBER, PASSWORD_ERRORS.TOO_SHORT]],
      ["no2", 2, [PASSWORD_ERRORS.NO_UPPERCASE, PASSWORD_ERRORS.TOO_SHORT]],
      [
        "longpasswordnouppercasenonumber",
        3,
        [
          PASSWORD_ERRORS.NO_NUMBER,
          PASSWORD_ERRORS.NO_UPPERCASE,
          PASSWORD_ERRORS.TOO_LONG,
        ],
      ],
    ])(
      "blocks the password %s for multiple reasons",
      (password, errorCount, errors) => {
        let result = passwordValidator(password);
        expect(result.errors).toHaveLength(errorCount);
        expect(result.isValid).toBeFalsy();
        errors.forEach((passwordError) => {
          expect(result.errors).toContain(passwordError);
        });
      },
    );
  });

  describe("accepts valid passwords", () => {
    it.each(["Mom55", "Valid6", "Password9"])(
      "accepts password %s because it meets all the reqs",
      (password) => {
        let result = passwordValidator(password);
        expect(result.isValid).toBeTruthy();
        expect(result.errors.length).toBe(0);
      },
    );
  });
});
