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
class Pet{
    constructor(name, animal, greet){
        this.name = name;
        this.animal = animal;
        this.greet = greet;
    }
    greeting(){
        return `${this.name} the ${this.animal} said ${this.greet}!`;
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
class Person{
    constructor(name, age, pets = []){
        this.name = name;
        this.age = age;
        this.pets = pets;
    }
    profile(){
        return `${name} is ${age} years old.`
    }
    addPet(pname, panimal, pgreet){
        let pet = new Pet(pname, panimal, pgreet);
        this.pets.push(pet);
    }
    meetPets(){
        for(let i = 0; i < this.pets.length; i++){
            console.log(`${this.name}'s pet`,this.pets[i].greeting());
        }
    }
}
let p1 = new Pet("PITA", "cat", "Meow")
console.log(p1.greeting());

let man = new Person("Bob", 30,)
man.addPet("Ollie","Cat","Meow");
man.addPet("Alex","Mouse","Squeek");
man.addPet("Bob","Dog","Woof");
man.meetPets();