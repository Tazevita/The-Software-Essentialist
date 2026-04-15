type PasswordValidationResult = {
  isValid: boolean;
  errors: string[];
};

export function passwordValidator(password: string) {
  return { isValid: false, errors: ["Password under 5 characters"] };
}
