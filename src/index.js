import * as BABYLON from '@babylonjs/core/Legacy/legacy';

import { createScene } from './view/scene'
import { Cell } from './models'
import { Virus } from './models'

var canvas = document.getElementById('renderCanvas') // Get the canvas element
var engine = new BABYLON.Engine(canvas, true) // Generate the BABYLON 3D engine

const cell1 = new Cell({
    x: 0,
    y: 0,
    radius: 10, // 100 μm = 100000 nm
})

const virus = new Virus({
    x: 10,
    y: 10,
    radius: 1, // 120 nm
    moving: true
})

var scene = createScene([cell1, virus]) //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function() {
    scene.render()
})

// Watch for browser/canvas resize events
window.addEventListener('resize', function() {
    engine.resize()
})
