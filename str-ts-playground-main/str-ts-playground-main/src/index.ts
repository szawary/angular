import './style.scss';

// importálom a User osztályt
import { User } from './model/user';
import { Customer } from './model/customer'

// user-ek készítése
const customers: Customer[] = [
    new Customer(),
    new Customer(),
    new Customer(),
];

console.log(customers[1].porszivozik(9));

console.log(customers[0].pay(10));

