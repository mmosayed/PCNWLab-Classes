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
   return this.length*this.height;
   //this['length'] is the equivalent of this.length;
}
calculatePerimeter() {
    return ((2*this.length) + (2*this.height));
}
isSquare() {
    if (this.length === this.height) {
        return true;
    }
    return false;
}
}
let rectangle1  = new Rectangle(2,4);
console.log(rectangle1.calculateArea(2,4));

/*  2
    Define a @class called Circle
    With @properties: radius
    With @methods: 
        calculateArea() // Returns the area of the circle
        calculateDiameter() // returns the diameter of the circle
        calculateCircumfrence() // Returns the circumfrence of the circle*/


class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.Pi*(this.radius**2);
    }
    calculateDiameter() {
        return 2*this.radius;
    }
    calcuateCircumfrence() {
        return Math.PI*this.calculateDiameter;
        //2*Math.PI*this.radius;
    }
}

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
    greet(){
        console.log(`${this.name} the ${this.animal} said ${this.greeting}`);
    }
}

const roxy = new Pet('roxy', 'dog', 'woof');
console.log(roxy.greet());


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
    constructor(name, age, pet = []) {
        this.name = name;
        this.age = age;
        this.pets = pet;
    }


    profile () {
        return `${this.name} is ${this.age} years old`;
    }
    addPet (name, animal, greet) {
       this.pets.push(new Pet (name, animal, greet));
    }
    meetPets() {
        for(let i = 0; i<this.pets.length; i++) {
            const currentPet = this.pets[i];
            console.log(currentPet.greet());
        }
    }
}

const john = new Person('john', '30','dogs' );
john.addPet('roxy', 'dog', 'woof');
