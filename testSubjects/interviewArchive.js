let interviewArchive = {};

interviewArchive.smallestPostiveInteger = function(array) {
  let smallest = 1;

  while (array.includes(smallest)) smallest++;

  return smallest;
}

module.exports = interviewArchive;