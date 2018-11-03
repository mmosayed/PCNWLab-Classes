/*  1
    Define a @class called Rectangle
    With @properties: length, height
    With @methods: 
        calculateArea() // Returns the area of the rectangle
        calculatePerimeter() // Returns the perimeter of the rectangle
        isSquare() // Returns true or false if this rectangle is a square or not
*/




<<<<<<< master
=======
}
 calculatePerimeter (){
return (2*this.length) + (2*this.height)


}

 isSquare (){
if(this.length === this.height){

    return true
}

else{
    return false
}

}


}

const squAreIt = new Rectangle(6,6)
const newSquareIt = new Rectangle(2,4)
console.log(squAreIt.calculatePerimeter())

>>>>>>> local
/*  2
    Define a @class called Circle
    With @properties: radius
    With @methods: 
        calculateArea() // Returns the area of the circle
        calculateDiameter() // returns the diameter of the circle
        calculateCircumfrence() // Returns the circumfrence of the circle

*/

class Circle{

constructor(radius){
this.radius = radius




}

    calculateArea(){
    return this.radius**2 * Math.PI 
    }
    
    calculateDiameter(){
    
    return this.radius * 2
    }
    
    calculateCircumference(){
    return this.radius * 2 * Math.PI
    
    
    }


}
const newCircle = new Circle(2)  
console.log(newCircle.calculateDiameter())

/*  3
    Define a @class called Pet
    With @properties: name, animal, greet
    With @methods: 
        greet() // Returns the pet's special greet. Eg. "Rexy the dog said Woof!"
/*
*/
class Pet{     
    constructor(name, animal, greet){
    this.name = name        
    this.animal = animal
    this.greet = greet
 }

  greets(){
        const reply = this.name + ' ' + this.animal + ' ' + this.greet;
        return reply
    }


}


const animalGreat = new Pet("birdy", "the fish", "says feed me")
console.log(animalGreat.greets())

// class Pet {
//     constructor(name, animal, greeting) {
//         this.name = name;
//         this.animal = animal;
//         this.greeting = greeting;
//     }
//     greet() {
//         // return this.name + " the " + this.animal + " said " + this.greeting;
//         return `${this.name} the ${this.animal} said ${this.greeting}`;
//     }
// }

// const angel = new Pet('Angel', 'pit bull', 'Mr. Worldwide');
// console.log(angel.greet())

/*
 4
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

// const petIt = new Pet("birdy", "the fish", "says feed me") 
// name, animal, greet


// class Person{

//     constructor(name, age, pets=[]){
//             this.name = name
//             this.age = age
//             this.pets = pets
           
//     }

//     profile(){
//     const greeting = this.name + 'is' + this.age + 'years old'
//     return greeting
//     }
    
//     // addPets(name , animal, greet){
//     //     const ppets = new Pet(name, animal, greet)
//     //     this.pets.push(ppets)


//     // }

//     addPet(name, animal, greeting) {
//         const petToAdd = new Pet(name, animal, greeting)
//         this.pets.push(petToAdd)
//     }
    
// //     meetPets(){
// // for(i = 0 ; i<this.pets.length ; i++){

// //     console.log('Johns pet' + this.pets[i].greet() )
// // }

// //     }

// meetPets() {
//     for (let i = 0; i < this.pets.length; i++) {
//         const currentPet = this.pets[i];
//         console.log(currentPet.name)
//         console.log(this.name + "'s pet " + currentPet.greet())
//     }
// }
// }


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
            console.log(currentPet.name + "s pet " + currentPet.greets())
        }
    }
}
// const daniel = new Person('ben', 13, 'cats')
// daniel.addPet('locutus of borg', 'cat', 'meow')
// console.log(daniel.addPet("birdy", "the fish", "says feed me"))
const daniel = new Person('Taq', 28)
console.log(daniel.pets)
daniel.addPet('birdy', 'cat', 'hhey')
console.log(daniel.pets)
daniel.addPet('annabelle lee', 'cat', 'meow')
console.log(daniel.meetPets());
