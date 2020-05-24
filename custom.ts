/**
 * Animation blocks
 */
//% weight=80 color=#0fbc11 icon=""
namespace animations {
    /**
     * Blink an led at a particular interval (ms)
     * @param x horizontal led coordinate
     * @param y vertical led coordinate
     * @param interval time in milliseconds between blinks
     */
    //% block="blink x $x y $y every $interval ms"
    export function  blink(x: number, y: number, interval: number): void {
        let sprite = game.createSprite(x, y)
        sprite.setBlink(interval)
        sprite.blink()
    }
}
