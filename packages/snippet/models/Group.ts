export class Group {
    name: string

    constructor(name: string) {
        this.name = name
    }

    toString(): string {
        if (this.name === 'R-CH3') {
            return 'Methyl'
        }

        return this.name
    }
}
