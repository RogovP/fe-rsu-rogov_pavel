function conditioner(name, power) {
    var turn;
    this.turn = false;
    var vaporizer = new Vaporizer('Vaporizer');
    var ventilator = new Ventilator('Ventilator');
    all.call(this, name, power, turn, [
    vaporizer,
    ventilator
    ]);
}
conditioner.prototype.getPower = function () {
    return this.Power;
};
conditioner.prototype = Object.create(Complex.prototype);