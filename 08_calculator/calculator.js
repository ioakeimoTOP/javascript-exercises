const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbersArray) {
  return numbersArray.reduce((previous, current) => previous + current, 0);
};

const multiply = function (numbersArray) {
  return numbersArray.reduce((previous, current) => previous * current, 1);
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  let fact = 1;
  for (let i = num; i > 1; i--) {
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
