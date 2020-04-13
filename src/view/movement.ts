import { LinesMesh, Scene } from '@babylonjs/core'
import { Animation } from '@babylonjs/core/Animations'

export function addMovement(virus2d: LinesMesh, scene: Scene, initialValue: number, finalValue: number, onMovementFinished?: () => void) {
    const animationBox = new Animation(
        'tutoAnimation',
        'position.x',
        30,
        Animation.ANIMATIONTYPE_FLOAT,
        Animation.ANIMATIONLOOPMODE_CYCLE,
    )

    const keys = []
    keys.push({ frame: 0, value: initialValue })
    keys.push({ frame: 100, value: finalValue })

    animationBox.setKeys(keys)

    virus2d.animations.push(animationBox)

    setTimeout(async () => {
        const anim = scene.beginAnimation(virus2d, 0, 100, false, 1.0, onMovementFinished)
        await anim.waitAsync()
    })
}
