import { Molecule } from './Molecule'

export class Cell {
    glycolysis(input: Molecule[]) {
        if (input[0].name === 'C6H12O6') {
            return [new Molecule('C3H3O3')]
        }

        return []
    }
}
