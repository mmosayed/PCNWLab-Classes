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
                return (this.length + this.height) * 2;
        }

        isSquare() {
                if (this.length === this.height) {
                        return true;
                }
                return false;
        }
}

const rect1 = new Rectangle(4,5);
console.log(rect1);
console.log(rect1.calculateArea());
console.log(rect1.calculatePerimeter());
console.log(rect1.isSquare());


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
                return this.radius * (Math.PI ** 2);
        }

        calculateDiameter() {
                return this.radius * 2
        }

        calculateCircumference() {
                return Math.PI * this.calculateDiameter;
        }
}

const circle1 = new Circle(5);
console.log(circle1);
console.log(circle1.calculateArea());
console.log(circle1.calculateDiameter());
console.log(circle1.calculateCircumference());

/*  3
    Define a @class called Pet
    With @properties: name, animal, greet
    With @methods: 
        greet() // Returns the pet's special greet. Eg. "Rexy the dog said Woof!"
*/

class Pet {
        constructor(name, animal, speak) {
                this.name = name;
                this.animal = animal;
                this.speak = speak;
        }

        greet() {
                return `${this.name} the ${this.animal} said ${this.speak}!`
        }
}

const pet1 = new Pet('Maya','dog','ruff');
console.log(pet1);
console.log(pet1.greet());

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

const pets1 = [
        {
                name : 'maya',
                animal : 'dog',
                greet: 'ruff',
        },

        {
                name: 'ya moms',
                animal: 'a beast',
                greet: 'gimme something to eat'
        }
]

class Person {
        constructor(name, age, pets=[]) {
                this.name = name;
                this.age = age;
                this.pets = pets;
        }

        profile() {
                return `${this.name} is ${this.age} years old.`
        }

        addPet() {
                let newPetArray = [];
                this.pets.forEach(pet => {
                        newPetArray.push(new Pet(pet.name, pet.animal, pet.greet));
                });

                return newPetArray;

        }

        meetPets() {

        }
}

const John = new Person('John', 20, pets1)
console.log(John)
console.log("=====WOW=====")
console.log(John.addPet());