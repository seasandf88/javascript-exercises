const reverseString = function (str) {
  let revStr;
  // Solution 1:
  revStr = str.split("").reverse().join("");
  // Solution 2:
  //     for (let i = str.length-1; i >=0; i--) {
  // //        console.log(str[i]);
  //         revStr += str[i];
  //     }
  return revStr;
};

// Do not edit below this line
module.exports = reverseString;
