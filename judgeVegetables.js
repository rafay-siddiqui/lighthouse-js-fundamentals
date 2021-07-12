const judgeVegetable = function (vegetables, metric) {
  let bestVeg = 0;
  vegetables.forEach(function (veggie, idx) {
    if (veggie[metric] > vegetables[bestVeg][metric]) {
      bestVeg = idx;
    }
  });
  return vegetables[bestVeg].submitter;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));