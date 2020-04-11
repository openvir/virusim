import { ELEMENTS } from './Element'

import { getElements } from '../utils/Formula'

export class Bond {
    name: string
    elements: Record<string, number>

    constructor(name: string) {
        this.name = name
        this.elements = getElements(name)
        if (Object.keys(this.elements).length !== 2) {
            throw new Error('A bond needs two elements.')
        }
    }

    electronegativity(): number {
        const element1 = Object.keys(this.elements)[0]
        const element2 = Object.keys(this.elements)[1]

        return Math.abs(ELEMENTS[element1].electronegativity_pauling - ELEMENTS[element2].electronegativity_pauling)
    }

    polarity(): string {
        if (this.electronegativity() > 0.5) {
            return 'polar'
        } else {
            return 'non-polar'
        }
    }
}
