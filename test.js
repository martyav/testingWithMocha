let assert = require('assert');
let warmUp = require('./testSubjects/warmUp.js');
let archive = require('./testSubjects/interviewArchive.js');
let MyNode = require('./testSubjects/myNode.js');
let MyLinkedList = require('./testSubjects/myLinkedList.js');

let truthyValues = ['true', 'false', '', 'word', '1', '0', 1, 0, [], [1], {}, { 'true': false }, NaN, undefined, null];
let notNumbers = [NaN, '0', '1', '0.00', '1.00', 'I am not a number!', [], [1], {}, { 1: 2 }, true, false, null, undefined];
let notStrings = [NaN, null, undefined, true, false, 1, 0, [], ['Hi'], {}, { 'One': '1' }]
let notArrays = [NaN, null, undefined, true, false, 1, 1.00, '', 'Hi', {}, { 1: 1, 2: 2, 3: 3 }];

let nodes = [];
let linkedList;

describe('interviewArchive Problem Set', function () {
  describe('1) Smallest Positive Integer', function () {
    it('Should return the smallest positive integer missing from the array', function() {
      assert.strictEqual(1, archive.smallestPostiveInteger([2]));
      assert.strictEqual(2, archive.smallestPostiveInteger([1]));
      assert.strictEqual(1, archive.smallestPostiveInteger([2,3,4,5]));
      assert.strictEqual(2, archive.smallestPostiveInteger([1,3,4,5]));
      assert.strictEqual(3, archive.smallestPostiveInteger([1,2,4,5]));
      assert.strictEqual(4, archive.smallestPostiveInteger([1,2,3,5]));
      assert.strictEqual(5, archive.smallestPostiveInteger([1,2,3,4]));
      assert.strictEqual(6, archive.smallestPostiveInteger([5,4,3,2,1]));
      assert.strictEqual(7, archive.smallestPostiveInteger([1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,6,6,6,666]));
      assert.strictEqual(8, archive.smallestPostiveInteger([3,2,6,4,7,1,2,21,5,12,4]));
      assert.strictEqual(9, archive.smallestPostiveInteger([-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,10,11,13,14,15,16,17,18,19,20]));
      assert.strictEqual(10, archive.smallestPostiveInteger([-5,1,4,0,1,2,-10,100,-1000,-10000,0,0.0,8,8,8,5,6,5,7,3,5,-5,9]));
    });
    it('Should return positive 1 if all values in the array are 0 or negative, or if passed the empty array', function() {
      assert.strictEqual(1, archive.smallestPostiveInteger([-1,-2,-3]));
      assert.strictEqual(1, archive.smallestPostiveInteger([0,-1,-2,-3]));
      assert.strictEqual(1, archive.smallestPostiveInteger([0,0,0]));
      assert.strictEqual(1, archive.smallestPostiveInteger([]));
    });
  });
});

describe('myNode Class Implementation', function() {
  describe('1) Instantiate New Node', function() {
    it('Should be able to instantiate new nodes', function() {
      let node1 = new MyNode(0);
      let node2 = new MyNode(1);

      nodes.push(node1, node2);

      assert.strictEqual(0, nodes[0].value);
      assert.strictEqual(1, nodes[1].value);
    });
  });
  describe('2) Check Operations', function() {
    it('Should be able to set a next', function() {
      nodes[0].next = nodes[1];

      assert.strictEqual(nodes[1], nodes[0].next);
    });
    it('Should be able to remove next', function() {
      nodes[0].removeNext();
      assert.strictEqual(null, nodes[0].next);
    });
  });
});

