"use strict";
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing for ${this.country} and his age is ${this.age}`);
    }
}
const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const sakib = new Player("Sakib", 33, "BD");
const players = [];
players.push(mashrafi);
players.push(sakib);
console.log(sakib);
console.log("This is players array: ", players);
