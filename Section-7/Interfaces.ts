const oldCivic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary(): string {
        return(`Name: ${this.name}\nYear: ${this.year}\nIs broken: ${this.broken}`)
    }
};

const drink = {
    color: "brown",
    carbonated: true,
    sugar: 20,
    summary(): string {
        return(`This drink has ${this.sugar} grams of sugar`);
    }
};

interface Reportable{
    summary(): string;    // func(): return_type;
};
// Note that the names of the properties should match the names of the properties of the object
// (we can not, say, use summarise() instead of summary at just one place).


// If an object satisfies the Vehicle interface definition and in addition also has more properties,
// it will still work without aNy errors.
const logItem = (item: Reportable): void => {
    console.log(item.summary());
};

// Since both satisfy the constraint for being of Reportable interface/type...
logItem(oldCivic);
logItem(drink);
