// Class Definition.
class Vehicle {
    public drive(): void {
        console.log("driving...");
    }
    
    // Accessible in this class and its children.
    protected honk(): void {
        console.log("honking...");
    }

    // Accessible only within this class.
    private breakVehicle(): void {
        console.log("Break...");
    }
};

// Inheritance.
class Car extends Vehicle {
    // Overriding an inherited method.
    public drive(): void {
        console.log("vroom...");
    }

    public startCar(): void {
        // Access protected method of parent class.
        this.honk();
    }

};

// Instance of a class.
const vehicle_1 = new Vehicle();
vehicle_1.drive();
// vehicle_1.honk();    // TRY UNCOMMENTING THIS LINE.

const car_1 = new Car();
car_1.drive();
car_1.startCar();
