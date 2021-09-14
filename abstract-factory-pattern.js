class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
  createCar(model) {
    switch (model) {
      case "toyota":
        return new Car(4, "V4", "white");
      case "nissan":
        return new Car(4, "V8", "red");
    }
  }
}
class SUV {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class SuvFactory {
  createCar(model) {
    switch (model) {
      case "cx5":
        return new Car(4, "V4", "gray");
      case "sante fe":
        return new Car(4, "V8", "blue");
    }
  }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
  switch (type) {
    case "car":
      return carFactory.createCar(model);
    case "suv":
      return suvFactory.createCar(model);
  }
};

const cx5 = autoManufacturer("suv", "cx5");

console.log(cx5);
