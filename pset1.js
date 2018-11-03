/*  1
    Define a @class called Rectangle
    With @properties: length, height
    With @methods: 
        calculateArea() // Returns the area of the rectangle
        calculatePerimeter() // Returns the perimeter of the rectangle
        isSquare() // Returns true or false if this rectangle is a square or not
*/

class Rectangle {
        constructor(length, height){
               this.length = length;
               this.height = height;
        }
        calculateArea() {
                // A=wl
                return this.length * this.height;
        }
        calculatePerimeter() {
                //P =2(l+w)
                return (this.length + this.height) * 2
        }

        isSquare() {
         return this.length === this.height
        }
        
}

const rectangle = new Rectangle (10, 5);
console.log(rectangle.calculateArea());
console.log(rectangle.calculatePerimeter());
console.log(rectangle.isSquare());

const square = new Rectangle (5, 5);
console.log(square.calculateArea());
console.log(square.calculatePerimeter());
console.log(square.isSquare());

/*  2
    Define a @class called Circle
    With @properties: radius
    With @methods: 
        calculateArea() // Returns the area of the circle
        calculateDiameter() // returns the diameter of the circle
        calculateCircumfrence() // Returns the circumfrence of the circle
*/

class Circle {
        constructor(radius){
        this.radius = radius;
        }
        calculateArea(){
                // A=πr2

                return Math.PI * (this.radius ** 2)
        }
        calculateDiameter(){
                // d=2r
                return this.radius * 2
        }
        calculateCircumfrence(){
                // C=2πr
                return this.radius * Math.PI * 2
        }
}

const circle = new Circle (5);
console.log(circle.calculateArea());
console.log(circle.calculateDiameter());
console.log(circle.calculateCircumfrence());

/*  3
    Define a @class called Pet
    With @properties: name, animal, greet
    With @methods: 
        greet() // Returns the pet's special greet. Eg. "Rexy the dog said Woof!"
*/

class Pet {
        constructor(name, animal, greeting){
                this.name = name;
                this.animal = animal;
                this.greet = greeting;
        }

        greet(){
                return `${this.name} the ${this.animal} said ${this.greeting}!`;
        }
}


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
        constructor(name, age, pets = []){
                this.name = name;
                this.age = age;
                this.pets = pets;
        }
        profile(){
                return `${this.name} is ${this.age} years old.`;     
        }
        addPet(petName, animal, greeting){
            this.pets.push(new Pet(petName, animal, greeting));    
        }
        meetPets(){
             for(let i = 0; i < this.pets.length; i ++){
                     console.log(`${this.name}'s pet ${this.pets[i].greet()}`)
             }   
        }
}

const rob = new Person('Robert', 29, []);
console.log(rob.profile());
rob.addPet('Bella', 'poodle', 'Woof' );
console.log(rob.meetPets());