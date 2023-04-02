const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  const oldestPerson = people.reduce((oldest, current) => {
    let newOldest =
      (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth >
      (current.yearOfDeath || currentYear) - current.yearOfBirth
        ? oldest
        : current;
    return newOldest;
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
