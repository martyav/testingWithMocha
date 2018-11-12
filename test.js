let assert = require('assert');

let warmUp = require('./testSubjects/warmUp.js')

describe('Sleep In', function() {
  describe('sleepin', function() {
    it('Should return false if it is a weekday and it is not a vacation day', function() {
      assert.equal(false, warmUp.sleepIn(true, false));
    });
    it('Should return true if it is not a weekday and it is not a vacation day', function() {
      assert.equal(true, warmUp.sleepIn(false, false));
    });
    it('Should return true if it is a weekday but it is a vacation day', function() {
      assert.equal(true, warmUp.sleepIn(true, true));
    });
    it('Should return true if it is not a weekday but it is a vacation day', function() {
      assert.equal(true, warmUp.sleepIn(false, true));
    });
  });
});