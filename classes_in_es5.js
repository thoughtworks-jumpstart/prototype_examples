let Cat = function(name) {
  this.name = name
}

Cat.prototype = {
  meow: function () { return `Meow....my name is ${this.name}`}
}

let Animal = function() {
}

Animal.prototype = {
  run: () => "Run, run run..."
}

Cat.prototype.__proto__ = Animal.prototype

let tom = new Cat("tom");

console.log(tom.meow())
console.log(tom.run())