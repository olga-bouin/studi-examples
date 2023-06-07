//////////////////////////3 Abstraction

abstract class Character3 {
    speed: number
    protected constructor (speed: number) { //protected
        this.speed = speed
    }
    abstract move (): void //abstract
}

class Enemy3 extends Character3 {
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
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)

    move(): void { // Erreur si on ne met pas cette méthode !
        console.log(`I'm moving at the speed of ${this.speed}!`)
    } //Surcharge
}

const enemy3 = new Enemy3("Lien", "Run for your lives!", 15, 60)
enemy3.move()
