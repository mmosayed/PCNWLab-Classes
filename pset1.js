/*  1
    Define a @class called Rectangle
    With @properties: length, height
    With @methods: 
        calculateArea() // Returns the area of the rectangle
        calculatePerimeter() // Returns the perimeter of the rectangle
        isSquare() // Returns true or false if this rectangle is a square or not
*/
class Rectangle {
        constructor (length, height) {
                this.length = length;
                this.height = height;
                this.calculateArea = () => length * height;
                this.calculatePerimeter = () => length*2 + height*2;
                this.isSquare = () => (length === height) ? true : false;
        }
}
//test
console.log('----------------- 1. Rectangle test ------------------------');
const rect1 = new Rectangle(2,2);
const rect2 = new Rectangle(3,4);

console.log(rect1);
console.log('area = ', rect1.calculateArea());
console.log('perimeter = ', rect1.calculatePerimeter());
console.log('square? = ', rect1.isSquare());
console.log(rect2);
console.log('area = ', rect2.calculateArea());
console.log('perimeter = ', rect2.calculatePerimeter());
console.log('square? = ', rect2.isSquare());
console.log('--------------------------------------------');


/*  2
    Define a @class called Circle
    With @properties: radius
    With @methods: 
        calculateArea() // Returns the area of the circle
        calculateDiameter() // returns the diameter of the circle
        calculateCircumfrence() // Returns the circumfrence of the circle
*/
class Circle{
        constructor (radius){
                this.radius = radius;
                this.calculateArea = ()=> Math.PI*radius**2;
                this.calculateDiameter = ()=> radius * 2;
                this.calculateCircumference = ()=> Math.PI * radius * 2;
        }
}
//test
console.log('----------------- 2. Circle test ------------------------');
const circle1 = new Circle(1);
const circle2 = new Circle(5);

console.log(circle1);
console.log('area = ', circle1.calculateArea());
console.log('diameter = ', circle1.calculateDiameter());
console.log('circumference = ', circle1.calculateCircumference());
console.log(circle2);
console.log('area = ', circle2.calculateArea());
console.log('diameter = ', circle2.calculateDiameter());
console.log('circumference = ', circle2.calculateCircumference());
console.log('--------------------------------------------');

/*  3
    Define a @class called Pet
    With @properties: name, animal, greet
    With @methods: 
        greet() // Returns the pet's special greet. Eg. "Rexy the dog said Woof!"
*/

class Pet{
        constructor(name,animal,greet){
                this.name = name;
                this.animal = animal;
                this.greet = ()=> `${name} the ${animal} said ${greet}!`; 
        }
}
//test
console.log('----------------- 3. Pet test ------------------------');
const pet1 = new Pet('Fluffy','sparrow','chirp chirp');
const pet2 = new Pet('Rexy','dog', 'Woof');

console.log(pet1);
console.log('greeting = ', pet1.greet());
console.log(pet2);
console.log('greeting = ', pet2.greet());
console.log('--------------------------------------------');
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
