function all(name) {
    this.name = name;
}
all.prototype.getName = function () {
    return this.name;
};
all.prototype.checkIfHas = function (what) {
    if (this.getName().toLowerCase().indexOf(what.toLowerCase()) >= 0) {
        return('"' + what + '" has been found in "' + this.getName() + '"');
    }
};