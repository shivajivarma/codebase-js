const {assert} = require('chai');
const isArmstrong = require('./armstrong-number');

describe('armstrong number', () => {
  it('should validate armstrong number', () => {
    assert.isTrue(isArmstrong(153));
    assert.isTrue(isArmstrong(371));
  });

  it('should validate armstrong number fail cases', () => {
    assert.isFalse(isArmstrong(150));
    assert.isFalse(isArmstrong(1150));
  });
});