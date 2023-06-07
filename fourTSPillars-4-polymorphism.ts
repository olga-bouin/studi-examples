//////////////////////////4 Polymorphism

class Character4 {
    speed: number
    constructor (speed: number) {
        this.speed = speed
    }
    move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
}

class Enemy4 extends Character4 {
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


class Alien4 extends Enemy4 {
    species: string
    constructor (name: string, phrase: string, power: number, speed: number) {
        //this.species = "alien" //Erreur !
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    attack = () => console.log("Now I'm doing a different thing, HA!")
}

class Bug4 extends Enemy4 {
    species: string
    constructor (name: string, phrase: string, power: number, speed: number) {
        super(name, phrase, power, speed)
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
}

const alien4 = new Alien4("Lien", "Run for your lives!", 15, 60)
const bug4 = new Bug4("Buggy", "Your debugger doesn't work with me!", 25, 100)

alien4.sayPhrase() //  "Run for your lives!"
bug4.sayPhrase() // "Your debugger doesn't work with me!"
