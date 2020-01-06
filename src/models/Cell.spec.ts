import {Cell} from "./Cell";
import {Molecule} from "./Molecule";

describe('Cell', () => {
    describe('glycolysis', () => {
        it('returns', () => {
            const cell = new Cell();
            expect(cell.glycolysis([new Molecule('C6H12O6')])).toEqual([new Molecule('C3H3O3')]);
        });
    });
});
