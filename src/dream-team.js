const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) return false;
  members.sort();
  let arr = [];
  let i = 0;
  while (i < members.length) {
    if (typeof (members[i]) == 'string') {
      members[i] = members[i].replace(/\s/g, "").toUpperCase();
      arr.push(members[i][0]);
    }
    i++;
  }
  return arr.sort().join('');
};
