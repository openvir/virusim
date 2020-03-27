let BABYLON = require('babylonjs')

var canvas = document.getElementById('renderCanvas') // Get the canvas element
var engine = new BABYLON.Engine(canvas, true) // Generate the BABYLON 3D engine

export const createScene = function(cells) {
    var scene = new BABYLON.Scene(engine)
    scene.clearColor = new BABYLON.Color3(.5, .5, .5)
    // camera
    var camera = new BABYLON.ArcRotateCamera('camera1', 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene)
    camera.setPosition(new BABYLON.Vector3(0, 0, -50))
    camera.attachControl(canvas, true)
    // light
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1, 0, 0), scene)
    light.intensity = 0.7
    var mat = new BABYLON.StandardMaterial('mat1', scene)
    mat.alpha = 1.0
    mat.diffuseColor = new BABYLON.Color3(0.5, 0.5, 1.0)
    //mat.wireframe = true;
    mat.backFaceCulling = false

    for (const cell of cells) {
        var radius = 10
        var tes = 60
        var pi2 = Math.PI * 2
        var step = pi2 / tes
        var path = []
        for (var i = 0; i < pi2; i += step) {
            var x = cell.x + radius * Math.sin(i)
            var z = 0
            var y = cell.y + radius * Math.cos(i)
            path.push(new BABYLON.Vector3(x, y, z))
        }
        path.push(path[0])
        var circle = BABYLON.Mesh.CreateLines('circle', path, scene)
    }




    // var sphere = BABYLON.Mesh.CreateRibbon("sph", paths, false, false, 0, scene);
    // sphere.material = mat;


    return scene
}
