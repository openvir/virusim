import { Light, Scene } from '@babylonjs/core'
import { ArcRotateCamera } from '@babylonjs/core/Cameras'
import { Engine } from '@babylonjs/core/Engines'
import { HemisphericLight } from '@babylonjs/core/Lights'
import { Color3, Vector3 } from '@babylonjs/core/Maths/math'

export class BodyScene {
    scene: Scene
    camera: ArcRotateCamera
    light: Light

    constructor(engine: Engine, canvas) {
        this.scene = new Scene(engine)
        this.scene.clearColor = new Color3(0.5, 0.5, 0.5).toColor4()

        this.camera = new ArcRotateCamera('camera1', 0, 0, 0, new Vector3(0, 0, 0), this.scene)
        this.camera.setPosition(new Vector3(0, 0, -50))
        this.camera.attachControl(canvas, true)

        this.light = new HemisphericLight('light1', new Vector3(1, 0, 0), this.scene)
        this.light.intensity = 0.7
    }
}
