function telephone(name, power) {
    var turn;
    this.turn = false;
    var microphone = new Microphone('Microphone');
    var receiver = new Receiver('Receiver');
    all.call(this, name, power, turn, [
    microphone,
    receiver
    ]);
}
telephone.prototype.getPower = function () {
    return this.Power;
};
telephone.prototype = Object.create(Complex.prototype);