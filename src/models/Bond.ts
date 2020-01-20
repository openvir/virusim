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

    polarity(): string {
        let element1 = Object.keys(this.elements)[0]
        let element2 = Object.keys(this.elements)[1]

        const electroNegativity = Math.abs(ELEMENTS[element1].electronegativity_pauling - ELEMENTS[element2].electronegativity_pauling)

        if (electroNegativity > 0.5) {
            return 'polar'
        } else {
            return 'non-polar'
        }
    }
}
