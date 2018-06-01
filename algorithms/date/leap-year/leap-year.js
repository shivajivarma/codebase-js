function isLeapYear(year) {

  if (year % 4 === 0) {
    if (year % 100 === 0) { // Checking for a century year
      return year % 400 === 0;
    } else {
      return true;
    }
  } else {
    return false;
  }

}

module.exports = isLeapYear;