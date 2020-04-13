import { Light, Scene, UniversalCamera } from '@babylonjs/core'
import { Engine } from '@babylonjs/core/Engines'
import { HemisphericLight } from '@babylonjs/core/Lights'
import { Color3, Vector3 } from '@babylonjs/core/Maths/math'

export class BodyScene {
    scene: Scene
    camera: UniversalCamera
    light: Light

    constructor(engine: Engine, canvas) {
        this.scene = new Scene(engine)
        this.scene.clearColor = new Color3(0.5, 0.5, 0.5).toColor4()

        this.camera = new UniversalCamera('camera1', new Vector3(0, 0, -50), this.scene)
        this.camera.attachControl(canvas, true)

        this.light = new HemisphericLight('light1', new Vector3(1, 0, 0), this.scene)
        this.light.intensity = 0.7
    }
}
