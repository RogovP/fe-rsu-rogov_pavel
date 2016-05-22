function comp(name, power) {
    var turn;
    this.turn = true;
    var processor = new Processor('Processor');
    var motherBoard = new Motherboard('MotherBoard');
    var mouse = new Mouse('Mouse');
    Complex.call(this, name, power, turn, [
    processor,
    motherBoard,
    mouse
    ]);
}
comp.prototype.getPower = function () {
    return this.Power;
};
comp.prototype = Object.create(Complex.prototype);