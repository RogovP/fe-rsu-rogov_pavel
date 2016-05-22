function tv(name, power) {
    var turn;
    this.turn = false;
    var controlBoard = new ControlBoard('ControlBoard');
    var channelSelector = new ChannelSelector('ChannelSelector');
    var liquidCrystals = new LiquidCrystals('LiquidCrystals');
    all.call(this, name, power, turn, [
    controlBoard,
    channelSelector,
    liquidCrystals
    ]);
}
tv.prototype.getPower = function () {
    return this.Power;
};
tv.prototype = Object.create(Complex.prototype);