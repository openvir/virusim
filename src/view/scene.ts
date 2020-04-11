import { Scene } from '@babylonjs/core'
import { ArcRotateCamera } from '@babylonjs/core/Cameras'
import { Engine } from '@babylonjs/core/Engines'
import { HemisphericLight } from '@babylonjs/core/Lights'
import { Color3, Vector3 } from '@babylonjs/core/Maths/math'

export const createScene = function(engine: Engine, canvas) {
    const scene = new Scene(engine)
    scene.clearColor = new Color3(0.5, 0.5, 0.5).toColor4()

    const camera = new ArcRotateCamera('camera1', 0, 0, 0, new Vector3(0, 0, 0), scene)
    camera.setPosition(new Vector3(0, 0, -50))
    camera.attachControl(canvas, true)

    const light = new HemisphericLight('light1', new Vector3(1, 0, 0), scene)
    light.intensity = 0.7

    return scene
}
