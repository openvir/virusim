import { getElements } from './Formula'

describe('getElements', () => {
    it('should return all elements', () => {
        expect(getElements('OH')).toEqual({ O: 1, H: 1 })
    })
})
