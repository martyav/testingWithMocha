let warmUp = {}

warmUp.sleepIn = function(isWeekDay, isVacation) {
  return !isWeekDay || isVacation;
}

module.exports = warmUp;