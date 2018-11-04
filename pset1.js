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
                this.length = length
                this.height = height
                
        }

        calculateArea () {
                return this.length * this.height
        }

        calculatePerimeter () {
                return (2*this.length)+(2*this.height)
        }
}

let rect = new Rectangle (2,4)

console.log(rect.calculateArea(), rect.calculatePerimeter())



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
                this.radius = radius
        }
        calculateArea(){
                return Math.PI * (this.radius**2)
        }
        calculateCircumference(){
                return 2*Math.PI*this.radius
        }
        calculateDiameter(){
                return 2*this.radius
        }
}


/*  3
    Define a @class called Pet
    With @properties: name, animal, greet
    With @methods: 
        greet() // Returns the pet's special greet. Eg. "Rexy the dog said Woof!"
*/

class Pet {
        constructor (name,animal,greet) {
this.name = name
this.animal = animal
this.greet = greet
        }

        sayGreet(){
return `${this.name} the ${this.animal} says ${this.greet}`
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
        constructor(name,age,pets=[]){

                this.name = name
                this.age = age
                this.pets = [pets]
        }

        profile(){
                `${$this.name} is ${this.age} years old`
        }
        addPet(name, animal, greet){
                this.pets.push(new Pet(name,animal,greet))
        }

        meetPets(){
                this.pets.forEach((e)=>{
                console.log(`${this.name}'s pet ${e.sayGreet()}`)
                })
                return 1
        }
}

let bebe = new Pet('bebe','dog','bark')
let alex = new Person('alex', 22, bebe )

console.log(alex)
console.log(alex.meetPets())
