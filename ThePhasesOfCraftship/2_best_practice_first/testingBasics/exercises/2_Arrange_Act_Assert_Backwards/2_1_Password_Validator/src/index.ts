export type PasswordValidationResult = {
  isValid: boolean;
  errors: string[];
};

const containsNumber = (str: string) => /\d/.test(str);

const containsUpperCaseLetter = (str: string) => /[A-Z]/.test(str);

export const PASSWORD_ERRORS = {
  TOO_SHORT: "Password must be over 5 characters long",
  TOO_LONG: "Password must be less than 15 characters long",
  NO_NUMBER: "Password must contain a number",
  NO_UPPERCASE: "Password must contain an uppercase letter",
} as const;

export function passwordValidator(password: string): PasswordValidationResult {
  const errors: string[] = [];

  if (password.length < 5) errors.push(PASSWORD_ERRORS.TOO_SHORT);

  if (password.length > 15) errors.push(PASSWORD_ERRORS.TOO_LONG);

  if (!containsNumber(password)) errors.push(PASSWORD_ERRORS.NO_NUMBER);

  if (!containsUpperCaseLetter(password))
    errors.push(PASSWORD_ERRORS.NO_UPPERCASE);

  return {
    isValid: errors.length === 0,
    errors,
  } satisfies PasswordValidationResult;
}
