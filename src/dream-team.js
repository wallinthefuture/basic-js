module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) && members.length > 0) {
    let nameOfDreamTeam = '';
    members.forEach((element) => {
      if (typeof element == 'string') {
        element = element.trim();
        nameOfDreamTeam += element.slice(0, 1).toUpperCase();
      }
    });
    return nameOfDreamTeam.split('').sort().join('');
  }
  return false;
};
