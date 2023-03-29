const removeFromArray = function (arr, ...rest) {
  if (!arr || !rest) return;
  const deleteSet = new Set(rest);
  return arr.filter((item) => !deleteSet.has(item));
};

// Do not edit below this line
module.exports = removeFromArray;
