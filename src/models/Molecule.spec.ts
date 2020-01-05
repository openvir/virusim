import {Molecule} from "./Molecule";

describe('Molecule', () => {
    describe('constructor', () => {
        it('returns a molecule', () => {
            const molecule = new Molecule("H2O");
            expect(molecule).not.toBe(null);
        });
    });
});
