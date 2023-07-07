//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...


class Car extends VehicleModule {
    constructor (make, model, year, color, mileage){
        super(make,model,year,color,mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10
    }
    loadPassenger(num) {
        if(this.passengers < this.maxPassengers){
            console.log("There is room for more people in the Car.")
        }
        else if (this.passengers = this.maxPassengers){
            console.log("The car is at max capacity")
        }
        else if (this.passengers > this.maxPassengers){
            console.log("There are no more seats available")
        }
    }
}








//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
