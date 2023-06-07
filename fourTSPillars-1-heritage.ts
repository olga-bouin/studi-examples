//////////////////////////1 Heritage


class Character {
    speed: number
    constructor (speed: number) {
        this.speed = speed
    }
    move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
}

class Enemy extends Character {
    name: string
    phrase: string
    power: number
    speed: number
    constructor(name: string, phrase: string, power: number, speed: number) {
        super(speed)
        this.name = name
        this.phrase = phrase
        this.power = power
    }
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`) //Surcharge de la méthode attack !
}


class Alien extends Enemy {
    species: string
    constructor (name: string, phrase: string, power: number, speed: number) {
        //this.species = "alien" //Erreur !
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    attack = () => console.log("Now I'm doing a different thing, HA!")
}

class Bug extends Enemy {
    species: string
    constructor (name: string, phrase: string, power: number, speed: number) {
        super(name, phrase, power, speed)
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
}

class Robot extends Enemy {
    species: string
    constructor (name: string, phrase: string, power: number, speed: number) {
        super(name, phrase, power, speed)
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
}


const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
const alien2 = new Alien("Lien", "Run for your lives!", 15, 60)
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100)
const bug2 = new Bug("Erik", "I drink decaf!", 5, 120)
const robot1 = new Robot("Tito", "I can cook, swim and dance!", 125, 30)
const robot2 = new Robot("Terminator", "Hasta la vista, baby!", 155, 40)

alien1.move() // output: "I'm moving at the speed of 50!"
alien2.attack() // output: "Now I'm doing a different thing, HA!"
alien2.fly() // output: "Zzzzzziiiiiinnnnnggggg!!"
bug1.hide() // output: "You can't catch me now!"
bug2.sayPhrase() // output: "I drink decaf!"
robot1.attack() // output: "I'm attacking with a power of 125!"
robot2.transform() // output: "Optimus prime!"


// class Alien extends Enemy {
//     constructor (name, phrase, power, speed) {
//         super(name, phrase, power, speed)
//         this.species = "alien"
//     }
//     fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
// }
//
// // Здесь возникнет ошибка:
// class Alien extends Enemy {
//     constructor (name, phrase, power, speed) {
//         this.species = "alien" // ReferenceError: в производном классе до обращения к ‘this’ или возвращения из производного конструктора необходимо сначала вызвать конструктор super
//         super(name, phrase, power, speed)
//     }
//     fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
// }

//////////////////////////2 Encapsulation


//////////////////////////3 Abstraction

//////////////////////////4 Polymorphism
