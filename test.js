let assert = require('assert');
let warmUp = require('./testSubjects/warmUp.js')

let truthyValues = ['true', 'false', '', 'word', '1', '0', 1, 0, [], [1], {}, { 'true': false }, NaN, undefined, null];
let notNumbers = [NaN, '0', '1', '0.00', '1.00', 'I am not a number!', [], [1], {}, { 1: 2 }, true, false, null, undefined];
let notStrings = [NaN, null, undefined, true, false, 1, 0, [], ['Hi'], {}, { 'One': '1' }]
let notArrays = [NaN, null, undefined, true, false, 1, 1.00, '', 'Hi', {}, {1:1, 2:2, 3:3}];

describe('warmUp Problem Set', function () {
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

  describe('8) Near Hundred', function () {
    it('Should return true if argument is within 10 of 100', function () {
      assert.equal(true, warmUp.nearHundred(100));
      assert.equal(true, warmUp.nearHundred(110));
      assert.equal(true, warmUp.nearHundred(90));
      assert.equal(true, warmUp.nearHundred(104));
      assert.equal(true, warmUp.nearHundred(99));
    });
    it('Should return true if argument is within 10 of 200', function () {
      assert.equal(true, warmUp.nearHundred(200));
      assert.equal(true, warmUp.nearHundred(210));
      assert.equal(true, warmUp.nearHundred(190));
      assert.equal(true, warmUp.nearHundred(204));
      assert.equal(true, warmUp.nearHundred(199));
    });
    it('Should return false if argument is not within 10 of 100', function () {
      assert.equal(false, warmUp.nearHundred(111));
      assert.equal(false, warmUp.nearHundred(89));
      assert.equal(false, warmUp.nearHundred(0));
      assert.equal(false, warmUp.nearHundred(-100));
    });
    it('Should return false if argument is not within 10 of 200', function () {
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

  describe('9) Pos Neg', function () {
    it('Should return true if one of the first arguments is positive and the other is negative, and the last argument is false', function () {
      assert.equal(true, warmUp.posNeg(-1, 1, false));
      assert.equal(true, warmUp.posNeg(1, -1, false));
    });
    it('Should return true if the first two arguments are negative, and the last argument is true', function () {
      assert.equal(true, warmUp.posNeg(-1, -1, true));
      assert.equal(true, warmUp.posNeg(-12, -1, true));
    });
    it('Should return false if either of the first two arguments are positive, and the last argument is true', function () {
      assert.equal(false, warmUp.posNeg(-1, 1, true));
      assert.equal(false, warmUp.posNeg(1, -1, true));
      assert.equal(false, warmUp.posNeg(1, 1, true));
    });
    it('Should return false if the first two arguments are both negative or both positive, and the last argument is false', function () {
      assert.equal(false, warmUp.posNeg(-1, -1, false));
      assert.equal(false, warmUp.posNeg(1, 1, false));
    });
    it('Should throw if either the first or second argument is 0', function () {
      assert.throws(function () {
        warmUp.posNeg(-1, 0, false);
      }, RangeError);
      assert.throws(function () {
        warmUp.posNeg(0, 1, false);
      }, RangeError);
      assert.throws(function () {
        warmUp.posNeg(0, -1, true);
      }, RangeError);
      assert.throws(function () {
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

  describe('10) Not String', function () {
    it('Should return a string that starts with the word not', function () {
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
    it('Should throw if argument is not of type String', function () {
      for (value of notStrings) {
        assert.throws(function () {
          warmUp.notString(value);
        }, TypeError);
      }
    });
  });

  describe('11) Missing Char', function () {
    it('Should return a string composed of all the characters in the first argument, except the character at the index indicated in the second argument', function () {
      assert.equal('hell', warmUp.missingChar('hello', 4));
      assert.equal('ello', warmUp.missingChar('hello', 0));
      assert.equal('helo', warmUp.missingChar('hello', 2));
      assert.equal('', warmUp.missingChar('A', 0));
      assert.equal('A', warmUp.missingChar('Ai', 1));
      assert.equal('i', warmUp.missingChar('Ai', 0));
      assert.equal('555555555', warmUp.missingChar('5555555555', 5));
    });
    it('Should throw if the second argument is outside the range of the length of the string in the first argument', function () {
      assert.throws(function () {
        warmUp.missingChar('', 1000);
      }, RangeError);
      assert.throws(function () {
        warmUp.missingChar('', -1000)
      }, RangeError);
    });
    it('Should throw if the first argument is not of type String, or the second is not a number', function () {
      for (firstValue of notStrings) {
        for (secondValue of notNumbers) {
          assert.throws(function () {
            warmUp.notString(firstValue, secondValue);
          }, TypeError);
        }
      }
    });
  });
  describe('11) Front Back', function() {
    it('Should return a string with the first and last characters of the argument transposed', function() {
      assert.equal('cba', warmUp.frontBack('abc'));
      assert.equal('dello worlh', warmUp.frontBack('hello world'));
      assert.equal('aH', warmUp.frontBack('Ha'));
      assert.equal('I', warmUp.frontBack('I'));
      assert.equal('666', warmUp.frontBack('666'));
      assert.equal('   ', warmUp.frontBack('   '));
      assert.equal('\t \n', warmUp.frontBack('\n \t'));
    });
    it('Should throw if passed the empty string', function() {
      assert.throws(function() {
        warmUp.frontBack('');
      }, RangeError);
    });
    it('Should throw if argument is not of type String', function () {
      for (value of notStrings) {
        assert.throws(function () {
          warmUp.frontBack(value);
        }, TypeError);
      }
    });
  });

  describe('12) Front 3', function() {
    it('Should return a string composed of the first 3 characters in the argument, repeated 3 times, if the length of the argument is 3 or greater', function() {
      assert.equal('HooHooHoo', warmUp.front3('Hoot'));
      assert.equal('HooHooHoo', warmUp.front3('Hoo'));
      assert.equal('HooHooHoo', warmUp.front3('Hootie and the Blowfish'));
      assert.equal('runrunrun', warmUp.front3('run away!'));
      assert.equal('123123123', warmUp.front3('1234567890'));
      assert.equal('         ', warmUp.front3('   '));
    });
    it('Should return a string composed of the argument, repeated 3 times, if the length of the argument is less than 3', function() {
      assert.equal('HaHaHa', warmUp.front3('Ha'));
      assert.equal('666', warmUp.front3('6'));
      assert.equal('gogogo', warmUp.front3('go'));
      assert.equal('I I I ', warmUp.front3('I '));
      assert.equal(' I I I', warmUp.front3(' I'));
      assert.equal('   ', warmUp.front3(' '));
      assert.equal('', warmUp.front3(''));
    });
    it('Should throw if argument is not of type String', function () {
      for (value of notStrings) {
        assert.throws(function () {
          warmUp.front3(value);
        }, TypeError);
      }
    });
  });

  describe('13) Del Del', function() {
    it('Should return a string composed of the argument, minus any occurences of the substring del, and any extra whitespace surrounding the substring del', function() {
      assert.equal('abcfg', warmUp.delDel('abcdelfg'));
      assert.equal('Hello world.', warmUp.delDel('Hello del world.'));
      assert.equal('', warmUp.delDel('del'));
      assert.equal('', warmUp.delDel('deldeldel'));
      assert.equal('', warmUp.delDel('del del del'));
      assert.equal('', warmUp.delDel('deldel      del   del deldeldel del   del'));
      assert.equal('empire', warmUp.delDel('del empire del'));
      assert.equal('LIC', warmUp.delDel('del LIC   del'));
      assert.equal('Del', warmUp.delDel('Del'));
      assert.equal('DEL', warmUp.delDel('DEL'));
      assert.equal('abc', warmUp.delDel('adelbdelcdel'));
      assert.equal('ddeell', warmUp.delDel('ddedelell'));
      assert.equal('', warmUp.delDel(''));
      assert.equal(' ', warmUp.delDel(' '));
      assert.equal('no substring', warmUp.delDel('no substring'));
      assert.equal('nosubstring', warmUp.delDel('nosubstring'));
    });
    it('Should throw if argument is not of type String', function () {
      for (value of notStrings) {
        assert.throws(function () {
          warmUp.delDel(value);
        }, TypeError);
      }
    });
  });

  describe('14) Mix Start', function() {
    it('Should return true if the argument starts with the substring *ix, where the * stands for any character', function() {
      assert.equal(true, warmUp.mixStart('mix'));
      assert.equal(true, warmUp.mixStart('Mix'));
      assert.equal(true, warmUp.mixStart('MIX'));
      assert.equal(true, warmUp.mixStart('pix'));
      assert.equal(true, warmUp.mixStart('9ix'));
      assert.equal(true, warmUp.mixStart('Дix'));
      assert.equal(true, warmUp.mixStart('麻ix'));
      assert.equal(true, warmUp.mixStart('😃ix'));
      assert.equal(true, warmUp.mixStart(' ix'));
      assert.equal(true, warmUp.mixStart('\bix'));
      assert.equal(true, warmUp.mixStart('mixture'));
      assert.equal(true, warmUp.mixStart('mix it up'));
    });
    it('Should return false if the argument does not start with the substring *ix, where the * stands for any character', function() {
      assert.equal(false, warmUp.mixStart('mox'));
      assert.equal(false, warmUp.mixStart('Mox'));
      assert.equal(false, warmUp.mixStart('bux'));
      assert.equal(false, warmUp.mixStart('23664287'));
      assert.equal(false, warmUp.mixStart('ДaД'));
      assert.equal(false, warmUp.mixStart('麻3p'));
      assert.equal(false, warmUp.mixStart('😃ol'));
      assert.equal(false, warmUp.mixStart(' kl'));
      assert.equal(false, warmUp.mixStart('   mix'));
      assert.equal(false, warmUp.mixStart('Unix'));
      assert.equal(false, warmUp.mixStart('ipixel'));
      assert.equal(false, warmUp.mixStart('\bap'));
      assert.equal(false, warmUp.mixStart('mie'));
      assert.equal(false, warmUp.mixStart('xxx'));
      assert.equal(false, warmUp.mixStart(''));
      assert.equal(false, warmUp.mixStart('nothing'));
      assert.equal(false, warmUp.mixStart('not a thing'));
    });
    it('Should throw if argument is not of type String', function () {
      for (value of notStrings) {
        assert.throws(function () {
          warmUp.mixStart(value);
        }, TypeError);
      }
    });
  });

  describe('15) Int Max', function() {
    it('Should return the largest integer in a non-empty array which contains at least one integer', function() {
      assert.equal(100, warmUp.intMax([100]));
      assert.equal(-100, warmUp.intMax([-100]));
      assert.equal(0, warmUp.intMax([0]));
      assert.equal(Number.MIN_SAFE_INTEGER, warmUp.intMax([Number.MIN_SAFE_INTEGER]));
      assert.equal(10, warmUp.intMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
      assert.equal(10, warmUp.intMax([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
      assert.equal(Number.MAX_SAFE_INTEGER, warmUp.intMax([1, 4, 77, 9, 100, 82, -1, Number.MAX_SAFE_INTEGER, 20, 11]));
      assert.equal(76, warmUp.intMax([11, 11, 11, 11, 11, 11, 11, 76, 11, 11, 11, 11, 11, 11, 11]));
      assert.equal(11, warmUp.intMax([11, 11, 11, 11, 11, 11, 11, 11.2, 11, 11, 11, 11, 11, 11, 11]));
      assert.equal(1, warmUp.intMax([1.0, 2.5, 11.54, -1, 0.0001, 75.2, 1000.0001, 8.5])); // 1.0 will be coerced to 1, like it or not
      assert.equal(-1, warmUp.intMax([1.01, 2.5, 11.54, -1, 0.0001, 75.2, 1000.0001, 8.5]));
      assert.equal(-1, warmUp.intMax([-10, -111, -898, -2, -1, -99, -19]));
      assert.equal(Number.MAX_SAFE_INTEGER, warmUp.intMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 11, 11, 11, 11, 11.2, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11.2, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11.2, 11, 11, 11, 11, 11, 11, 11, 1.0, 2.5, 11.54, -1, 0, 0.000, 75.2, 1000.0001, 8.5, 1.0, 2.5, 11.54, -1, 0, 0.000, 75.2, 1000.0001, 8.5, 1.0, 2.5, 11.54, -1, 0, 0.000, 75.2, 1000.0001, 8.5, 1, 4, 77, 9, 100, 82, -1, Number.MAX_SAFE_INTEGER, 20, 11, 200, 444, 21, 19, 777777, 666, 13, 22, 5454, 4542, 542399, 770, 12999, 13223, 8, 9, 10, 11, 11, 11, 1.0, 2.5, 11.54, -1, 0, 0.000, 4232, 43234, 1111, 12545, 43234, 88898989, 424, 423432, 549889, 899898, 1010, 213, 32323, 3232, 23, 435345, 5448, 888, 88, 884784, 99493, 6666, 3435, 2222, 2323232323, 88989, 57473783, 21218, 785, 6565, 333, 32324234, 42, 12313, 45353453534534, 34888, 558, 884, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1000000000001, 1000000000002, 100000000001, 9, 1091231, 4324, 10.1, 10.2, 10.3]));
      assert.equal(1, warmUp.intMax(['1', '2', '3', 1, 'four', 'niner']));
    });
    it('Should throw if passed an array containing no valid integers', function() {
      assert.throws(function() {
        warmUp.intMax([]);
      }, TypeError);
      assert.throws(function() {
        warmUp.intMax(['1', '2', '3'])
      }, TypeError);
      assert.throws(function() {
        warmUp.intMax(['one', 'two', 'three'])
      }, TypeError);
      assert.throws(function() {
        warmUp.intMax([[1], [2], [3]])
      }, TypeError);
      assert.throws(function() {
        warmUp.intMax([1.0001, 1.002, 1.003])
      }, TypeError);
      assert.throws(function() {
        warmUp.intMax([{1:1, 2:2, 3:3}, {4:4}, {5:5, 6:6, 7:7, 8:8}])
      }, TypeError);
    });
    it('Should throw if passed an Object that is not an array', function () {
      for (value of notArrays) {
        assert.throws(function() {
          warmUp.intMax(value);
        }, TypeError);
      }
    });
  });

  describe('16) Close 10', function() {
    it('Should return 0 if both arguments are equidistant from 10', function() {
      assert.equal(0, warmUp.close10(10, 10));
      assert.equal(0, warmUp.close10(11, 9));
      assert.equal(0, warmUp.close10(5, 15));
      assert.equal(0, warmUp.close10(0, 0));
      assert.equal(0, warmUp.close10(210, -190));
      assert.equal(0, warmUp.close10(-1, -1));
    });
    it('Should return the argument that is closer to 10', function() {
      assert.equal(10, warmUp.close10(10, 1000));
      assert.equal(0, warmUp.close10(100, 0));
      assert.equal(5, warmUp.close10(5, 16));
      assert.equal(-1, warmUp.close10(-1, -20));
      assert.equal(210, warmUp.close10(210, -210));
    });
    it('Should throw if first or second argument is NaN or not of type Number', function() {
      for (firstValue of notNumbers) {
        for (secondValue of notNumbers) {
          assert.throws(function () {
            warmUp.close10(firstValue, secondValue);
          }, TypeError);
        }
      }
    });
  });

  describe('17) String E', function() {
    it('Should return true if argument contains 1 to 3 letter Es', function() {
      assert.equal(true, warmUp.stringE('Well'));
      assert.equal(true, warmUp.stringE('reel'));
      assert.equal(true, warmUp.stringE('effective'));
      assert.equal(true, warmUp.stringE('Eel'));
      assert.equal(true, warmUp.stringE('screEched'));
      assert.equal(true, warmUp.stringE('e'));
      assert.equal(true, warmUp.stringE('hello world'));
      assert.equal(true, warmUp.stringE('E'));
      assert.equal(true, warmUp.stringE('Greenery'));
      assert.equal(true, warmUp.stringE('Eugene'));
      assert.equal(true, warmUp.stringE('heelies'));
      assert.equal(true, warmUp.stringE('eieio'));
    });
    it('Should return false if argument contains 0 letter Es, or more than 3', function() {
      assert.equal(false, warmUp.stringE(''));
      assert.equal(false, warmUp.stringE(' '));
      assert.equal(false, warmUp.stringE('5'));
      assert.equal(false, warmUp.stringE('ε'));
      assert.equal(false, warmUp.stringE('Will'));
      assert.equal(false, warmUp.stringE('rail'));
      assert.equal(false, warmUp.stringE('Weewee'));
      assert.equal(false, warmUp.stringE('Engineered'));
      assert.equal(false, warmUp.stringE('electrically etched'));
      assert.equal(false, warmUp.stringE('66eee77eee99'));
      assert.equal(false, warmUp.stringE('EeEeE')); 
      assert.equal(false, warmUp.stringE('eeeeeeeeeeee'));     
      assert.equal(false, warmUp.stringE('heeheeheeheehee'));
    });
  });
  it('Should throw if argument is not of type String', function () {
    for (value of notStrings) {
      assert.throws(function () {
        warmUp.stringE(value);
      }, TypeError);
    }
  });

  describe('18) Last Digit', function() {
    it('Should return true if both arguments have the same last digit', function() {
      assert.equal(true, warmUp.lastDigit(21, 21));
      assert.equal(true, warmUp.lastDigit(1, 21));
      assert.equal(true, warmUp.lastDigit(430000000002, 502));
      assert.equal(true, warmUp.lastDigit(-27, 937));
      assert.equal(true, warmUp.lastDigit(-13, -933));
      assert.equal(true, warmUp.lastDigit(6, 6));
    })
    it('Should return false if neither argument has the same last digit', function() {
      assert.equal(false, warmUp.lastDigit(21, 20));
      assert.equal(false, warmUp.lastDigit(1, 0));
      assert.equal(false, warmUp.lastDigit(100213, 21312312));
      assert.equal(false, warmUp.lastDigit(-33, -1));
      assert.equal(false, warmUp.lastDigit(21, -1115));
    })
    it('Should throw if passed NaN or if either argument is not of type Number', function () {
      for (firstValue of notNumbers) {
        for (secondValue of notNumbers) {
          assert.throws(function () {
            warmUp.lastDigit(firstValue, secondValue);
          }, TypeError);
        }
      }
    });
  });
});