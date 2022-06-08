function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
eat: function() {
  console.log("meow");
},
describe: function() {
  console.log ("My name is " + this.name);
},
numLegs: 2
};