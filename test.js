let assert = require('assert');

let warmUp = require('./testSubjects/warmUp.js')

let truthyValues = ['true', 'false', '', 'word', '1', '0', 1, 0, [], [1], {}, {'true': false}, NaN, undefined, null];
let notNumbers = [NaN, '0', '1', '0.00', '1.00', 'I am not a number!', [], [1], {}, {1:2}, true, false, null, undefined];

describe('Warmup Problem Set', function () {
  describe('1) Fizz Buzz', function () {
    it('Should return 0 if passed 0', function() {
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
    it('Should return the original number if not a multiple of 3 and/or 5, and not 0', function () {
      assert.equal(17, warmUp.fizzBuzz(17));
      assert.equal(71, warmUp.fizzBuzz(71));
      assert.equal(202, warmUp.fizzBuzz(202));
      assert.equal(1234567, warmUp.fizzBuzz(1234567));
    });
    it('Should throw if passed NaN or if argument is not of type Number', function () {
      for (value of notNumbers) {
        assert.throws(function() {
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
    it('Should throw if either argument is not of type Bool, regardless of truthiness', function() {
      for (firstValue of truthyValues) {
        for (secondValue of truthyValues) {
          assert.throws(function() {
            warmUp.sleepIn(firstValue, secondValue);
          }, TypeError);
        }
      }
    });
  });

  describe('3) Monkey Trouble', function() {
    it('Should return true if both are smiling', function() {
      assert.equal(true, warmUp.monkeyTrouble(true, true));
    });
    it('Should return true if neither is smiling', function() {
      assert.equal(true, warmUp.monkeyTrouble(false, false));
    });
    it('Should return false if A is smiling and B is not smiling', function() {
      assert.equal(false, warmUp.monkeyTrouble(true, false));
    });
    it('Should return false if A is not smiling and B is smiling', function() {
      assert.equal(false, warmUp.monkeyTrouble(false, true));
    });
    it('Should throw if either argument is not of type Bool, regardless of truthiness', function() {
      for (firstValue of truthyValues) {
        for (secondValue of truthyValues) {
          assert.throws(function() {
            warmUp.monkeyTrouble(firstValue, secondValue);
          }, TypeError);
        }
      }
    });
  });

  describe('4) Sum Double', function() {
    it('Should return the sum of the two arguments if the two arguments are different values', function() {
      assert.equal(8, warmUp.sumDouble(3, 5));
      assert.equal(24, warmUp.sumDouble(-1, 25));
      assert.equal(100, warmUp.sumDouble(51, 49));
      assert.equal(4012, warmUp.sumDouble(0, 4012));
    });
    it('Should return double the sum of the two arguments if the two arguments are the same value', function() {
      assert.equal(8, warmUp.sumDouble(2, 2));
      assert.equal(24, warmUp.sumDouble(6, 6));
      assert.equal(100, warmUp.sumDouble(25, 25));
      assert.equal(4012, warmUp.sumDouble(1003, 1003));
    });
    it('Should throw if passed NaN or if argument is not of type Number', function () {
      for (firstValue of notNumbers) {
        for (secondValue of notNumbers) {
          assert.throws(function() {
            warmUp.sumDouble(firstValue, secondValue);
          }, TypeError);
        }
      }
    });
  });
});