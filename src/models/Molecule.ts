export class Molecule {
    name: string
    elements: Record<string, any>

    constructor(name: string) {
        this.name = name
        this.elements = {}

        let rest = name

        while (rest.length > 0) {
            const match = rest.match(/\d+/)
            if (match) {
                const element = rest.substring(0, match.index)
                this.elements[element] = parseInt(match[0])
                rest = rest.substring(match.index + 1)
            } else {
                this.elements[rest] = 1
                break
            }
        }
    }

    elementCount(element: string): number {
        return this.elements[element]
    }

    toString(): string {
        if (this.name === 'C6H12O6') {
            return 'Glucose'
        } else if (this.name === 'C3H3C3') {
            return 'Pyrovate'
        }

        return this.name
    }
}
