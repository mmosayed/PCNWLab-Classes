/*  1
    Define a @class called Rectangle
    With @properties: length, height
    With @methods: 
        calculateArea() // Returns the area of the rectangle
        calculatePerimeter() // Returns the perimeter of the rectangle
        isSquare() // Returns true or false if this rectangle is a square or not
*/

class Rectangle {
        constructor(length, height) { // expects object properties, nothing returned
                this.length = length;
                this.height = height;
        }
        calculateArea() {       // new function not specific to class, expects returned value
               return this.length * this.height;
        }

        calculatePerimeter() {
                return (this.length * 2) + (this.height * 2);
        }

        isSquare() {
                return this.length === this.height;
        }

}

const johnnySquare = new Rectangle(20,20);
const emilySquare = new Rectangle(30,40);
console.log('-------------------------------------------')
console.log(`Johnny's Rectangle Object:`, johnnySquare);
console.log(`Perimeter of Johnny's Rectangle:`, johnnySquare.calculatePerimeter());
console.log(`Is Johnny's Rectangle actually a Square:`, johnnySquare.isSquare());
console.log('-------------------------------------------')
console.log(`Emily's Rectangle Object:`, emilySquare);
console.log(`Perimeter of Emily's Rectangle:`, emilySquare.calculatePerimeter());
console.log(`Is Emily's Rectangle actually a square:`, emilySquare.isSquare());
console.log('-------------------------------------------')


/*  2
    Define a @class called Circle
    With @properties: radius
    With @methods: 
        calculateArea() // Returns the area of the circle
        calculateDiameter() // returns the diameter of the circle
        calculateCircumfrence() // Returns the circumfrence of the circle
*/

class Circle {
        constructor(radius) {
                this.radius = radius;
        }
        calculateArea() {
                return Math.floor(Math.PI * this.radius ** 2);
        }
        calculateDiameter() {
                return this.radius * 2;
        }
        calculateCircumference() {
                // return Math.floor(2 * Math.PI * this.radius);
                return Math.floor(Math.PI * this.calculateDiameter());
        }
}

const johnnyCircle = new Circle(5);
console.log(johnnyCircle.calculateArea());
console.log(johnnyCircle.calculateDiameter());
console.log(johnnyCircle.calculateCircumference());


/*  3
    Define a @class called Pet
    With @properties: name, animal, greet
    With @methods: 
        greet() // Returns the pet's special greet. Eg. "Rexy the dog said Woof!"
*/

class Pet {
        constructor(name, animal, greeting) {
                this.name = name;
                this.animal = animal;
                this.greeting = greeting;
        }

        greet() {
                return `${this.name} the ${this.animal} said ${this.greeting}!`;
        }

}

const brooklyn = new Pet('Brooklyn', 'dog', 'wolf');
console.log(brooklyn);
console.log(brooklyn.greet());

const jelly = new Pet('Jelly', 'cat', 'meow');
console.log(jelly);
console.log(jelly.greet());


/*  4
    Define a @class called Person
    With @properties: name, age, pets
    With @methods: 
        profile() // Returns a greeting. Eg. "John is 30 years old."
        addPet(name, animal, greet) // Adds a new pet for the person
        meetPets() // Console.log() all of the person's pet's greets
                   // Eg. 
                   // John's pet Rexy the dog said Woof!
                   // John's pet Annabelle the cat said Meow!
                   // John's pet Elsie the cow said Moo!
*/

class Person {
        constructor(name, age, pets=[]) {
                this.name = name;
                this.age = age;
                this.pets = pets;
        }

        profile() {
                return `${this.name} is ${this.age} years old.`
        }
        addPet(name, animal, greeting) {
                const newPet = new Pet(name, animal, greeting);
                this.pets.push(newPet);
        }
        meetPets() {
                // console.log(this.pets);

                for (let i = 0; i < this.pets.length; i++){
                        console.log(`${this.name}'s pet ${this.pets[i].greet()}`);
                }
        }

}
console.log('--------------------------------')
const newJohnny = new Person('Johnny', '21', [brooklyn, jelly]);
console.log(newJohnny.pets);
console.log(newJohnny.addPet('BamBam', 'lion', 'rawr'));
console.log(newJohnny.pets);
console.log(newJohnny.meetPets());