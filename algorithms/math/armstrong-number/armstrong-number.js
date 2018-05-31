function isArmstrong(num) {
  let temp = num;
  let sum = 0;
  let digit;

  while (temp !== 0) {
    digit = temp % 10;
    sum = sum + (digit * digit * digit);
    temp = parseInt(temp / 10);
  }

  return (num === sum);
}

module.exports = isArmstrong;