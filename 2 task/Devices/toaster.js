function toaster(name, power) {
    var turn;
    this.turn = false;
    var timer = new Timer('Timer');
    var heatingElement = new HeatingElement('HeatingElement');
    all.call(this, name, power, turn, [
    timer,
    heatingElement
    ]);
}
toaster.prototype.getPower = function () {
    return this.Power;
};
toaster.prototype = Object.create(Complex.prototype);