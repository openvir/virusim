export class Virus {
    x: number
    y: number
    radius: number
    moving: boolean
    name: string

    constructor(properties: Record<string, any> = {}) {
        Object.assign(this, properties)
    }
}
