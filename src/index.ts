import { Engine } from '@babylonjs/core/Engines'
import { createCellMesh } from './view/Cell2d'
import { addMovement } from './view/movement'

import { createScene } from './view/scene'
import { Cell } from './models'
import { Virus } from './models'
import { createVirusMesh } from './view/Virus2d'

const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement
const engine = new Engine(canvas, true)

const cell1 = new Cell({
    x: 0,
    y: 0,
    radius: 10, // 100 μm = 100000 nm
    name: 'Body Cell',
})

const virus = new Virus({
    x: 10,
    y: 10,
    radius: 1, // 120 nm
    moving: true,
    name: 'SARS-CoV-2',
})

const scene = createScene(engine, canvas)
const cell2d = createCellMesh(cell1, scene)
const virus2d = createVirusMesh(virus, scene)

scene.registerBeforeRender(function() {
    if (cell2d.intersectsMesh(virus2d, true)) {
        console.log('collision')
    }
})

addMovement(virus2d, scene)

engine.runRenderLoop(function() {
    scene.render()
})

window.addEventListener('resize', function() {
    engine.resize()
})
