import { Color3, Vector3 } from '@babylonjs/core/Maths/math'
import { MeshBuilder } from '@babylonjs/core/Meshes'
import { LinesMesh } from '@babylonjs/core/Meshes/linesMesh'
import { AdvancedDynamicTexture, TextBlock } from '@babylonjs/gui'
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
        Color3.Red().toColor4(),
        Color3.Red().toColor4(),
    ]
}

function createEnvelopeColor(_virus: Virus) {
    const tes = 60
    const step = PI2 / tes
    const path = []
    for (let i = 0; i < PI2; i += step) {
        path.push(Color3.White().toColor4())
    }
    path.push(Color3.White().toColor4())
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

export function createVirusMesh(virus: Virus, scene): LinesMesh {
    const lines = [createEnvelope(virus), createGenes(virus)]
    const colors = [createEnvelopeColor(virus), createGenesColor(virus)]

    const mesh = MeshBuilder.CreateLineSystem('circle', {
        colors: colors,
        lines: lines,
    }, scene)

    const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI('UI')
    const text1 = new TextBlock()
    text1.text = virus.name
    text1.color = 'white'
    text1.fontSize = 12
    advancedTexture.addControl(text1)
    text1.linkWithMesh(mesh)
    text1.linkOffsetY = -30

    return mesh
}
