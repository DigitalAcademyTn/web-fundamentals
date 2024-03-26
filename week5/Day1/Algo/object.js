var car = {
    // properties
    brand: "BMW",  // property name may be an identifier or number or string
    model: "serie3",
    year: "2022",
    "color": "blue",
    // Array property
    features: ["GPS", "twin turbo" , "camera"],
    // Methods
    start: function () {
        return "start the car"
    },
    carInfo: function () {
        console.log("Brand:" + car.brand);
        console.log("model:", car.model);
        console.log("year:", this.year);
        console.log("model:", car.model);
        console.log("color:", this.color);
    }
}

 // Using the car object
console.log(car.brand);
console.log(car.model);

console.log(car.features);


console.log(car.start());  // note we call this like a function because it is a function

// we can now get all the car info by
car.carInfo();

// adding an element to the object
car.enigneType = "v6";  // Adding a new property


// ! Deleting a property from the Car object
delete car.color;

console.log(car);