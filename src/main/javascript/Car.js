Car = function() {
    this.wheels = 4;
};

Car.dany = "hello";
Car.prototype.tractionWheels = 2;

QuatreQuatre = inherit(Car);

QuatreQuatre.prototype.tractionWheels = 4;