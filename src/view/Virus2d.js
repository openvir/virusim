const BABYLON = require('babylonjs')

const PI2 = Math.PI * 2

function createGenes(virus) {
    return [
        new BABYLON.Vector3(virus.x - (virus.radius / 2), virus.y, 0),
        new BABYLON.Vector3(virus.x + (virus.radius / 2), virus.y, 0),
    ]
}

function createEnvelope(virus) {
    const tes = 60
    const step = PI2 / tes
    const path = []
    for (let i = 0; i < PI2; i += step) {
        const x = virus.x + virus.radius * Math.sin(i)
        const z = 0
        const y = virus.y + virus.radius * Math.cos(i)
        path.push(new BABYLON.Vector3(x, y, z))
    }
    path.push(path[0])
    return path
}

export function createVirusMesh(virus, scene) {
    const lines = [createEnvelope(virus), createGenes(virus)]
    const mesh = BABYLON.MeshBuilder.CreateLineSystem('circle', { lines: lines }, scene)
    mesh.color = BABYLON.Color3.Red()
    return mesh
}
