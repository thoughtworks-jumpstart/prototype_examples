class Animal {
  run() {
    return "Run run run"
  }
}

class Cat extends Animal {
  constructor(name) {
    super();
    this.name = name
  }
  meow() {
    return `Meow...My name is ${this.name}`
  }
}

let tom = new Cat("tom");

console.log(tom.meow())
console.log(tom.run())