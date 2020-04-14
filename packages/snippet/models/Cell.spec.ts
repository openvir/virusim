import { Cell } from './Cell'
import { Molecule } from './Molecule'
import { Virus } from './Virus'

describe('Cell', () => {
    describe('glycolysis', () => {
        it('returns', () => {
            const cell = new Cell()
            expect(cell.glycolysis([new Molecule('C6H12O6')])).toEqual([new Molecule('C3H3O3')])
        })
    })
    describe('#virusCellMembraneFusionPossible', () => {
        it('should be always true for now', () => {
            const cell = new Cell()
            expect(cell.virusCellMembraneFusionPossible(new Virus())).toBeTruthy()
        })
    })
})
