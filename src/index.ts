import { Engine } from '@babylonjs/core/Engines'
import { Vector3 } from '@babylonjs/core/Maths/math'
import { createCellMesh } from './view/Cell2d'
import { addMovement } from './view/movement'

import { BodyScene } from './view/scene'
import { Cell } from './models'
import { Virus } from './models'
import { createVirusGenesMesh, createVirusMesh } from './view/Virus2d'

const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement
const engine = new Engine(canvas, true)

const cell1 = new Cell({
    x: 0,
    y: 0,
    name: 'Body Cell',
})

const virus = new Virus({
    x: 20,
    y: 0,
    radius: 1, // 120 nm
    moving: true,
    name: 'SARS-CoV-2',
})

const bodyScene = new BodyScene(engine, canvas)
const scene = bodyScene.scene
const cell2d = createCellMesh(cell1, scene)
const virus2d = createVirusMesh(virus, scene)
const virusGenes2d = createVirusGenesMesh(virus, scene)

const startTranslation = function() {
    console.log('Starting translation...')
    bodyScene.camera.setPosition((new Vector3(0, 0, -10)))
}

const virusCellMembraneFusion = function() {
    console.log('Starting virus cell membrane fusion...')
    addMovement(virusGenes2d, scene, { initialValue: -9, finalValue: -15 }, () => {
        startTranslation()
    })
}

const collisionDetection = function() {
    if (cell2d.intersectsMesh(virus2d, true)) {
        scene.unregisterBeforeRender(collisionDetection)
        virusCellMembraneFusion()
    }
}
scene.registerBeforeRender(collisionDetection)

addMovement(virus2d, scene, {
    initialValue: 1,
    finalValue: -9,
})
addMovement(virusGenes2d, scene, {
    initialValue: 1,
    finalValue: -9,
})

engine.runRenderLoop(function() {
    scene.render()
})

window.addEventListener('resize', function() {
    engine.resize()
})
