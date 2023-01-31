const profile = {
    name: "alex",
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },

    setAge(age: number): void {
        this.age = age;
    }
};

// Destructuring.
// const {age}: {name: string, age: number, coords: {lat: number, lng: number}} = profile;

// This is sufficient.
// const {age}: {age: number} = profile;
const {coords: {lat, lng}}: {coords: {lat: number, lng: number}} = profile;
const {age, coords}: {age: number, coords: {lat: number, lng: number}} = profile;
