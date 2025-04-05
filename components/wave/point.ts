import { AnimationTimestamp } from './animation-timestamp'

export class Point {
  origY!: number
  speed!: number
  x!: number
  y!: number
  maxY!: number
  animationTimestamp!: AnimationTimestamp
  nextY!: number

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
      this.renewNextY()
    } else if (point) {
      Object.assign(this, point)
    } else throw new Error('Missing property in Point constructor')
  }

  update = () => {
    // this.index += (this.timestamp.delta * this.speed) / 1000
    // this.y = this.origY + Math.sin(this.index) * this.maxY
  }
  private renewNextY = () =>
    (this.nextY = Math.random() * (this.maxY - this.origY) + this.origY)
}
