import * as BABYLON from '@babylonjs/core/Legacy/legacy'
import { Engine } from '@babylonjs/core/Engines/engine'
import { Scene } from '@babylonjs/core/scene'
import { Color3, Vector3 } from '@babylonjs/core/Maths/math'
import { MeshBuilder } from '@babylonjs/core/Meshes'

import { Cell, Virus } from '../models'

import { createCellPath } from './Cell2d'
import { createVirusMesh } from './Virus2d'

const canvas = document.getElementById('renderCanvas') // Get the canvas element
const engine = new Engine(canvas, true) // Generate the BABYLON 3D engine

export const createScene = function(cells) {
    const scene = new Scene(engine)
    scene.clearColor = new Color3(.5, .5, .5).toColor4()

    const camera = new BABYLON.ArcRotateCamera('camera1', 0, 0, 0, new Vector3(0, 0, 0), scene)
    camera.setPosition(new Vector3(0, 0, -50))
    camera.attachControl(canvas, true)

    const light = new BABYLON.HemisphericLight('light1', new Vector3(1, 0, 0), scene)
    light.intensity = 0.7

    for (const cell of cells) {
        let object2d

        if (cell instanceof Cell) {
            object2d = MeshBuilder.CreateLineSystem('circle', { lines: createCellPath(cell) }, scene)
        } else if (cell instanceof Virus) {
            object2d = createVirusMesh(cell, scene)
        }

        if (cell.moving) {
            const animationBox = new BABYLON.Animation('tutoAnimation', 'position.x', 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
            // Animation keys
            const keys = []
            keys.push({ frame: 0, value: 1 })
            keys.push({ frame: 100, value: -5 })

            animationBox.setKeys(keys)

            object2d.animations.push(animationBox)

            setTimeout(async () => {
                const anim = scene.beginAnimation(object2d, 0, 100, false)
                await anim.waitAsync()
            })
        }
    }

    return scene
}
