// Hola Maker,

// Tu misión en este reto es crear una función constructora llamada Bus que herede los atributos y métodos de Car
//  (que ya está definida) y tenga un método adicional llamado beep que retorne la cadena "BEEP!".

// Deberíamos poder usar Bus de la siguiente forma:

// var bus = new Bus();
// bus.velocity; // => 0

// bus.accelerate();
// bus.velocity; // => 1

// bus.accelerate(2);
// bus.velocity; // => 3

// bus.break();
// bus.velocity; // => 2

// bus.break(2);
// bus.velocity; // => 0

// bus.beep(); // => "BEEP!"
// Instrucciones
// Ingresa tu solución en el archivo solution.js debajo del código que ya esta implementado ahi.

function Car() {
	this.velocity = 0;
}
Car.prototype.accelerate = function (amount) {
	this.velocity += amount || 1;
	return this;
};
Car.prototype.break = function (amount) {
	this.velocity -= amount || 1;
	return this;
};

const car = new Car();

Bus.prototype = new Car();
Bus.prototype.beep = function () {
	return "BEEP!";
};

function Bus() {
	Bus.prototype = new Car();
}
