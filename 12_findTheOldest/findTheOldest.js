const findTheOldest = function (older) {
  let maxAge = 0;
  let oldest = {};
  for (let i = 0; i < older.length; i++) {
    if (older[i].yearOfDeath === undefined) {
      older[i].yearOfDeath = new Date().getFullYear();
    }
    let age = older[i].yearOfDeath - older[i].yearOfBirth;
    if (age > maxAge) {
      maxAge = age;
      oldest = older[i];
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
