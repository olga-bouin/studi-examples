
class Alien {
    name: string
    phrase: string
    species: string
    constructor (name: string, phrase: string) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    // Это будут методы объекта
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}

class Bug {
    name: string
    phrase: string
    species: string
    constructor (name: string, phrase: string) {
        this.name = name
        this.phrase = phrase
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
    sayPhrase = () => console.log(this.phrase)
}

class Robot {
    name: string
    phrase: string
    species: string
    constructor (name: string, phrase: string) {
        this.name = name
        this.phrase = phrase
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
    sayPhrase = () => console.log(this.phrase)
}


const alien1 = new Alien("Ali", "I'm Ali the alien!")
const alien2 = new Alien("Lien", "Run for your lives!")
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!")
const bug2 = new Bug("Erik", "I drink decaf!")
const robot1 = new Robot("Tito", "I can cook, swim and dance!")
const robot2 = new Robot("Terminator", "Hasta la vista, baby!")


console.log(alien1.name) // output: "Ali"
console.log(bug2.species) // output: "bug"
robot1.sayPhrase() // output: "I can cook, swim and dance!"
robot2.transform() // output: "Optimus prime!"
