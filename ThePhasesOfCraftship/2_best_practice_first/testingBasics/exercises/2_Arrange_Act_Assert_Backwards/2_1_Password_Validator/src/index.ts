type PasswordValidationResult = {
  isValid: boolean;
  errors: string[];
};

function containsNumber(str: string) {
  for (let i = 0; i < str.length; i++) {
    if (!Number.isNaN(Number(str[i]))) {
      break;
    }
    if (i === str.length - 1) {
      return false;
    }
  }
  return true;
}

export function passwordValidator(password: string) {
  let errors: string[] = [];

  if (password.length < 5)
    errors.push("Password must be over 5 characters long");
  if (password.length > 15)
    errors.push("Password must be less than 15 characters long");
  if (!containsNumber(password)) errors.push("Password must contain a number");
  if (!/[A-Z]/.test(password))
    errors.push("Password must contain an uppercase letter");

  return {
    isValid: errors.length === 0,
    errors,
  } satisfies PasswordValidationResult;
}
