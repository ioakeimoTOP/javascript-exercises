const _isLetter = function (char) {
  return char >= 'a' && char <= 'z';
};

const palindromes = function (str) {
  const cleanedString = str
    .toLowerCase()
    .split('')
    .filter((char) => _isLetter(char))
    .join('');
  const middle = cleanedString.length / 2;
  for (let i = 0; i <= middle; i++) {
    if (cleanedString[i] !== cleanedString.at(-i - 1)) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
