let assert = require('assert');
let warmUp = require('./testSubjects/warmUp.js')

let truthyValues = ['true', 'false', '', 'word', '1', '0', 1, 0, [], [1], {}, { 'true': false }, NaN, undefined, null];
let notNumbers = [NaN, '0', '1', '0.00', '1.00', 'I am not a number!', [], [1], {}, { 1: 2 }, true, false, null, undefined];
let notStrings = [NaN, null, undefined, true, false, 1, 0, [], ['Hi'], {}, {'One': '1'}]

describe('Warmup Problem Set', function () {
  describe('1) Fizz Buzz', function () {
    it('Should return 0 if passed 0', function () {
      assert.equal(0, warmUp.fizzBuzz(0));
    });
    it('Should return Fizz if multiple of 3', function () {
      assert.equal('Fizz', warmUp.fizzBuzz(3));
      assert.equal('Fizz', warmUp.fizzBuzz(6));
      assert.equal('Fizz', warmUp.fizzBuzz(9));
      assert.equal('Fizz', warmUp.fizzBuzz(369));
      assert.equal('Fizz', warmUp.fizzBuzz(-3));
    });
    it('Should return Buzz if multiple of 5', function () {
      assert.equal('Buzz', warmUp.fizzBuzz(5));
      assert.equal('Buzz', warmUp.fizzBuzz(10));
      assert.equal('Buzz', warmUp.fizzBuzz(20));
      assert.equal('Buzz', warmUp.fizzBuzz(100015));
      assert.equal('Buzz', warmUp.fizzBuzz(-5));
    });
    it('Should return FizzBuzz if multiple of 3 and 5', function () {
      assert.equal('FizzBuzz', warmUp.fizzBuzz(15));
      assert.equal('FizzBuzz', warmUp.fizzBuzz(30));
      assert.equal('FizzBuzz', warmUp.fizzBuzz(45));
      assert.equal('FizzBuzz', warmUp.fizzBuzz(3375));
      assert.equal('FizzBuzz', warmUp.fizzBuzz(-15));
    });
    it('Should return the original number if not a multiple of 3 and/or 5', function () {
      assert.equal(17, warmUp.fizzBuzz(17));
      assert.equal(71, warmUp.fizzBuzz(71));
      assert.equal(202, warmUp.fizzBuzz(202));
      assert.equal(1234567, warmUp.fizzBuzz(1234567));
    });
    it('Should throw if passed NaN or if argument is not of type Number', function () {
      for (value of notNumbers) {
        assert.throws(function () {
          warmUp.fizzBuzz(value);
        }, TypeError);
      }
    });
  });

  describe('2) Sleep In', function () {
    it('Should return false if it is a weekday and it is not a vacation day', function () {
      assert.equal(false, warmUp.sleepIn(true, false));
    });
    it('Should return true if it is not a weekday and it is not a vacation day', function () {
      assert.equal(true, warmUp.sleepIn(false, false));
    });
    it('Should return true if it is a weekday but it is a vacation day', function () {
      assert.equal(true, warmUp.sleepIn(true, true));
    });
    it('Should return true if it is not a weekday but it is a vacation day', function () {
      assert.equal(true, warmUp.sleepIn(false, true));
    });
    it('Should throw if either argument is not of type Bool, regardless of truthiness', function () {
      for (firstValue of truthyValues) {
        for (secondValue of truthyValues) {
          assert.throws(function () {
            warmUp.sleepIn(firstValue, secondValue);
          }, TypeError);
        }
      }
    });
  });

  describe('3) Monkey Trouble', function () {
    it('Should return true if both are true', function () {
      assert.equal(true, warmUp.monkeyTrouble(true, true));
    });
    it('Should return true if neither is true', function () {
      assert.equal(true, warmUp.monkeyTrouble(false, false));
    });
    it('Should return false if A is true and B is false', function () {
      assert.equal(false, warmUp.monkeyTrouble(true, false));
    });
    it('Should return false if A is false and B is true', function () {
      assert.equal(false, warmUp.monkeyTrouble(false, true));
    });
    it('Should throw if either argument is not of type Bool, regardless of truthiness', function () {
      for (firstValue of truthyValues) {
        for (secondValue of truthyValues) {
          assert.throws(function () {
            warmUp.monkeyTrouble(firstValue, secondValue);
          }, TypeError);
        }
      }
    });
  });

  describe('4) Sum Double', function () {
    it('Should return the sum of the two arguments if the two arguments are different values', function () {
      assert.equal(8, warmUp.sumDouble(3, 5));
      assert.equal(24, warmUp.sumDouble(-1, 25));
      assert.equal(100, warmUp.sumDouble(51, 49));
      assert.equal(4012, warmUp.sumDouble(0, 4012));
      assert.equal(-666, warmUp.sumDouble(-6, -660));
    });
    it('Should return double the sum of the two arguments if the two arguments are the same value', function () {
      assert.equal(8, warmUp.sumDouble(2, 2));
      assert.equal(24, warmUp.sumDouble(6, 6));
      assert.equal(100, warmUp.sumDouble(25, 25));
      assert.equal(4012, warmUp.sumDouble(1003, 1003));
    });
    it('Should throw if passed NaN or if argument is not of type Number', function () {
      for (firstValue of notNumbers) {
        for (secondValue of notNumbers) {
          assert.throws(function () {
            warmUp.sumDouble(firstValue, secondValue);
          }, TypeError);
        }
      }
    });
  });

  describe('5) Diff 21', function () {
    it('Should return the absolute difference between the argument and 21, if the value is at or below 21', function () {
      assert.equal(0, warmUp.diff21(21));
      assert.equal(1, warmUp.diff21(20));
      assert.equal(20, warmUp.diff21(1));
      assert.equal(21, warmUp.diff21(0));
      assert.equal(42, warmUp.diff21(-21));
    });
    it('Should return double the absolute difference between the argument and 21, if the argument is greater than 21', function () {
      assert.equal(2, warmUp.diff21(22));
      assert.equal(18, warmUp.diff21(30));
      assert.equal(158, warmUp.diff21(100));
      assert.equal(1958, warmUp.diff21(1000));
    });
    it('Should throw if passed NaN or if argument is not of type Number', function () {
      for (value of notNumbers) {
        assert.throws(function () {
          warmUp.fizzBuzz(value);
        }, TypeError);
      }
    });
  });

  describe('6) Parrot Trouble', function () {
    it('Should return true if first argument is true, and the second argument is before 7 or after 20', function () {
      assert.equal(true, warmUp.parrotTrouble(true, 0));
      assert.equal(true, warmUp.parrotTrouble(true, 3));
      assert.equal(true, warmUp.parrotTrouble(true, 6));
      assert.equal(true, warmUp.parrotTrouble(true, 21));
      assert.equal(true, warmUp.parrotTrouble(true, 23));
    });
    it('Should return false if first argument is false, and the second argument is before 7 or after 20', function () {
      assert.equal(false, warmUp.parrotTrouble(false, 0));
      assert.equal(false, warmUp.parrotTrouble(false, 3));
      assert.equal(false, warmUp.parrotTrouble(false, 6));
      assert.equal(false, warmUp.parrotTrouble(false, 21));
      assert.equal(false, warmUp.parrotTrouble(false, 23));
    });
    it('Should return false if first argument is true, and the second argument is between 8 and 20 inclusive', function () {
      assert.equal(false, warmUp.parrotTrouble(true, 8));
      assert.equal(false, warmUp.parrotTrouble(true, 20));
      assert.equal(false, warmUp.parrotTrouble(true, 12));
      assert.equal(false, warmUp.parrotTrouble(true, 14));
    });
    it('Should return false if first argument is false, and the second argument is between 8 and 20 inclusive', function () {
      assert.equal(false, warmUp.parrotTrouble(false, 8));
      assert.equal(false, warmUp.parrotTrouble(false, 19));
      assert.equal(false, warmUp.parrotTrouble(false, 12));
      assert.equal(false, warmUp.parrotTrouble(false, 20));
    });
    it('Should throw if second argument is not a proper value for an hour in military time', function () {
      assert.throws(function () {
        warmUp.parrotTrouble(true, -1);
      }, RangeError);
      assert.throws(function () {
        warmUp.parrotTrouble(false, -12);
      }, RangeError);
      assert.throws(function () {
        warmUp.parrotTrouble(true, 24);
      }, RangeError);
      assert.throws(function () {
        warmUp.parrotTrouble(false, 60);
      }, RangeError);
    });
    it('Should throw if first argument is not a Bool, and/or second is not a number', function () {
      for (firstValue of truthyValues) {
        for (secondValue of notNumbers) {
          assert.throws(function () {
            warmUp.parrotTrouble(firstValue, secondValue);
          }, TypeError);
        }
      }
    });
  });

  describe('7) Makes 10', function () {
    it('Should return true if one of the arguments is 10', function () {
      assert.equal(true, warmUp.makes10(10, 0));
      assert.equal(true, warmUp.makes10(0, 10));
      assert.equal(true, warmUp.makes10(10, 10));
      assert.equal(true, warmUp.makes10(10, 100005));
      assert.equal(true, warmUp.makes10(666, 10));
    });
    it('Should return true if the sum of the arguments is 10', function () {
      assert.equal(true, warmUp.makes10(5, 5));
      assert.equal(true, warmUp.makes10(9, 1));
      assert.equal(true, warmUp.makes10(-40, 50));
      assert.equal(true, warmUp.makes10(60, -50));
    });
    it('Should return false if neither argument is 10 and the sum of the arguments is not 10', function () {
      assert.equal(false, warmUp.makes10(11, 21));
      assert.equal(false, warmUp.makes10(0, 0));
      assert.equal(false, warmUp.makes10(1, 8));
      assert.equal(false, warmUp.makes10(-72, 88));
    });
    it('Should throw if passed NaN or if either argument is not of type Number', function () {
      for (firstValue of notNumbers) {
        for (secondValue of notNumbers) {
          assert.throws(function () {
            warmUp.makes10(firstValue, secondValue);
          }, TypeError);
        }
      }
    });
  });

  describe('8) Near Hundred', function() {
    it('Should return true if argument is within 10 of 100', function() {
      assert.equal(true, warmUp.nearHundred(100));
      assert.equal(true, warmUp.nearHundred(110));
      assert.equal(true, warmUp.nearHundred(90));
      assert.equal(true, warmUp.nearHundred(104));
      assert.equal(true, warmUp.nearHundred(99));
    });
    it('Should return true if argument is within 10 of 200', function() {
      assert.equal(true, warmUp.nearHundred(200));
      assert.equal(true, warmUp.nearHundred(210));
      assert.equal(true, warmUp.nearHundred(190));
      assert.equal(true, warmUp.nearHundred(204));
      assert.equal(true, warmUp.nearHundred(199));
    });
    it('Should return false if argument is not within 10 of 100', function() {
      assert.equal(false, warmUp.nearHundred(111));
      assert.equal(false, warmUp.nearHundred(89));
      assert.equal(false, warmUp.nearHundred(0));
      assert.equal(false, warmUp.nearHundred(-100));
    });
    it('Should return false if argument is not within 10 of 200', function() {
      assert.equal(false, warmUp.nearHundred(211));
      assert.equal(false, warmUp.nearHundred(189));
      assert.equal(false, warmUp.nearHundred(3000000));
      assert.equal(false, warmUp.nearHundred(-200));
    });
    it('Should throw if passed NaN or if argument is not of type Number', function () {
      for (value of notNumbers) {
        assert.throws(function () {
          warmUp.nearHundred(value);
        }, TypeError);
      }
    });
  });

  describe('9) Pos Neg', function() {
    it('Should return true if one of the first arguments is positive and the other is negative, and the last argument is false', function() {
      assert.equal(true, warmUp.posNeg(-1, 1, false));
      assert.equal(true, warmUp.posNeg(1, -1, false));
    });
    it('Should return true if the first two arguments are negative, and the last argument is true', function() {
      assert.equal(true, warmUp.posNeg(-1, -1, true));
      assert.equal(true, warmUp.posNeg(-12, -1, true));
    });
    it('Should return false if either of the first two arguments are positive, and the last argument is true', function() {
      assert.equal(false, warmUp.posNeg(-1, 1, true));
      assert.equal(false, warmUp.posNeg(1, -1, true));
      assert.equal(false, warmUp.posNeg(1, 1, true));
    });
    it('Should return false if the first two arguments are both negative or both positive, and the last argument is false', function() {
      assert.equal(false, warmUp.posNeg(-1, -1, false));
      assert.equal(false, warmUp.posNeg(1, 1, false));
    });
    it('Should throw if either the first or second argument is 0', function() {
      assert.throws(function() {
        warmUp.posNeg(-1, 0, false);
      }, RangeError);
      assert.throws(function() {
        warmUp.posNeg(0, 1, false);
      }, RangeError);
      assert.throws(function() {
        warmUp.posNeg(0, -1, true);
      }, RangeError);
      assert.throws(function() {
        warmUp.posNeg(1, 0, true);
      }, RangeError);
    });
    it('Should throw if first argument is not a number, and/or second argument is not a number, and/or second is not of type Bool', function () {
      for (firstValue of notNumbers) {
        for (secondValue of notNumbers) {
          for (thirdValue of truthyValues) {
            assert.throws(function () {
              warmUp.posNeg(firstValue, secondValue, thirdValue);
            }, TypeError);
          }
        }
      }
    });
  });

  describe('10) Not String', function() {
    it('Should return a string that starts with the word not', function() {
      assert.equal('not bad', warmUp.notString('bad'));
      assert.equal('not bad', warmUp.notString('not bad'));
      assert.equal('not 1', warmUp.notString('1'));
      assert.equal('not 1', warmUp.notString('not 1'));
      assert.equal('not', warmUp.notString(''));
      assert.equal('not note', warmUp.notString('note'));
      assert.equal('not no', warmUp.notString('no'));
      assert.equal('not n', warmUp.notString('n'));
      assert.equal('not is not', warmUp.notString('is not'));
      assert.equal('not zzxasxsdcwefeffefr334f34fede', warmUp.notString('zzxasxsdcwefeffefr334f34fede'));
      assert.equal('not zzxasxsdcwefeffefr334f34fede', warmUp.notString('not zzxasxsdcwefeffefr334f34fede'));
    });
    it('Should throw if argument is not of type String', function() {
      for (value of notStrings) {
        assert.throws(function () {
          warmUp.notString(value);
        }, TypeError);
      }
    });
  });
});