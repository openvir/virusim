import {Cell} from "./Cell";

describe('Cell', () => {
    describe('glycolysis', () => {
        it('returns', () => {
            const cell = new Cell();
            expect(cell.glycolysis(['glucose'])).toEqual(['pyruvate']);
        });
    });
});
