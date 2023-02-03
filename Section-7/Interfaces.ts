const oldCivic = {
    name: "civic",
    year: 2000,
    broken: true
};

// const logVehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {
//     console.log(`Name: ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Is broken: ${vehicle.broken}`);
// };
// logVehicle(oldCivic);

interface Vehicle{
    name: string;
    year: number;
    broken: boolean;
};
// Note that the names of the properties should match the names of the properties of the object
// (we can not, say, use isBroken instead of broken at just one place).


const logVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Is broken: ${vehicle.broken}`);
};

logVehicle(oldCivic);
