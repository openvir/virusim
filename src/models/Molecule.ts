export class Molecule {
    name: string;
    elements: Object;

    constructor(name: string) {
        this.name = name;
        this.elements = {};

        let rest = name;

        while (rest.length > 0) {
            const match = rest.match(/\d+/);
            if (match) {
                const element = rest.substring(0, match.index);
                this.elements[element] = parseInt(match[0]);
                rest = rest.substring(match.index + 1);
            } else {
                this.elements[rest] = 1;
                break;
            }
        }
    }

    elementCount(element: string): number {
        return this.elements[element];
    }
}
