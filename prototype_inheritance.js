let cat = {
  meow: () => "Meow...."
}

let animal = {
  run: () => "Run, run run..."
}

cat.__proto__ = animal


console.log(cat.meow())
console.log(cat.run())