function Receiver(name) {
    all.call(this, name);
}

Receiver.prototype = Object.create(all.prototype);