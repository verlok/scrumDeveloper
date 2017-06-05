function leapYear(year) {
  if (year < 4) {
    return false;
  }
  if (year >= 4 && year <= 1582) {
      return year % 4 === 0;
  }
  if (year > 1582) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
  }
  return false;
}

module.exports = leapYear;