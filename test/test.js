describe("inc", function(){ 
  it("increments an integer correctly", function() {
    var test = 1;
    test++
    var assert = require('assert');
    assert.equal(test, 2);
  });
});