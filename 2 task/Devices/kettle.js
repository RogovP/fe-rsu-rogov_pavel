function kettle(name, power) {
    var turn;
    this.turn = true;
    var handle = new Handle('Handle');
    var whistle = new Wistle('Wistle');
    var lid = new Lid('Lid');
    all.call(this, name, power, turn, [
    handle,
    whistle,
    lid
    ]);
}
kettle.prototype.getPower = function () {
    return this.Power;
};
kettle.prototype = Object.create(Complex.prototype);