import './style.scss';

import './style.scss';

//const user = {
//    name: 'Juli',
//    e- mail: 'juli@gmail.com',
//        hello() {
//    return `Hello, I ma ${this.name}.`;
//}
//};
//const user2 = {
//    name: 'Juli',
//    e- mail: 'juli@gmail.com',
//        hello() {
//    return `Hello, I ma ${this.name}.`;
//}
//};
//console.log(user.name);
//console.log(user.name2);


// osztályt használunk az előbbi helyett.
class User {
    name: string = '';
    email: string = '';
    age: number = 18;

    constructor(name: string) { // felépíti az objektumot
        this.name = name;
    }

    hello(): string {
        return `Szia, a nevem ${this.name}`;
    }
}; // ez az alapja az új objektumnak

const user1 = new User('Pisti');
const user2 = new User('Sanyi');
const user3 = new User('Enikő');

console.log(user2.hello());
console.log(user3.age, user3.name);


class Vehicle {
    name: string;
    /**sztring típusú változó, vizi,szárazföldi, légi jármű */
    type: string;

    constructor(name: string) {
        this.name = name;
    }
    move(from: number, to: number): string {
        return `This vehicle moves from ${from} to ${to}.`;
    }
}

class GroundVehicle extends Vehicle {// ez mindent tud, amit a Vehicle tud
    type: string = 'szárazföldi jármű';
    wheels: number = 0;

    constructor(name: string, wheels: number) {
        super(name);    // az osztály feletti osztály meghívása
        this.wheels = wheels;
    }
}

class Lorry extends GroundVehicle {
    capacity: number = 0;

    constructor(name: string, wheels: number, capacity: number) {
        super(name, wheels);
        this.capacity = capacity;
    }
}

const volvoTruck = new Lorry('GlobeTrotter', 12, 24000);
console.log(volvoTruck.move(5, 15));