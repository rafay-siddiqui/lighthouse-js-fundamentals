function howManyHundreds(num){
  let remainder = num % 100
  return (num - remainder) / 100;
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));