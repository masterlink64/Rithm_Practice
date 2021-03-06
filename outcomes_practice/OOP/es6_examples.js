class Animal {
  // constructor function with default parameters
  constructor(species = 'Unknown') {
    this.species = species;
    console.log(this.species + ' is born'); // just to see when this constructor is called
  }

  eat(food) {
    console.log(this.species + ' eats the ' + food + '.');
  }

  die() {
    console.log(this.species + ' dies.');
  }
  dance(style = 'wild') {
    console.log(this.species + ` dances ${style}`);
  }
}

var panda = new Animal('Panda');
panda.eat('bamboo');
panda.dance();
panda.dance('samba');

// the "extends" keyword replaces Object.create() and KoiFish.prototype.constructor nonsense
class KoiFish extends Animal {
  constructor(name, color, size) {
    // inherit from Animal by calling its constructor
    super('Koi Fish');
    this.name = name;
    this.color = color;
    this.size = size;
  }

  swim() {
    // it gets "this.species" from the Animal (parent) constructor
    console.log(this.name + ' the ' + this.species + ' swims.');
  }
}

var bob = new KoiFish('Bob', 'orange', 14);
bob.swim();
// "Bob the Koi Fish swims."

bob.eat('bread');
bob.dance();
// Koi Fish eats the bread.
//  (this method comes from the Animal prototype)
