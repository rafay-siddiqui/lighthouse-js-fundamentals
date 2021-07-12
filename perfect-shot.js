const finalPosition = function(moves){
  let x = 0;
  let y = 0;
  moves.forEach (function(direction){
    if (direction == "north"){
      y ++;
    } else if (direction == "south"){
      y --;
    } else if (direction == "east"){
      x ++;
    } else if (direction == "west"){
      x --;
    }
  }
);
let coordinates = [x,y];
    console.log(coordinates;
};

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);