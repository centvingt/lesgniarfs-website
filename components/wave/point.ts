import { AnimationTimestamp } from './animation-timestamp'

export class Point {
  origY: number
  speed: number
  x: number
  y: number
  maxY: number
  animationTimestamp: AnimationTimestamp

  constructor({
    config,
    point,
  }: {
    config?: {
      x: number
      y: number
      gap: number
      animationTimestamp: AnimationTimestamp
    }
    point?: Point
  }) {
    if (config) {
      const { x, y, gap, animationTimestamp } = config
      this.origY = y
      this.speed = 30
      this.x = x
      this.y = y
      this.maxY = y + gap
      this.animationTimestamp = animationTimestamp
    } else if (point) {
      const { origY, speed, x, y, maxY, animationTimestamp } = point
      this.origY = origY
      this.speed = speed
      this.x = x
      this.y = y
      this.maxY = maxY
      this.animationTimestamp = animationTimestamp
    } else throw new Error('Missing property in Point constructor')
  }

  update = () => {
    // this.index += (this.timestamp.delta * this.speed) / 1000
    // this.y = this.origY + Math.sin(this.index) * this.maxY
  }
}
