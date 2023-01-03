const fibonacci = function (a) {
  const fibArray = [0, 1];
  if (a < 0) {
    return "OOPS";
  } else {
    for (let i = 1; i < a; i++) {
      fibArray.push(fibArray[i - 1] + fibArray[i]);
    }
    return fibArray[fibArray.length - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
