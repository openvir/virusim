import { Bond } from './Bond'

describe('Bond', () => {
    describe('polarity', () => {
        it('should consider OH a polar bond', () => {
            const bond = new Bond('OH')
            expect(bond.polarity()).toEqual('polar')
        })
    })
})
