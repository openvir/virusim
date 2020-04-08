import { Molecule } from './Molecule'
import { Virus } from './Virus'

export class Cell {
    x: number
    y: number
    radius: number

    constructor(properties: Object = {}) {
        Object.assign(this, properties)
    }

    glycolysis(input: Molecule[]) {
        if (input[0].name === 'C6H12O6') {
            return [new Molecule('C3H3O3')]
        }

        return []
    }

    virusCellMembraneFusionPossible(_virus: Virus): boolean {
        return true
    }
}
