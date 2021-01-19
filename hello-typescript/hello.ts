class Greeter {
    fullName: string = "";
    skills: Array<string> = [
        "programozing",
        "constructing",
    ]
    constructor(firstName: string, lastName: string) {
        this.fullName = `${lastName} ${firstName}`;
    }

    greet() {
        return `Hello, my name is ${this.fullName}.`;
    }
}

let g: Greeter = new Greeter('László', 'Szabó');
document.body.innerHTML = g.greet();