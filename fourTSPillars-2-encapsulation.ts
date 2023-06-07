//////////////////////////2 Encapsulation

class Enemy2 {
    name: string
    phrase: string
    power: number
    speed: number
    constructor (name: string, phrase: string, power: number, speed: number) {
        this.name = name
        this.phrase = phrase
        this.power = power
        this.speed = speed
    }
    move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
    sayPhrase = () => console.log(this.phrase)
}

class Alien2 extends Enemy2 {
    species: string
    #birthYear: number
    constructor (name: string, phrase: string, power: number, speed: number, birthYear: number) {
        super(name, phrase, power, speed)
        this.species = "alien"
        this.#birthYear = birthYear
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    howOld = () => console.log(`I was born in ${this.#birthYear}`)
}

const alien = new Alien2("Ali", "I'm Ali the alien!", 10, 50, 2000)

console.log(alien.name) // вывод: Ali
alien.sayPhrase() // вывод: "I'm Ali the alien!"
alien.howOld() // вывод: "I was born in 2000"
//console.log(alien1.#birthYear) // Erreur !
console.log(alien)
// Alien2 {
//     move: [Function (anonymous)],
//         attack: [Function (anonymous)],
//         sayPhrase: [Function (anonymous)],
//         name: 'Ali',
//         phrase: "I'm Ali the alien!",
//         power: 10,
//         speed: 50,
//         fly: [Function (anonymous)],
//         howOld: [Function (anonymous)],
//         species: 'alien'
// } // birthYear n'est pas affiché !

