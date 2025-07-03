import { IsPlayer } from "./isPlayer";

export class Player implements IsPlayer {
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}

  getProperty () {
    return this.age;
  }

  play() {
    console.log(
      `${this.name} is playing for ${this.country} and his age is ${this.age}`
    );
  }
}