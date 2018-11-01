/*  1
    Define a @class called Rectangle
    With @properties: length, height
    With @methods: 
        calculateArea() // Returns the area of the rectangle
        calculatePerimeter() // Returns the perimeter of the rectangle
        isSquare() // Returns true or false if this rectangle is a square or not
*/
class Rectangle {
        constructor(length,width){
                this.length = length
                this.width = width
        };

        calculateArea(){
                return this.length * this.width
        };

        calculatePerimeter(){
                return 2*this.length + 2* this.width
        };

        isSquare(){
                return this.length === this.width
        }
}

let shape = new Rectangle(2,3)
console.log(shape.calculateArea())

/*  2
    Define a @class called Circle
    With @properties: radius
    With @methods: 
        calculateArea() // Returns the area of the circle
        calculateDiameter() // returns the diameter of the circle
        calculateCircumfrence() // Returns the circumfrence of the circle
*/
class Circle{
        constructor(radius) {this.radius = radius}
        calculateArea(){return Math.PI * (this.radius **2)}
        calculateDiameter(){2 * Math.PI}
        calculateCircumference(){2 * Math.PI * this.radius}
}


/*  3
    Define a @class called Pet
    With @properties: name, animal, greet
    With @methods: 
        greet() // Returns the pet's special greet. Eg. "Rexy the dog said Woof!"
*/
class Pet{
        constructor(name,animal,greet){
                this.name = name
                this.animal = animal
                this.greet = greet
        }
        greeting(){
                return this.greet
        }
}
let cat = new Pet("katty","cat","Hello Cat World")
console.log(cat.greeting());


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

class Person{
        constructor(name,age,pets=[]){
                this.name = name
                this.age = age
                this.pets = pets
        }
        profile(){
                return `${this.name} is ${this.age} years old`
        }
        addPets(name,animal,greet){
                this.pets.push(new Pet(name,animal,greet))

        }
        meetPets(){
                this.pets.forEach((element) => {
                        console.log(element.greeting());
                        
                })
        }
}

let Tarek = new Person("Tarekul",25)
Tarek.addPets("katty","cat","Hello World of Cats")
Tarek.addPets("katty2","cat","meow")
console.log(Tarek.meetPets())