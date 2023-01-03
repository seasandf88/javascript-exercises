const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  let suma = 0;
  for (let i of a) {
    suma += i;
  }
  return suma;
};

const multiply = function (a) {
  let mul = 1;
  for (let i of a) {
    mul *= i;
  }
  return mul;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  fact = 1;
  for (let i = a; i > 0; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
