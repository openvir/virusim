export function getElements(formula: string): Record<string, number> {
    const elements = {}
    let rest = formula

    while (rest.length > 0) {
        const match = rest.match(/\d+/)
        if (match) {
            const element = rest.substring(0, match.index)
            elements[element] = parseInt(match[0])
            rest = rest.substring(match.index + 1)
        } else {
            elements[rest] = 1
            break
        }
    }

    return elements
}
