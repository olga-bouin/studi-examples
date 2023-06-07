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
        this.speed = speed
    }
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`) //Surcharge de la méthode attack !
}


class Alien1 extends Enemy {
    species: string
    constructor (name: string, phrase: string, power: number, speed: number) {
        //this.species = "alien" //Erreur !
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    attack = () => console.log("Now I'm doing a different thing, HA!")
}

class Bug1 extends Enemy {
    species: string
    constructor (name: string, phrase: string, power: number, speed: number) {
        super(name, phrase, power, speed)
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
}

class Robot1 extends Enemy {
    species: string
    constructor (name: string, phrase: string, power: number, speed: number) {
        super(name, phrase, power, speed)
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
}


const alien11 = new Alien1("Ali", "I'm Ali the alien!", 10, 50)
const alien22 = new Alien1("Lien", "Run for your lives!", 15, 60)
const bug11 = new Bug1("Buggy", "Your debugger doesn't work with me!", 25, 100)
const bug22 = new Bug1("Erik", "I drink decaf!", 5, 120)
const robot11 = new Robot1("Tito", "I can cook, swim and dance!", 125, 30)
const robot22 = new Robot1("Terminator", "Hasta la vista, baby!", 155, 40)

alien11.move() // output: "I'm moving at the speed of 50!"
alien22.attack() // output: "Now I'm doing a different thing, HA!"
alien22.fly() // output: "Zzzzzziiiiiinnnnnggggg!!"
bug11.hide() // output: "You can't catch me now!"
bug22.sayPhrase() // output: "I drink decaf!"
robot11.attack() // output: "I'm attacking with a power of 125!"
robot22.transform() // output: "Optimus prime!"


