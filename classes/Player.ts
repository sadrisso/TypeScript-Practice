export class Player {
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}

  play() {
    console.log(
      `${this.name} is playing for ${this.country} and his age is ${this.age}`
    );
  }
}