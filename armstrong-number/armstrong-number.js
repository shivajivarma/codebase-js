function isArmstrong(num) {
    var temp = num,
        sum = 0,
        digit;

    while (temp !== 0) {
        digit = parseInt(temp % 10);
        sum = sum + (digit * digit * digit);
        temp = parseInt(temp / 10);
    }

    return (num === sum);
}
