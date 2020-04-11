export class Virus {
    x: number
    y: number
    radius: number
    moving: boolean
    name: string

    constructor(properties: Object = {}) {
        Object.assign(this, properties)
    }
}
