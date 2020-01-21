import { Group } from './Group'

describe('Group', () => {
    describe('constructor', () => {
        it('should be instantiatable', () => {
            const group = new Group('R-CH3')
            expect(group).toBeDefined()
        })
    })
})
