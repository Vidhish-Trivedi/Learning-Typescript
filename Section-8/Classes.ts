// Class Definition.
class Vehicle {
    drive(): void {
        console.log("driving...");
    }
    honk(): void {
        console.log("honking...");
    }
};

// Inheritance.
class Car extends Vehicle {
    // Overriding an inherited method.
    drive(): void {
        console.log("vroom...");
    }
};

// Instance of a class.
const vehicle_1 = new Vehicle();
vehicle_1.drive();
vehicle_1.honk();

const car_1 = new Car();
car_1.drive();
car_1.honk();
