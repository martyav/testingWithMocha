let interviewArchive = {};

interviewArchive.smallestPostiveInteger = function(array) {
  let smallest = 1;
    
  if (!array.includes(1)) return smallest; 
    
  const sorted = array.sort(function(a,b) { return a - b });
    
  for (value of sorted) {
    if (smallest === value) smallest++;
    else {
      if (value < smallest) continue;
      else break;
    }
  }
    
  return smallest;
}

module.exports = interviewArchive;