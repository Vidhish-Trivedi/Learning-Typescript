// Class Definition.
class Vehicle {
    // Traditionally, we might want to initialise an attribute on declaration.
    // color: string = "red";    // Set a default value.
    protected color: string;

    // Constructor for this class.
    constructor(color: string) {
        this.color = color;
    }

    // ALTERNATE WAY: Here, we won't need to define the attribute seperately and then assign its value. Body of constructor can be empty.
    // >> constructor(private color: string){}
    // Modifiers work the same way with attributes also.

    public drive(): void {
        console.log("driving...");
    }
    
    // Accessible in this class and its children.
    protected honk(): void {
        console.log("honking...");
    }

    public getColor(): string {
        return(this.color);
    }

    // Accessible only within this class.
    private breakVehicle(): void {
        console.log("Break...");
    }
};

// Inheritance.
class Car extends Vehicle {
    // When no constructor is defined, the DEFAULT constructor is called or the PARENT class constructor is called.

    // Overriding an inherited method.
    public drive(): void {
        console.log("vroom...");
    }

    public startCar(): void {
        // Access protected method of parent class.
        this.honk();
    }
};

class Bus extends Vehicle {
    public wheels: number;

    // Every constructor of a child class will call the corresponding constructor of the parent class using super().
    constructor(wheels: number, color: string) {
        super(color);
        this.wheels = wheels;
    }
}

// Instance of a class.
const vehicle_1 = new Vehicle("yellow");
vehicle_1.drive();
// vehicle_1.honk();    // TRY UNCOMMENTING THIS LINE.
console.log(vehicle_1.getColor());

const car_1 = new Car("red");
car_1.drive();
car_1.startCar();
console.log(car_1.getColor());

const bus_1 = new Bus(3, "blue");
bus_1.drive();
console.log(bus_1.getColor());
