function Complex(name, devices) {
    this.devises = devises;
    all.call(this, name, this.getPower());
}

Complex.prototype = Object.create(all.prototype);

Complex.prototype.getTurnPower = function () {
    var allPower = 0;
    for (var i = 0; i < this.devises.length; i++) {
        if (this.devises[i].getPower() === true) {
        allPower += this.devises[i].getPower();
        }
    }

    return allPower;
};
Complex.prototype.search = function (what) {
    this.checkIfHas(what);
    this.all.forEach(function (all) {
        all.checkIfHas(what);
    })
};