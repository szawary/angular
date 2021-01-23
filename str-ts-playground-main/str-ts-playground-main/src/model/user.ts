// User interface készítés
// nem mondja meg az értékeket, csak megmondja, hogy van ilyen.

interface IUser {
    id: number;
    name: string;
    email: string;

    porszivozik(time: number): string // metódus meddig porszívózik, kimenet szöveg

}

// user osztály létrehozása az interface használatával
export abstract class User implements IUser {
    id = 0;
    name = '';
    email = '';

    porszivozik(time: number): string {
        return `Hello, én most porszívózok ${time} percig.`;
    }

    abstract pay(amount: number): boolean;
}
