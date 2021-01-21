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
    hello(): string {
        return `Szia, a nevem ${this.name}`;
    }
}; // ez az alapja az új objektumnak

const user1 = new User();
const user2 = new User();
user2.name = 'Jenő';
const user3 = new User();

console.log(user2.hello());
