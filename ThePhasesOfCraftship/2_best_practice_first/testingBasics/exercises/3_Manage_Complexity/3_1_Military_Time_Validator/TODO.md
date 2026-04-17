# Doings

- Validates a military time range

# Kowings

- Military time can be between 00:00 and 23:59
- The first time in the time range should be less than the second time in the time range
- Military time but contain 4 digits and a colon
- The string provided must match this format "xx::xx - xx:xx"

# Examples

- "01:12 - 14:32" (true)
- "25:00 - 12:23" (false)
- "22:00 - 23:12" (true)
- "23:12 - 10:11" (false)

  it("blocks '01:60 - 02:30' because the first time is past the minute limit 59", () => {
  expect(militaryTimeValidator("01:60 - 02:30")).toBeFalsy();
  });
