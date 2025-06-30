var Player = /** @class */ (function () {
    function Player(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Player.prototype.play = function () {
        console.log("".concat(this.name, " is playing for ").concat(this.country, " and his age is ").concat(this.age));
    };
    return Player;
}());
var mashrafi = new Player("Mashrafi", 40, "Bangladesh");
var sakib = new Player("Sakib", 33, "BD");
var players = [];
players.push(mashrafi);
players.push(sakib);
console.log();
