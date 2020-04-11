import { Engine } from '@babylonjs/core/Engines'
import { Scene } from '@babylonjs/core'
import { Animation } from '@babylonjs/core/Animations'
import { ArcRotateCamera } from '@babylonjs/core/Cameras'
import { HemisphericLight } from '@babylonjs/core/Lights'
import { Color3, Vector3 } from '@babylonjs/core/Maths/math'

import { Cell, Virus } from '../models'

import { createCellMesh } from './Cell2d'
import { createVirusMesh } from './Virus2d'

const canvas = document.getElementById('renderCanvas')
// @ts-ignore
const engine = new Engine(canvas, true)

export const createScene = function(cells) {
    const scene = new Scene(engine)
    scene.clearColor = new Color3(0.5, 0.5, 0.5).toColor4()

    const camera = new ArcRotateCamera('camera1', 0, 0, 0, new Vector3(0, 0, 0), scene)
    camera.setPosition(new Vector3(0, 0, -50))
    camera.attachControl(canvas, true)

    const light = new HemisphericLight('light1', new Vector3(1, 0, 0), scene)
    light.intensity = 0.7

    for (const cell of cells) {
        let object2d

        if (cell instanceof Cell) {
            object2d = createCellMesh(cell, scene)
        } else if (cell instanceof Virus) {
            object2d = createVirusMesh(cell, scene)
        }

        if (cell.moving) {
            const animationBox = new Animation(
                'tutoAnimation',
                'position.x',
                30,
                Animation.ANIMATIONTYPE_FLOAT,
                Animation.ANIMATIONLOOPMODE_CYCLE,
            )
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
