let x = 1;
let y = 2;
let z = 3;
console.log(x + x);
console.log(y - z);
console.log(z * x);

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
  
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);

setTimeout( function() { 
  console.log("start") 
}, 3000 );
    
console.log("end");

var exampleFunction = function(message){
  console.log( message );
};
    
exampleFunction( "Hello from exampleFunction" );

function parentFunction( callback ) {
  callback( "information from the parent function" );
}

parentFunction( exampleFunction );

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
