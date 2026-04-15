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

  if (password.length < 5) errors.push("Password under 5 characters");
  if (!containsNumber(password)) errors.push("Password conatains no numbers");

  return {
    isValid: errors.length === 0,
    errors,
  } satisfies PasswordValidationResult;
}
