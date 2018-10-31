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



/*  3
    Define a @class called Pet
    With @properties: name, animal, greet
    With @methods: 
        greet() // Returns the pet's special greet. Eg. "Rexy the dog said Woof!"
*/



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
