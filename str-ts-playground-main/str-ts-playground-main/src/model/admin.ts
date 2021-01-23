


interface IAdmin {
    id: number;
    name: string;
    level: number;

    adminLevel(id: number, name: string, level: number): string
}

export class Admin implements IAdmin {
    id = 0;
    name = '';
    level = 0;

    adminLevel(id: number, name: string, level: number): string {
        return `${id} sorszámú, ${name} nevü admin ${level} szinten van.`;
    }
}

