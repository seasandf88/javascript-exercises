const getTheTitles = function (list) {
  const titles = [];
  for (let i = 0; i < list.length; i++) {
    titles.push(list[i].title);
  }
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
