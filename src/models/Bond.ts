export class Bond {
    name: string

    constructor(name: string) {
        this.name = name
    }

    polarity(): string {
        return 'polar'
    }
}
