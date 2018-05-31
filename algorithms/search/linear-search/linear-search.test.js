const {assert} = require('chai');
const linearSearch = require('./linear-search');

describe('linear search', () => {
  it('should find the position of number', () => {
    assert.equal(linearSearch([1, 3, 5, 44, 12], 12), 4);
    assert.equal(linearSearch([0, 1, 44, 3, 5, 12, -1], 44), 2);
  });
  
  it('should not find the number', () => {
    assert.equal(linearSearch([0, 1, 44, 3, 5, 12, -1], 88), -1);
  });
});
