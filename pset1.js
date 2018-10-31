/*  1
    Define a @class called Rectangle
    With @properties: length, height
    With @methods: 
        calculateArea() // Returns the area of the rectangle
        calculatePerimeter() // Returns the perimeter of the rectangle
        isSquare() // Returns true or false if this rectangle is a square or not
*/
class Rectangle{
    constructor(length, height){
        this.height = height;
        this.length = length;
    }
    calculateArea(){
        return this.height * this.length;
    }
    calculatePerimeter(){
        return this.height + this.height + this.length + this.length;
    }
    isSquare(){
        if(this.length === this.height)
            return true;
        return false;        
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
class Circle{
    constructor(redius){
        this.radius = radius;
    }
    calculateArea(){
        return (this.radius**2 )* Math.PI;
    }
    calculateDiameter(){
        return this.radius * 2;
    }
    calculateCircumfrence(){
        return this.radius * 2 * Math.PI
    }
}


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
