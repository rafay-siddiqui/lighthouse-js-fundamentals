var my_string = "blue";
let total = 0
// Iterate using a Loop
for (var i = 0; i < my_string.length; i++) {
  total += my_string.charCodeAt(i);
}
console.log(total);