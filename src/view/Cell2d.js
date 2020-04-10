const BABYLON = require('babylonjs')

export function createPath(cell) {
    const tes = 60
    const pi2 = Math.PI * 2
    const step = pi2 / tes
    const path = []
    for (let i = 0; i < pi2; i += step) {
        const x = cell.x + cell.radius * Math.sin(i)
        const z = 0
        const y = cell.y + cell.radius * Math.cos(i)
        path.push(new BABYLON.Vector3(x, y, z))
    }
    path.push(path[0])
    return path
}
