/*  1
    Define a @class called Rectangle
    With @properties: length, height
    With @methods: 
        calculateArea() // Returns the area of the rectangle
        calculatePerimeter() // Returns the perimeter of the rectangle
        isSquare() // Returns true or false if this rectangle is a square or not
*/

class Rectangle {
        constructor(length, height) {
                this.length = length;
                this.height = height;
        }
        calculateArea() {
                return this.length * this.height;
        }
        calculatePerimeter() {
                return (2 * this.length) + (2 * this.height);
        }
        isSquare() {
                return this.length === this.height;
        }
}

/*  2
    Define a @class called Circle
    With @properties: radius
    With @methods: 
        calculateArea() // Returns the area of the circle
        calculateDiameter() // returns the diameter of the circle
        calculateCircumfrence() // Returns the circumfrence of the circle
*/

class Circle {
        constructor(r) {
                this.radius = r;
        }
        calculateArea() {
                return Math.PI * this.radius ** 2
        }
        calculateDiameter() {
                return this.radius * 2
        }
        calculateCircumfrence() {
                return Math.PI * this.calculateDiameter();
        }
}

const c = new Circle(8)
const c2 = new Circle(18)

console.log(c.calculateArea());
console.log(c.calculateDiameter());
console.log(c.calculateCircumfrence());

/*  3
    Define a @class called Pet
    With @properties: name, animal, greet
    With @methods: 
        greet() // Returns the pet's special greet. Eg. "Rexy the dog said Woof!"
*/

class Pet {
        constructor(name, animal, greet) {
                this.name = name;
                this.animal = animal;
                this.greeting = greet;
        }
        greet() {
                return `${this.name} the ${this.animal} said ${this.greeting}`;
        }
}

const Rexy = new Pet('Rexy', 'dog', 'Woof!');

console.log(Rexy)
console.log(Rexy.greet())

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
    
        addPet(name, animal, greeting) {
            const petToAdd = new Pet(name, animal, greeting)
            this.pets.push(petToAdd)
        }
    
        meetPets() {
            for (let i = 0; i < this.pets.length; i++) {
                const currentPet = this.pets[i];
                console.log(currentPet.name)
                console.log(this.name + "'s pet " + currentPet.greet())
            }
        }
    }
    
    const taq = new Person('Taq', 28)
    console.log(taq.pets)
    taq.addPet('locutus of borg', 'cat', 'meow')
    console.log(taq.pets)
    taq.addPet('annabelle lee', 'cat', 'meow')
    taq.meetPets();