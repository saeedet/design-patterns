class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class carFactory {
  createCar(model) {
    switch (model) {
      case "toyota":
        return new Car(4, "V4", "white");
      case "nissan":
        return new Car(4, "V8", "red");
    }
  }
}

const factory = new carFactory();
const toyota = factory.createCar("toyota");
const nissan = factory.createCar("nissan");

console.log(toyota);
console.log(nissan);
