function isLeapYear(year) {

    if (year % 4 === 0) {
        if (year % 100 === 0) { // Checking for a century year
            if (year % 400 === 0) {
                return true;
            }
            else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }

}