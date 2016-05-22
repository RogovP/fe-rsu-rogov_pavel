function room(name, devices) {
    Complex.call(this, name, devices);
}

room.prototype = Object.create(Complex.prototype);

