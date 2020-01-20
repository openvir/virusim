import { Molecule } from './Molecule';

describe('Molecule', () => {
    describe('constructor', () => {
        it('returns a molecule', () => {
            const molecule = new Molecule('H2O');
            expect(molecule).not.toBe(null);
        });
    });
    describe('elementCount', () => {
        it('returns the number of elements in the molecule', () => {
            const molecule = new Molecule('H2O');
            expect(molecule.elementCount('H')).toEqual(2);
            expect(molecule.elementCount('O')).toEqual(1);
        });
    });
});
