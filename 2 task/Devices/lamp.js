function lamp(name, power) {
    var turn;
    this.turn = true;
    var bulb = new Bulb('Bulb');
    var stand = new Stand('Stand');
    all.call(this, name, power, turn, [
    bulb,
    stand 
    ]);
}
lamp.prototype.getPower = function () {
    return this.Power;
};
lamp.prototype = Object.create(Complex.prototype);