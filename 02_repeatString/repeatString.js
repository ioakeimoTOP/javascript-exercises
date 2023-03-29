const repeatString = function (str, times) {
  if (times < 0) {
    return 'ERROR';
  }
  const stringBuilder = [];
  for (let i = 0; i < times; i++) {
    stringBuilder.push(str);
  }
  return stringBuilder.join('');
};

// Do not edit below this line
module.exports = repeatString;
