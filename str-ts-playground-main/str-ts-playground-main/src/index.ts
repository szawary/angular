import './style.scss';

// importálom a User osztályt
import { User } from './model/user';
import { Customer } from './model/customer'
import { Admin } from './model/admin';

// user-ek készítése
const customers: Customer[] = [
    new Customer(),
    new Customer(),
    new Customer(),
];

const admins: Admin[] = [
    new Admin(),
    new Admin(),
    new Admin(),

]

console.log(customers[1].porszivozik(9));
console.log(admins[0].adminLevel(1, 'Laci', 5));
console.log(customers[0].pay(10));