describe('myLinkedList Class Implementation', function() {
  describe('1) Instantiate Linked List', function() {
    it('Should be able to instantiate a new linked list', function() {
      linkedList = new MyLinkedList(nodes[0]);

      assert.notStrictEqual(null, linkedList);
      assert.notStrictEqual(null, linkedList.head);
    });
    it('Should have a head with the given node value', function() {
      assert.strictEqual(0, linkedList.head.value);
    });
    it('Should not have a next set for the head yet', function() {
      assert.strictEqual(null, linkedList.head.next);
    });
  });
  describe('2) Check Operations', function() {
    it('Should be able to add a second node by setting it as the next for the head', function() {
      linkedList.push(1);

      assert.strictEqual(1, linkedList.head.next.value);
    });
    it('Should be able to add arbitrarily more nodes by making each new node the next for the last node in the sequence', function() {
      linkedList.push(2);
      linkedList.push(3);
      linkedList.push(4);

      assert.strictEqual(0, linkedList.head.value);
      assert.strictEqual(1, linkedList.head.next.value);
      assert.strictEqual(2, linkedList.head.next.next.value);
      assert.strictEqual(3, linkedList.head.next.next.next.value);
      assert.strictEqual(4, linkedList.head.next.next.next.next.value);
    });
    it('Should be able to pop nodes', function() {
      assert.strictEqual(4, linkedList.pop().value);
      assert.strictEqual(3, linkedList.pop().value);
      assert.strictEqual(2, linkedList.pop().value);
      assert.strictEqual(1, linkedList.pop().value);
    });
    it('Should be able to peek at the last node without popping it off', function() {
      assert.strictEqual(0, linkedList.peek().value);

      linkedList.push(1);

      assert.strictEqual(1, linkedList.peek().value);

      linkedList.push(2);

      assert.strictEqual(2, linkedList.peek().value);

      linkedList.push(3);

      assert.strictEqual(3, linkedList.peek().value);

      linkedList.push(4);

      assert.strictEqual(4, linkedList.peek().value);
    });
    it('Should be able to check if a value is contained in the list', function() {
      assert.strictEqual(true, linkedList.contains(0));
      assert.strictEqual(true, linkedList.contains(1));
      assert.strictEqual(true, linkedList.contains(2));
      assert.strictEqual(true, linkedList.contains(3));
      assert.strictEqual(true, linkedList.contains(4));
      assert.strictEqual(false, linkedList.contains(5));
      assert.strictEqual(false, linkedList.contains('3'));
      assert.strictEqual(false, linkedList.contains());
    });
    it('Should search for and return a node containing the value requested', function() {
      assert.strictEqual(0,linkedList.find(0).value);
      assert.strictEqual(1,linkedList.find(1).value);
      assert.strictEqual(2,linkedList.find(2).value);
      assert.strictEqual(3,linkedList.find(3).value);
      assert.strictEqual(4,linkedList.find(4).value);
    });
    it('Should return undefined if the value requested is not found', function() {
      assert.strictEqual(undefined, linkedList.find(5));
      assert.strictEqual(undefined, linkedList.find());
      assert.strictEqual(undefined, linkedList.find(''));
      assert.strictEqual(undefined, linkedList.find('3'));
    });
  });
});

