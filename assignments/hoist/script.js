console.log(hello); // logs undefined
var hello = "world"; // hello = 'world'

var needle = "haystack"; // needle = "haystack"
test(); // invokes test func
function test() {
  var needle = "magnet"; // changes variable to 'magnet' in its own scope
  console.log(needle); // logs magnet
}

var brendan = "super cool"; //  brendan = "super cool"
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan); // logs "super cool" as function is never invoked

var food = "chicken"; // food = "chicken"
console.log(food); // logs chicken
eat(); // invoked function
function eat() {
  food = "half-chicken"; // food = "half-chicken"
  console.log(food); // logs half-chicken
  var food = "gone"; // food = "gone" but as it leaves the function the food returns to "chicken" 
}

// mean(); // invoked function
// console.log(food); // food is undefined
// var mean = function() { // negates function being class as a variable
//   food = "chicken"; // food = "chicken"
//   console.log(food); // logs chicken
//   var food = "fish"; // food = "fish"
//   console.log(food); // logs fish
// }
// console.log(food); // food is undefined


console.log(genre); // genre is undefined
var genre = "disco"; // genre = "disco"
rewind(); // invokes function
function rewind() {
  genre = "rock"; // genre = "rock"
  console.log(genre); // logs rock
  var genre = "r&b"; // genre = "r&b"
  console.log(genre); // logs r&b
}
console.log(genre); // logs disco

dojo = "san jose"; // dojo = "san jose"
console.log(dojo); // logs san jose
learn(); // invokes function
function learn() { 
  dojo = "seattle"; // dojo = "seattle"
  console.log(dojo); // logs seattle
  var dojo = "burbank"; // dojo = "burbank"
  console.log(dojo); // logs burbank
}
console.log(dojo); // logs san jose


console.log(makeDojo("Chicago", 65)); // logs name: 'Chicago', students: 65, hiring: true
console.log(makeDojo("Berkeley", 0)); // logs closed for now
function makeDojo(name, students){
  var dojo = {};
  dojo.name = name;
  dojo.students = students;
  if(dojo.students > 50){
    dojo.hiring = true;
  }
  else if(dojo.students <= 0){
    dojo = "closed for now";
  }
  return dojo;
}
