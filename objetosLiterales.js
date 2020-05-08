function Person(nombre, edad, altura, peso, colorPelo, colorOjos){
    this.nombre = nombre,
    this.edad = edad,
    this.altura =altura,
    this.peso = peso,
    this.colorPelo = colorPelo,
    this.colorOjos = colorOjos,
  }
    
   let maria = new Person("Terah", 32, 1.70, 60, "cafe", "cafe); 
   let pepito = new Person("Mauricio", 38, 1.80, 78, "negro", "azul");                      



   const car = new Car()

function Bus() { 
  Bus.prototype = new Car()
 }

function Bus() {
  this.beep = "BEEP!"
}
