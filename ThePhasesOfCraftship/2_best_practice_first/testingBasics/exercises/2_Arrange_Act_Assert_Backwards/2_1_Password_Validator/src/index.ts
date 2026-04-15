type PasswordValidationResult = {
  isValid: boolean;
  errors: string[];
};

export function passwordValidator(password: string) {
  let errors: string[] = [];

  if (password.length < 5) {
    errors.push("Password under 5 characters");
  }

  for (let i = 0; i < password.length; i++) {
    if (!Number.isNaN(Number(password[i]))) {
      break;
    }
    if (i === password.length - 1) {
      errors.push("Password conatains no numbers");
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  } satisfies PasswordValidationResult;
}