describe('warmUp Problem Set', function () {
  describe('1) Fizz Buzz', function () {
    it('Should return 0 if passed 0', function () {
      assert.strictEqual('0', warmUp.fizzBuzz(0));
    });
    it('Should return Fizz if multiple of 3', function () {
      assert.strictEqual('Fizz', warmUp.fizzBuzz(3));
      assert.strictEqual('Fizz', warmUp.fizzBuzz(6));
      assert.strictEqual('Fizz', warmUp.fizzBuzz(9));
      assert.strictEqual('Fizz', warmUp.fizzBuzz(369));
      assert.strictEqual('Fizz', warmUp.fizzBuzz(-3));
    });
    it('Should return Buzz if multiple of 5', function () {
      assert.strictEqual('Buzz', warmUp.fizzBuzz(5));
      assert.strictEqual('Buzz', warmUp.fizzBuzz(10));
      assert.strictEqual('Buzz', warmUp.fizzBuzz(20));
      assert.strictEqual('Buzz', warmUp.fizzBuzz(100015));
      assert.strictEqual('Buzz', warmUp.fizzBuzz(-5));
    });
    it('Should return FizzBuzz if multiple of 3 and 5', function () {
      assert.strictEqual('FizzBuzz', warmUp.fizzBuzz(15));
      assert.strictEqual('FizzBuzz', warmUp.fizzBuzz(30));
      assert.strictEqual('FizzBuzz', warmUp.fizzBuzz(45));
      assert.strictEqual('FizzBuzz', warmUp.fizzBuzz(3375));
      assert.strictEqual('FizzBuzz', warmUp.fizzBuzz(-15));
    });
    it('Should return the original number if not a multiple of 3 and/or 5', function () {
      assert.strictEqual('17', warmUp.fizzBuzz(17));
      assert.strictEqual('71', warmUp.fizzBuzz(71));
      assert.strictEqual('202', warmUp.fizzBuzz(202));
      assert.strictEqual('1234567', warmUp.fizzBuzz(1234567));
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
      assert.strictEqual(false, warmUp.sleepIn(true, false));
    });
    it('Should return true if it is not a weekday and it is not a vacation day', function () {
      assert.strictEqual(true, warmUp.sleepIn(false, false));
    });
    it('Should return true if it is a weekday but it is a vacation day', function () {
      assert.strictEqual(true, warmUp.sleepIn(true, true));
    });
    it('Should return true if it is not a weekday but it is a vacation day', function () {
      assert.strictEqual(true, warmUp.sleepIn(false, true));
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
      assert.strictEqual(true, warmUp.monkeyTrouble(true, true));
    });
    it('Should return true if neither is true', function () {
      assert.strictEqual(true, warmUp.monkeyTrouble(false, false));
    });
    it('Should return false if A is true and B is false', function () {
      assert.strictEqual(false, warmUp.monkeyTrouble(true, false));
    });
    it('Should return false if A is false and B is true', function () {
      assert.strictEqual(false, warmUp.monkeyTrouble(false, true));
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
      assert.strictEqual(8, warmUp.sumDouble(3, 5));
      assert.strictEqual(24, warmUp.sumDouble(-1, 25));
      assert.strictEqual(100, warmUp.sumDouble(51, 49));
      assert.strictEqual(4012, warmUp.sumDouble(0, 4012));
      assert.strictEqual(-666, warmUp.sumDouble(-6, -660));
    });
    it('Should return double the sum of the two arguments if the two arguments are the same value', function () {
      assert.strictEqual(8, warmUp.sumDouble(2, 2));
      assert.strictEqual(24, warmUp.sumDouble(6, 6));
      assert.strictEqual(100, warmUp.sumDouble(25, 25));
      assert.strictEqual(4012, warmUp.sumDouble(1003, 1003));
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
      assert.strictEqual(0, warmUp.diff21(21));
      assert.strictEqual(1, warmUp.diff21(20));
      assert.strictEqual(20, warmUp.diff21(1));
      assert.strictEqual(21, warmUp.diff21(0));
      assert.strictEqual(42, warmUp.diff21(-21));
    });
    it('Should return double the absolute difference between the argument and 21, if the argument is greater than 21', function () {
      assert.strictEqual(2, warmUp.diff21(22));
      assert.strictEqual(18, warmUp.diff21(30));
      assert.strictEqual(158, warmUp.diff21(100));
      assert.strictEqual(1958, warmUp.diff21(1000));
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
      assert.strictEqual(true, warmUp.parrotTrouble(true, 0));
      assert.strictEqual(true, warmUp.parrotTrouble(true, 3));
      assert.strictEqual(true, warmUp.parrotTrouble(true, 6));
      assert.strictEqual(true, warmUp.parrotTrouble(true, 21));
      assert.strictEqual(true, warmUp.parrotTrouble(true, 23));
    });
    it('Should return false if first argument is false, and the second argument is before 7 or after 20', function () {
      assert.strictEqual(false, warmUp.parrotTrouble(false, 0));
      assert.strictEqual(false, warmUp.parrotTrouble(false, 3));
      assert.strictEqual(false, warmUp.parrotTrouble(false, 6));
      assert.strictEqual(false, warmUp.parrotTrouble(false, 21));
      assert.strictEqual(false, warmUp.parrotTrouble(false, 23));
    });
    it('Should return false if first argument is true, and the second argument is between 8 and 20 inclusive', function () {
      assert.strictEqual(false, warmUp.parrotTrouble(true, 8));
      assert.strictEqual(false, warmUp.parrotTrouble(true, 20));
      assert.strictEqual(false, warmUp.parrotTrouble(true, 12));
      assert.strictEqual(false, warmUp.parrotTrouble(true, 14));
    });
    it('Should return false if first argument is false, and the second argument is between 8 and 20 inclusive', function () {
      assert.strictEqual(false, warmUp.parrotTrouble(false, 8));
      assert.strictEqual(false, warmUp.parrotTrouble(false, 19));
      assert.strictEqual(false, warmUp.parrotTrouble(false, 12));
      assert.strictEqual(false, warmUp.parrotTrouble(false, 20));
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
      assert.strictEqual(true, warmUp.makes10(10, 0));
      assert.strictEqual(true, warmUp.makes10(0, 10));
      assert.strictEqual(true, warmUp.makes10(10, 10));
      assert.strictEqual(true, warmUp.makes10(10, 100005));
      assert.strictEqual(true, warmUp.makes10(666, 10));
    });
    it('Should return true if the sum of the arguments is 10', function () {
      assert.strictEqual(true, warmUp.makes10(5, 5));
      assert.strictEqual(true, warmUp.makes10(9, 1));
      assert.strictEqual(true, warmUp.makes10(-40, 50));
      assert.strictEqual(true, warmUp.makes10(60, -50));
    });
    it('Should return false if neither argument is 10 and the sum of the arguments is not 10', function () {
      assert.strictEqual(false, warmUp.makes10(11, 21));
      assert.strictEqual(false, warmUp.makes10(0, 0));
      assert.strictEqual(false, warmUp.makes10(1, 8));
      assert.strictEqual(false, warmUp.makes10(-72, 88));
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
      assert.strictEqual(true, warmUp.nearHundred(100));
      assert.strictEqual(true, warmUp.nearHundred(110));
      assert.strictEqual(true, warmUp.nearHundred(90));
      assert.strictEqual(true, warmUp.nearHundred(104));
      assert.strictEqual(true, warmUp.nearHundred(99));
    });
    it('Should return true if argument is within 10 of 200', function () {
      assert.strictEqual(true, warmUp.nearHundred(200));
      assert.strictEqual(true, warmUp.nearHundred(210));
      assert.strictEqual(true, warmUp.nearHundred(190));
      assert.strictEqual(true, warmUp.nearHundred(204));
      assert.strictEqual(true, warmUp.nearHundred(199));
    });
    it('Should return false if argument is not within 10 of 100', function () {
      assert.strictEqual(false, warmUp.nearHundred(111));
      assert.strictEqual(false, warmUp.nearHundred(89));
      assert.strictEqual(false, warmUp.nearHundred(0));
      assert.strictEqual(false, warmUp.nearHundred(-100));
    });
    it('Should return false if argument is not within 10 of 200', function () {
      assert.strictEqual(false, warmUp.nearHundred(211));
      assert.strictEqual(false, warmUp.nearHundred(189));
      assert.strictEqual(false, warmUp.nearHundred(3000000));
      assert.strictEqual(false, warmUp.nearHundred(-200));
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
      assert.strictEqual(true, warmUp.posNeg(-1, 1, false));
      assert.strictEqual(true, warmUp.posNeg(1, -1, false));
    });
    it('Should return true if the first two arguments are negative, and the last argument is true', function () {
      assert.strictEqual(true, warmUp.posNeg(-1, -1, true));
      assert.strictEqual(true, warmUp.posNeg(-12, -1, true));
    });
    it('Should return false if either of the first two arguments are positive, and the last argument is true', function () {
      assert.strictEqual(false, warmUp.posNeg(-1, 1, true));
      assert.strictEqual(false, warmUp.posNeg(1, -1, true));
      assert.strictEqual(false, warmUp.posNeg(1, 1, true));
    });
    it('Should return false if the first two arguments are both negative or both positive, and the last argument is false', function () {
      assert.strictEqual(false, warmUp.posNeg(-1, -1, false));
      assert.strictEqual(false, warmUp.posNeg(1, 1, false));
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
      assert.strictEqual('not bad', warmUp.notString('bad'));
      assert.strictEqual('not bad', warmUp.notString('not bad'));
      assert.strictEqual('not 1', warmUp.notString('1'));
      assert.strictEqual('not 1', warmUp.notString('not 1'));
      assert.strictEqual('not', warmUp.notString(''));
      assert.strictEqual('not note', warmUp.notString('note'));
      assert.strictEqual('not no', warmUp.notString('no'));
      assert.strictEqual('not n', warmUp.notString('n'));
      assert.strictEqual('not is not', warmUp.notString('is not'));
      assert.strictEqual('not zzxasxsdcwefeffefr334f34fede', warmUp.notString('zzxasxsdcwefeffefr334f34fede'));
      assert.strictEqual('not zzxasxsdcwefeffefr334f34fede', warmUp.notString('not zzxasxsdcwefeffefr334f34fede'));
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
      assert.strictEqual('hell', warmUp.missingChar('hello', 4));
      assert.strictEqual('ello', warmUp.missingChar('hello', 0));
      assert.strictEqual('helo', warmUp.missingChar('hello', 2));
      assert.strictEqual('', warmUp.missingChar('A', 0));
      assert.strictEqual('A', warmUp.missingChar('Ai', 1));
      assert.strictEqual('i', warmUp.missingChar('Ai', 0));
      assert.strictEqual('555555555', warmUp.missingChar('5555555555', 5));
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
  describe('11) Front Back', function () {
    it('Should return a string with the first and last characters of the argument transposed', function () {
      assert.strictEqual('cba', warmUp.frontBack('abc'));
      assert.strictEqual('dello worlh', warmUp.frontBack('hello world'));
      assert.strictEqual('aH', warmUp.frontBack('Ha'));
      assert.strictEqual('I', warmUp.frontBack('I'));
      assert.strictEqual('666', warmUp.frontBack('666'));
      assert.strictEqual('   ', warmUp.frontBack('   '));
      assert.strictEqual('\t \n', warmUp.frontBack('\n \t'));
    });
    it('Should throw if passed the empty string', function () {
      assert.throws(function () {
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

  describe('12) Front 3', function () {
    it('Should return a string composed of the first 3 characters in the argument, repeated 3 times, if the length of the argument is 3 or greater', function () {
      assert.strictEqual('HooHooHoo', warmUp.front3('Hoot'));
      assert.strictEqual('HooHooHoo', warmUp.front3('Hoo'));
      assert.strictEqual('HooHooHoo', warmUp.front3('Hootie and the Blowfish'));
      assert.strictEqual('runrunrun', warmUp.front3('run away!'));
      assert.strictEqual('123123123', warmUp.front3('1234567890'));
      assert.strictEqual('         ', warmUp.front3('   '));
    });
    it('Should return a string composed of the argument, repeated 3 times, if the length of the argument is less than 3', function () {
      assert.strictEqual('HaHaHa', warmUp.front3('Ha'));
      assert.strictEqual('666', warmUp.front3('6'));
      assert.strictEqual('gogogo', warmUp.front3('go'));
      assert.strictEqual('I I I ', warmUp.front3('I '));
      assert.strictEqual(' I I I', warmUp.front3(' I'));
      assert.strictEqual('   ', warmUp.front3(' '));
      assert.strictEqual('', warmUp.front3(''));
    });
    it('Should throw if argument is not of type String', function () {
      for (value of notStrings) {
        assert.throws(function () {
          warmUp.front3(value);
        }, TypeError);
      }
    });
  });

  describe('13) Del Del', function () {
    it('Should return a string composed of the argument, minus any occurences of the substring del, and any extra whitespace surrounding the substring del', function () {
      assert.strictEqual('abcfg', warmUp.delDel('abcdelfg'));
      assert.strictEqual('Hello world.', warmUp.delDel('Hello del world.'));
      assert.strictEqual('', warmUp.delDel('del'));
      assert.strictEqual('', warmUp.delDel('deldeldel'));
      assert.strictEqual('', warmUp.delDel('del del del'));
      assert.strictEqual('', warmUp.delDel('deldel      del   del deldeldel del   del'));
      assert.strictEqual('empire', warmUp.delDel('del empire del'));
      assert.strictEqual('LIC', warmUp.delDel('del LIC   del'));
      assert.strictEqual('Del', warmUp.delDel('Del'));
      assert.strictEqual('DEL', warmUp.delDel('DEL'));
      assert.strictEqual('abc', warmUp.delDel('adelbdelcdel'));
      assert.strictEqual('ddeell', warmUp.delDel('ddedelell'));
      assert.strictEqual('', warmUp.delDel(''));
      assert.strictEqual(' ', warmUp.delDel(' '));
      assert.strictEqual('no substring', warmUp.delDel('no substring'));
      assert.strictEqual('nosubstring', warmUp.delDel('nosubstring'));
    });
    it('Should throw if argument is not of type String', function () {
      for (value of notStrings) {
        assert.throws(function () {
          warmUp.delDel(value);
        }, TypeError);
      }
    });
  });

  describe('14) Mix Start', function () {
    it('Should return true if the argument starts with the substring *ix, where the * stands for any character', function () {
      assert.strictEqual(true, warmUp.mixStart('mix'));
      assert.strictEqual(true, warmUp.mixStart('Mix'));
      assert.strictEqual(true, warmUp.mixStart('MIX'));
      assert.strictEqual(true, warmUp.mixStart('pix'));
      assert.strictEqual(true, warmUp.mixStart('9ix'));
      assert.strictEqual(true, warmUp.mixStart('Дix'));
      assert.strictEqual(true, warmUp.mixStart('麻ix'));
      assert.strictEqual(true, warmUp.mixStart('😃ix'));
      assert.strictEqual(true, warmUp.mixStart(' ix'));
      assert.strictEqual(true, warmUp.mixStart('\bix'));
      assert.strictEqual(true, warmUp.mixStart('mixture'));
      assert.strictEqual(true, warmUp.mixStart('mix it up'));
    });
    it('Should return false if the argument does not start with the substring *ix, where the * stands for any character', function () {
      assert.strictEqual(false, warmUp.mixStart('mox'));
      assert.strictEqual(false, warmUp.mixStart('Mox'));
      assert.strictEqual(false, warmUp.mixStart('bux'));
      assert.strictEqual(false, warmUp.mixStart('23664287'));
      assert.strictEqual(false, warmUp.mixStart('ДaД'));
      assert.strictEqual(false, warmUp.mixStart('麻3p'));
      assert.strictEqual(false, warmUp.mixStart('😃ol'));
      assert.strictEqual(false, warmUp.mixStart(' kl'));
      assert.strictEqual(false, warmUp.mixStart('   mix'));
      assert.strictEqual(false, warmUp.mixStart('Unix'));
      assert.strictEqual(false, warmUp.mixStart('ipixel'));
      assert.strictEqual(false, warmUp.mixStart('\bap'));
      assert.strictEqual(false, warmUp.mixStart('mie'));
      assert.strictEqual(false, warmUp.mixStart('xxx'));
      assert.strictEqual(false, warmUp.mixStart(''));
      assert.strictEqual(false, warmUp.mixStart('nothing'));
      assert.strictEqual(false, warmUp.mixStart('not a thing'));
    });
    it('Should throw if argument is not of type String', function () {
      for (value of notStrings) {
        assert.throws(function () {
          warmUp.mixStart(value);
        }, TypeError);
      }
    });
  });

  describe('15) Int Max', function () {
    it('Should return the largest integer in a non-empty array which contains at least one integer', function () {
      assert.strictEqual(100, warmUp.intMax([100]));
      assert.strictEqual(-100, warmUp.intMax([-100]));
      assert.strictEqual(0, warmUp.intMax([0]));
      assert.strictEqual(Number.MIN_SAFE_INTEGER, warmUp.intMax([Number.MIN_SAFE_INTEGER]));
      assert.strictEqual(10, warmUp.intMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
      assert.strictEqual(10, warmUp.intMax([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
      assert.strictEqual(Number.MAX_SAFE_INTEGER, warmUp.intMax([1, 4, 77, 9, 100, 82, -1, Number.MAX_SAFE_INTEGER, 20, 11]));
      assert.strictEqual(76, warmUp.intMax([11, 11, 11, 11, 11, 11, 11, 76, 11, 11, 11, 11, 11, 11, 11]));
      assert.strictEqual(11, warmUp.intMax([11, 11, 11, 11, 11, 11, 11, 11.2, 11, 11, 11, 11, 11, 11, 11]));
      assert.strictEqual(1, warmUp.intMax([1.0, 2.5, 11.54, -1, 0.0001, 75.2, 1000.0001, 8.5])); // 1.0 will be coerced to 1, like it or not
      assert.strictEqual(-1, warmUp.intMax([1.01, 2.5, 11.54, -1, 0.0001, 75.2, 1000.0001, 8.5]));
      assert.strictEqual(-1, warmUp.intMax([-10, -111, -898, -2, -1, -99, -19]));
      assert.strictEqual(Number.MAX_SAFE_INTEGER, warmUp.intMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 11, 11, 11, 11, 11.2, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11.2, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11.2, 11, 11, 11, 11, 11, 11, 11, 1.0, 2.5, 11.54, -1, 0, 0.000, 75.2, 1000.0001, 8.5, 1.0, 2.5, 11.54, -1, 0, 0.000, 75.2, 1000.0001, 8.5, 1.0, 2.5, 11.54, -1, 0, 0.000, 75.2, 1000.0001, 8.5, 1, 4, 77, 9, 100, 82, -1, Number.MAX_SAFE_INTEGER, 20, 11, 200, 444, 21, 19, 777777, 666, 13, 22, 5454, 4542, 542399, 770, 12999, 13223, 8, 9, 10, 11, 11, 11, 1.0, 2.5, 11.54, -1, 0, 0.000, 4232, 43234, 1111, 12545, 43234, 88898989, 424, 423432, 549889, 899898, 1010, 213, 32323, 3232, 23, 435345, 5448, 888, 88, 884784, 99493, 6666, 3435, 2222, 2323232323, 88989, 57473783, 21218, 785, 6565, 333, 32324234, 42, 12313, 45353453534534, 34888, 558, 884, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1000000000001, 1000000000002, 100000000001, 9, 1091231, 4324, 10.1, 10.2, 10.3]));
      assert.strictEqual(1, warmUp.intMax(['1', '2', '3', 1, 'four', 'niner']));
    });
    it('Should throw if passed an array containing no valid integers', function () {
      assert.throws(function () {
        warmUp.intMax([]);
      }, TypeError);
      assert.throws(function () {
        warmUp.intMax(['1', '2', '3'])
      }, TypeError);
      assert.throws(function () {
        warmUp.intMax(['one', 'two', 'three'])
      }, TypeError);
      assert.throws(function () {
        warmUp.intMax([[1], [2], [3]])
      }, TypeError);
      assert.throws(function () {
        warmUp.intMax([1.0001, 1.002, 1.003])
      }, TypeError);
      assert.throws(function () {
        warmUp.intMax([{ 1: 1, 2: 2, 3: 3 }, { 4: 4 }, { 5: 5, 6: 6, 7: 7, 8: 8 }])
      }, TypeError);
    });
    it('Should throw if passed an Object that is not an array', function () {
      for (value of notArrays) {
        assert.throws(function () {
          warmUp.intMax(value);
        }, TypeError);
      }
    });
  });

  describe('16) Close 10', function () {
    it('Should return 0 if both arguments are equidistant from 10', function () {
      assert.strictEqual(0, warmUp.close10(10, 10));
      assert.strictEqual(0, warmUp.close10(11, 9));
      assert.strictEqual(0, warmUp.close10(5, 15));
      assert.strictEqual(0, warmUp.close10(0, 0));
      assert.strictEqual(0, warmUp.close10(210, -190));
      assert.strictEqual(0, warmUp.close10(-1, -1));
    });
    it('Should return the argument that is closer to 10', function () {
      assert.strictEqual(10, warmUp.close10(10, 1000));
      assert.strictEqual(0, warmUp.close10(100, 0));
      assert.strictEqual(5, warmUp.close10(5, 16));
      assert.strictEqual(-1, warmUp.close10(-1, -20));
      assert.strictEqual(210, warmUp.close10(210, -210));
    });
    it('Should throw if first or second argument is NaN or not of type Number', function () {
      for (firstValue of notNumbers) {
        for (secondValue of notNumbers) {
          assert.throws(function () {
            warmUp.close10(firstValue, secondValue);
          }, TypeError);
        }
      }
    });
  });

  describe('17) String E', function () {
    it('Should return true if argument contains 1 to 3 letter Es', function () {
      assert.strictEqual(true, warmUp.stringE('Well'));
      assert.strictEqual(true, warmUp.stringE('reel'));
      assert.strictEqual(true, warmUp.stringE('effective'));
      assert.strictEqual(true, warmUp.stringE('Eel'));
      assert.strictEqual(true, warmUp.stringE('screEched'));
      assert.strictEqual(true, warmUp.stringE('e'));
      assert.strictEqual(true, warmUp.stringE('hello world'));
      assert.strictEqual(true, warmUp.stringE('E'));
      assert.strictEqual(true, warmUp.stringE('Greenery'));
      assert.strictEqual(true, warmUp.stringE('Eugene'));
      assert.strictEqual(true, warmUp.stringE('heelies'));
      assert.strictEqual(true, warmUp.stringE('eieio'));
    });
    it('Should return false if argument contains 0 letter Es, or more than 3', function () {
      assert.strictEqual(false, warmUp.stringE(''));
      assert.strictEqual(false, warmUp.stringE(' '));
      assert.strictEqual(false, warmUp.stringE('5'));
      assert.strictEqual(false, warmUp.stringE('ε'));
      assert.strictEqual(false, warmUp.stringE('Will'));
      assert.strictEqual(false, warmUp.stringE('rail'));
      assert.strictEqual(false, warmUp.stringE('Weewee'));
      assert.strictEqual(false, warmUp.stringE('Engineered'));
      assert.strictEqual(false, warmUp.stringE('electrically etched'));
      assert.strictEqual(false, warmUp.stringE('66eee77eee99'));
      assert.strictEqual(false, warmUp.stringE('EeEeE'));
      assert.strictEqual(false, warmUp.stringE('eeeeeeeeeeee'));
      assert.strictEqual(false, warmUp.stringE('heeheeheeheehee'));
    });
    it('Should throw if argument is not of type String', function () {
      for (value of notStrings) {
        assert.throws(function () {
          warmUp.stringE(value);
        }, TypeError);
      }
    });
  });

  describe('18) Last Digit', function () {
    it('Should return true if both arguments have the same last digit', function () {
      assert.strictEqual(true, warmUp.lastDigit(21, 21));
      assert.strictEqual(true, warmUp.lastDigit(1, 21));
      assert.strictEqual(true, warmUp.lastDigit(430000000002, 502));
      assert.strictEqual(true, warmUp.lastDigit(-27, 937));
      assert.strictEqual(true, warmUp.lastDigit(-13, -933));
      assert.strictEqual(true, warmUp.lastDigit(6, 6));
    })
    it('Should return false if the two arguments do not have the same last digit', function () {
      assert.strictEqual(false, warmUp.lastDigit(21, 20));
      assert.strictEqual(false, warmUp.lastDigit(1, 0));
      assert.strictEqual(false, warmUp.lastDigit(100213, 21312312));
      assert.strictEqual(false, warmUp.lastDigit(-33, -1));
      assert.strictEqual(false, warmUp.lastDigit(21, -1115));
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