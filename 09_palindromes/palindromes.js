const palindromes = function (a) {
  a = a.toLowerCase().replace(/[! ,?.]/g, "");
  console.log(a);
  let b = a.split("").reverse().join("");
  console.log(b);
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
