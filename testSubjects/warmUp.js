let warmUp = {}

warmUp.fizzBuzz = function(number) {
  if (Number.isNaN(number) || typeof number !== 'number') throw new TypeError('Argument must be a number value');

  let returnString = '';

  if (number === 0 || number % 3 !== 0 && number % 5 !== 0) {
    returnString = returnString.concat(`${number}`)
  } else {
    if (number % 3 === 0) returnString = returnString.concat('Fizz');
    if (number % 5 === 0) returnString = returnString.concat('Buzz');
  }

  return returnString
}

warmUp.sleepIn = function(isWeekDay, isVacation) {
  if (typeof isWeekDay !== 'boolean' || typeof isVacation !== 'boolean') throw TypeError('Arguments must be Boolean');

  return !isWeekDay || isVacation;
}

warmUp.monkeyTrouble = function(aIsSmiling, bIsSmiling) {
  if (typeof aIsSmiling !== 'boolean' || typeof bIsSmiling !== 'boolean') throw TypeError('Arguments must be Boolean');

  return aIsSmiling === bIsSmiling
}

warmUp.sumDouble = function(firstNum, secondNum) {
  if (Number.isNaN(firstNum) || Number.isNaN(secondNum) || typeof firstNum !== 'number' || typeof secondNum !== 'number') throw new TypeError('Argument must be a number value');

  let returnValue = firstNum + secondNum;

  if (firstNum === secondNum) returnValue *= 2;

  return returnValue;
}

warmUp.diff21 = function(number) {
  if (Number.isNaN(number) || typeof number !== 'number') throw new TypeError('Argument must be a number value');

  let returnValue = Math.abs(number - 21);

  if (number > 21) returnValue *= 2;

  return returnValue;
}

warmUp.parrotTrouble = function(isTalking, hour) {
  if (typeof isTalking !== 'boolean') throw TypeError('Argument must be Boolean');
  if (Number.isNaN(hour) || typeof hour !== 'number') throw new TypeError('Argument must be a number value');
  if (hour < 0 || hour > 23) throw new RangeError('Hour must be between 0 and 23');

  return isTalking && (hour < 7 || hour > 20);
}

warmUp.makes10 = function(firstNum, secondNum) {
  if (Number.isNaN(firstNum) || Number.isNaN(secondNum) || typeof firstNum !== 'number' || typeof secondNum !== 'number') throw new TypeError('Argument must be a number value');

  let is10 = (num) => num === 10;

  let sum = firstNum + secondNum;

  return is10(firstNum) || is10(secondNum) || is10(sum);
}

module.exports = warmUp;