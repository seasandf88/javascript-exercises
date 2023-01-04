const repeatString = function (str, num) {
  let repStr = "";
  if (num > 0) {
    repStr = str;
    // Solution 1:
    repStr = str.repeat(num);
    // Solution 2:
    // for (let i = 1; i < num; i++) {
    //     repStr += str;
    // }
  } else if (num < 0) {
    repStr = "ERROR";
  }
  return repStr;
};
// Do not edit below this line
module.exports = repeatString;
