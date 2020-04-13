import { Scene } from '@babylonjs/core'
import { AdvancedDynamicTexture, TextBlock } from '@babylonjs/gui'
import { Vector3 } from '@babylonjs/core/Maths/math'
import { MeshBuilder } from '@babylonjs/core/Meshes'
import { LinesMesh } from '@babylonjs/core/Meshes/linesMesh'

import { Cell } from '../models'

const CELL_RADIUS = 10 // 100 μm = 100000 nm
const RIBOSOME_RADIUS = 0.1 // 20 nm

function createRibosomePoints(cell: Cell) {
    const tes = 60
    const pi2 = Math.PI * 2
    const step = pi2 / tes
    const points = []
    for (let i = 0; i < pi2; i += step) {
        const x = cell.x + RIBOSOME_RADIUS * Math.sin(i)
        const z = 0
        const y = cell.y + RIBOSOME_RADIUS * Math.cos(i)
        points.push(new Vector3(x, y, z))
    }
    points.push(points[0])
    return points
}

function createCellMembranePoints(cell: Cell) {
    const tes = 60
    const pi2 = Math.PI * 2
    const step = pi2 / tes
    const points = []
    for (let i = 0; i < pi2; i += step) {
        const x = cell.x + CELL_RADIUS * Math.sin(i)
        const z = 0
        const y = cell.y + CELL_RADIUS * Math.cos(i)
        points.push(new Vector3(x, y, z))
    }
    points.push(points[0])
    return points
}

export function createCellMesh(cell: Cell, scene: Scene): LinesMesh {
    const cellMembranePoints = createCellMembranePoints(cell)
    const ribosomePoints = createRibosomePoints(cell)
    const mesh = MeshBuilder.CreateLineSystem('circle', { lines: [cellMembranePoints, ribosomePoints] }, scene)

    const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI('UI')
    const text1 = new TextBlock()
    text1.text = cell.name
    text1.color = 'white'
    text1.fontSize = 12
    advancedTexture.addControl(text1)
    text1.linkWithMesh(mesh)
    text1.linkOffsetY = CELL_RADIUS + 160

    return mesh
}
