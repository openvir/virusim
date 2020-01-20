import { getElements } from '../utils/Formula'

export class Molecule {
    name: string
    elements: Record<string, number>

    constructor(name: string) {
        this.name = name
        this.elements = getElements(name)
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
