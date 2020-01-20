import { ELEMENTS } from '../models/Element'

export function getElements(formula: string): Record<string, number> {
    const elements = {}

    for (let i = 0; i < formula.length; i++) {
        const c = formula[i]
        if (ELEMENTS[c]) {
            const rest = formula.substring(i + 1)
            const match = rest.match(/\d+/)
            if (match) {
                elements[c] = parseInt(match[0])
            } else {
                elements[c] = 1
            }
        }
    }

    return elements
}
