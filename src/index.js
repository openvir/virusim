import { Engine } from '@babylonjs/core/Engines'

import { createScene } from './view/scene'
import { Cell } from './models'
import { Virus } from './models'

const canvas = document.getElementById('renderCanvas')
const engine = new Engine(canvas, true)

const cell1 = new Cell({
    x: 0,
    y: 0,
    radius: 10, // 100 μm = 100000 nm
})

const virus = new Virus({
    x: 10,
    y: 10,
    radius: 1, // 120 nm
    moving: true,
})

const scene = createScene([cell1, virus])

engine.runRenderLoop(function() {
    scene.render()
})

window.addEventListener('resize', function() {
    engine.resize()
})
