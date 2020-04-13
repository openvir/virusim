import { LinesMesh, Scene } from '@babylonjs/core'
import { Animation } from '@babylonjs/core/Animations'

type Params = {
    initialValue: number,
    finalValue: number
}

export function addMovement(virus2d: LinesMesh, scene: Scene, params: Params, onMovementFinished?: () => void) {
    const animation = new Animation(
        'tutoAnimation',
        'position.x',
        30,
        Animation.ANIMATIONTYPE_FLOAT,
        Animation.ANIMATIONLOOPMODE_CYCLE,
    )

    const keys = []
    keys.push({ frame: 0, value: params.initialValue })
    keys.push({ frame: 100, value: params.finalValue })

    animation.setKeys(keys)

    virus2d.animations.push(animation)

    setTimeout(async () => {
        const anim = scene.beginAnimation(virus2d, 0, 100, false, 1.0, onMovementFinished)
        await anim.waitAsync()
    })
}
