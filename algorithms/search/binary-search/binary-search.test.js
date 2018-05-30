const {assert} = require('chai');
const binarySearch = require('./binary-search');

describe('binary search', () => {
  it('should find the position of number', () => {
    assert.equal(binarySearch([1, 3, 5, 12, 44], 12), 3);
    assert.equal(binarySearch([-1, 0, 1, 3, 5, 12, 44], 44), 6);
  });
});
