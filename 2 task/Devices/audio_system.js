function audio_system(name, power) {
    var turn;
    this.turn = true;
    var acousticSystem = new AcousticSystem('Acoustic System');
    var column = new Column('Column');
    var controlBoard = new ControlBoard('Control Board');

    Complex.call(this, name, power, turn, [
    acousticSystem,
    column,
    controlBoard 
    ]);
}
audio_system.prototype.getPower = function () {
    return this.Power;
};
audio_system.prototype = Object.create(Complex.prototype);