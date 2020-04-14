import { Bond } from './Bond'

describe('Bond', () => {
    describe('polarity', () => {
        it('should consider OH a polar bond', () => {
            const bond = new Bond('OH')
            expect(bond.polarity()).toEqual('polar')
        })
        it('should consider CH a non-polar bond', () => {
            const bond = new Bond('CH')
            expect(bond.polarity()).toEqual('non-polar')
        })
    })
})
