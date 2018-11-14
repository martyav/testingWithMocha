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

warmUp.nearHundred = function(number) {
  if (Number.isNaN(number) || typeof number !== 'number') throw new TypeError('Argument must be a number value');

  let within10 = (num, closeTo) => Math.abs(num - closeTo) <= 10;

  return within10(number, 100) || within10(number, 200);
}

warmUp.posNeg = function(firstNum, secondNum, isNegative) {
  if (Number.isNaN(firstNum) || Number.isNaN(secondNum) || typeof firstNum !== 'number' || typeof secondNum !== 'number') throw new TypeError('Argument must be a number value');
  if (typeof isNegative !== 'boolean') throw TypeError('Argument must be Boolean');
  if (firstNum === 0 || secondNum === 0) throw RangeError('Argument must be positive or negative');

  let lessThanZero = (num) => num < 0;
  let returnValue;

  if (isNegative) returnValue = lessThanZero(firstNum) && lessThanZero(secondNum);
  else returnValue = (lessThanZero(firstNum) !== lessThanZero(secondNum));
  
  return returnValue
}

warmUp.notString = function(text) {
  if (typeof text !== 'string') throw TypeError('Argument must be String');

  let returnString = text;

  if (!text.startsWith('not ')) returnString = 'not '.concat(returnString).trim();
  
  return returnString;
}

warmUp.missingChar = function(text, index) {
  if (typeof text !== 'string') throw TypeError('Argument must be String');
  if (Number.isNaN(index) || typeof index !== 'number') throw new TypeError('Argument must be a number value');
  if (index < 0 || index >= text.length) throw new RangeError('Index must be greater than or equal to 0, and less than the length of the string');

  let returnString = text.slice(0, index);

  if (text.length >= 2) returnString = text.slice(0, index) + text.slice(index + 1, text.length);
  
  return returnString; 
}

warmUp.frontBack = function(text) {
  if (typeof text !== 'string') throw TypeError('Argument must be String');
  if (text.length === 0) throw RangeError('Argument must have a length greater than 0');

  const first = text[0];
  const last = text[text.length - 1];
  let returnString = first;

  if (text.length > 1) returnString = last.concat(text.slice(1, text.length - 1).concat(first));

  return returnString;
}

warmUp.front3 = function(text) {
  if (typeof text !== 'string') throw TypeError('Argument must be String');

  let firstCharacters = text;
  let returnString = '';

  if (text.length > 2) firstCharacters = text.slice(0, 3);

  returnString = firstCharacters.repeat(3);

  return returnString;
}

warmUp.delDel = function(text) {
  if (typeof text !== 'string') throw TypeError('Argument must be String');

  let delRegex = /(del)+/g;
  let trimMiddleRegex = /\s{2,}/gu;
  let returnString = text;
  let testResult = delRegex.test(text);

  if (testResult) returnString = text.replace(delRegex, '').replace(trimMiddleRegex, ' ').trim();

  return returnString;
}

warmUp.mixStart = function(text) {
  if (typeof text !== 'string') throw TypeError('Argument must be String');

  let regex = /^.ix/iu; // lowercase u stands for unicode mode
  let testResult = regex.test(text);

  return testResult;
}


warmUp.intMax = function(array) {
  if (!Array.isArray(array)) throw TypeError('Argument must be an array');

  let returnValue;
  let max = Number.MIN_SAFE_INTEGER;
  let uniques = new Set(array);

  for (value of uniques) {    
    if (Number.isNaN(value)) continue;
    if (!Number.isInteger(value)) continue;

    if (value >= max) {
      max = value;
      returnValue = max;
    }
  }

  if (returnValue === undefined) throw TypeError('Array must contain at least one valid integer');

  return returnValue;
}

module.exports = warmUp;