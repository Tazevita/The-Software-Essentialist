Doings

- Validates passwords

Knowings

- Knows password length must be at least 5 characters long
- Knows password length must be at most 15 characters long
- Knows password must include at least 1 number
- Knows password must include at least 1 upper case letter

Examples

- Password: "Mom55" is valid
- Password: "Mom4" is invalid because password is less than 5 characters longs
- Password: "Mother" is invalid because password has no number
- Password: "mom55" is invalid because password has no upper case letter
- Password: "MotherMotherLength20" is invalid because password is longer than 15 characters long
- Password: "mom" is invalid because password is less than 5 characters longs, has no number, and no upper case letter

Api Design: { isValid: boolean, errors: strings[] | undefined };
