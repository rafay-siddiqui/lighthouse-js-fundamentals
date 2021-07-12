const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

i = 0
while(i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

for (let idx=0;idx<ingredients.length;idx++){
  console.log(ingredients[idx]);
}

index = ingredients.length-1
while (index>=0){
  console.log(ingredients[index]);
  index--;
}