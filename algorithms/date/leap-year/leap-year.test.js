const {assert} = require('chai');
const isLeapYear = require('./leap-year');

describe('armstrong number', () => {
  it('should validate leap year', () => {
    assert.isTrue(isLeapYear(2008));
    assert.isTrue(isLeapYear(2400));

    assert.isFalse(isLeapYear(1900));
    assert.isFalse(isLeapYear(1563));
  });
});