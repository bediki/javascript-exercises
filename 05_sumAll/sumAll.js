const sumAll = function(start, end) {
    if (start < 0 || end < 0 || typeof start !== "number" || typeof end !== "number") {
      return "ERROR";
    }
  
    if (start > end) {
      [start, end] = [end, start];
    }
  
    return (end - start + 1) * (start + end) / 2;
  };
  
// Do not edit below this line
module.exports = sumAll;
