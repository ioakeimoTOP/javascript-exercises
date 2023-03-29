const sumAll = function (num1, num2) {
  if (
    [num1, num2].some((num) => {
      return !Number.isInteger(num) || isNaN(num) || num < 0;
    })
  ) {
    return 'ERROR';
  }

  let sum = 0;
  for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
