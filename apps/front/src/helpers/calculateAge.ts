export const calculateAge = (birthday: string): number => {
  const [monthStr, dayStr, yearStr] = birthday.split("/");
  const month = parseInt(monthStr, 10);
  const day = parseInt(dayStr, 10);
  const year = parseInt(yearStr, 10);

  if (
    isNaN(month) ||
    isNaN(day) ||
    isNaN(year) ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31
  ) {
    return 0;
  }

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return age >= 0 ? age : 0;
};
