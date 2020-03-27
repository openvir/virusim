import { createScene } from './scene'

var canvas = document.getElementById('renderCanvas') // Get the canvas element
var engine = new BABYLON.Engine(canvas, true) // Generate the BABYLON 3D engine

const cell1 = {
    x: 0,
    y: 0,
    radius: 10,
}

const cell2 = {
    x: 10,
    y: 10,
    radius: 10,
}

var scene = createScene([cell1, cell2]) //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function() {
    scene.render()
})

// Watch for browser/canvas resize events
window.addEventListener('resize', function() {
    engine.resize()
})
