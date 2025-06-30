class Player {
    name: string
    age: number
    country: string

    constructor(n: string, a: number, c: string) {
        this.name = n
        this.age = a
        this.country = c
    }

    play () {
        console.log(`${this.name} is playing for ${this.country} and his age is ${this.age}`)
    }
}

const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const sakib = new Player("Sakib", 33, "BD");

const players: Player[] = [];

players.push(mashrafi)
players.push(sakib)

console.log(sakib)