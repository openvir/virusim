const BABYLON = require('babylonjs')

const canvas = document.getElementById('renderCanvas') // Get the canvas element
const engine = new BABYLON.Engine(canvas, true) // Generate the BABYLON 3D engine

export const createScene = function(cells) {
    const scene = new BABYLON.Scene(engine)
    scene.clearColor = new BABYLON.Color3(.5, .5, .5)

    const camera = new BABYLON.ArcRotateCamera('camera1', 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene)
    camera.setPosition(new BABYLON.Vector3(0, 0, -50))
    camera.attachControl(canvas, true)

    const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1, 0, 0), scene)
    light.intensity = 0.7

    for (const cell of cells) {
        var tes = 60
        var pi2 = Math.PI * 2
        var step = pi2 / tes
        var path = []
        for (var i = 0; i < pi2; i += step) {
            var x = cell.x + cell.radius * Math.sin(i)
            var z = 0
            var y = cell.y + cell.radius * Math.cos(i)
            path.push(new BABYLON.Vector3(x, y, z))
        }
        path.push(path[0])
        const circle = BABYLON.Mesh.CreateLines('circle', path, scene)
    }

    return scene
}
