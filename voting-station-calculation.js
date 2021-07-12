const chooseStations = function (stations) {
  let appropriate = [];
  for(let o = 0; o < stations.length;o++){
    if(stations[o][1] >= 20 && (stations[o][2] == "school" || stations[o][2] == "community centre")){
      appropriate.push(stations[o][0]);
    }
  }
  console.log(appropriate)
};

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);