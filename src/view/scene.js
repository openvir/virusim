import { createPath } from './Cell'

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

    const path1 = createPath(cells[0])
    const circle1 = BABYLON.Mesh.CreateLines('circle', path1, scene)

    const path2 = createPath(cells[1])
    const circle2 = BABYLON.Mesh.CreateLines('circle', path2, scene)

    //Create a scaling animation at 30 FPS
    var animationBox = new BABYLON.Animation('tutoAnimation', 'position.x', 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
    // Animation keys
    var keys = []
    keys.push({ frame: 0, value: 1 })
    keys.push({ frame: 100, value: -5 })

    animationBox.setKeys(keys)

    circle2.animations.push(animationBox)

    setTimeout(async () => {
        var anim = scene.beginAnimation(circle2, 0, 100, false)
        await anim.waitAsync()
    })

    return scene
}
