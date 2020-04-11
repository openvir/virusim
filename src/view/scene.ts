import { Scene } from '@babylonjs/core'
import { ArcRotateCamera } from '@babylonjs/core/Cameras'
import { Engine } from '@babylonjs/core/Engines'
import { HemisphericLight } from '@babylonjs/core/Lights'
import { Color3, Vector3 } from '@babylonjs/core/Maths/math'

import { Cell, Virus } from '../models'

import { createCellMesh } from './Cell2d'
import { addMovement } from './movement'
import { createVirusMesh } from './Virus2d'

const canvas = document.getElementById('renderCanvas')
// @ts-ignore
const engine = new Engine(canvas, true)

export const createScene = function(cell: Cell, virus: Virus) {
    const scene = new Scene(engine)
    scene.clearColor = new Color3(0.5, 0.5, 0.5).toColor4()

    const camera = new ArcRotateCamera('camera1', 0, 0, 0, new Vector3(0, 0, 0), scene)
    camera.setPosition(new Vector3(0, 0, -50))
    camera.attachControl(canvas, true)

    const light = new HemisphericLight('light1', new Vector3(1, 0, 0), scene)
    light.intensity = 0.7

    const cell2d = createCellMesh(cell, scene)
    const virus2d = createVirusMesh(virus, scene)

    addMovement(virus2d, scene)

    return scene
}
