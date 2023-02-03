const oldCivic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary(): string {
        return(`Name: ${this.name}\nYear: ${this.year}\nIs broken: ${this.broken}`)
    }
};

interface Vehicle{
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;    // func(): return_type;
};
// Note that the names of the properties should match the names of the properties of the object
// (we can not, say, use isBroken instead of broken at just one place).


// If an object satisfies the Vehicle interface definition and in addition also has more properties,
// it will still work without aNy errors.
const logVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());
};

logVehicle(oldCivic);
