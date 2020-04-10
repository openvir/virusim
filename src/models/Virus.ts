export class Virus {
    x: number
    y: number
    radius: number
    moving: boolean

    constructor(properties: Object = {}) {
        Object.assign(this, properties)
    }
}
