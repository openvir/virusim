import * as BABYLON from '@babylonjs/core/Legacy/legacy'

import { Vector3 } from '@babylonjs/core/Maths/math'

import { Virus } from '../models'

const PI2 = Math.PI * 2

function createGenes(virus: Virus) {
    return [
        new Vector3(virus.x - (virus.radius / 2), virus.y, 0),
        new Vector3(virus.x + (virus.radius / 2), virus.y, 0),
    ]
}

function createGenesColor(_virus: Virus) {
    return [
        BABYLON.Color3.Red().toColor4(),
        BABYLON.Color3.Red().toColor4(),
    ]
}

function createEnvelopeColor(_virus: Virus) {
    const tes = 60
    const step = PI2 / tes
    const path = []
    for (let i = 0; i < PI2; i += step) {
        path.push(BABYLON.Color3.White().toColor4())
    }
    path.push(BABYLON.Color3.White().toColor4())
    return path
}

function createEnvelope(virus: Virus) {
    const tes = 60
    const step = PI2 / tes
    const path = []
    for (let i = 0; i < PI2; i += step) {
        const x = virus.x + virus.radius * Math.sin(i)
        const z = 0
        const y = virus.y + virus.radius * Math.cos(i)
        path.push(new Vector3(x, y, z))
    }
    path.push(path[0])
    return path
}

export function createVirusMesh(virus: Virus, scene) {
    const lines = [createEnvelope(virus), createGenes(virus)]
    const colors = [createEnvelopeColor(virus), createGenesColor(virus)]
    return BABYLON.MeshBuilder.CreateLineSystem('circle', {
        colors: colors,
        lines: lines,
    }, scene)
}
