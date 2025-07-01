import { Player } from "./classes/Player.js";

const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const sakib = new Player("Sakib", 33, "BD");

const players: Player[] = [];

players.push(mashrafi);
players.push(sakib);

console.log(sakib);
console.log("This is players array: ", players)


interface rectangleOptions {
    width: number;
    height: number;
}

function rectangleOptions (options: rectangleOptions): number {
    let width = options.width
    let height = options.height

    return width * height
}

rectangleOptions({
    width: 40,
    height: 30
})