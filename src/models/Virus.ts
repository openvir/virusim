export class Virus {
    x: number
    y: number
    radius: number

    constructor(properties: Object = {}) {
        Object.assign(this, properties)
    }
}
