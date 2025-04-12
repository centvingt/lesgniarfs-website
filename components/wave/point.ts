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
      this.nextY = this.maxY
      this.animationTimestamp = animationTimestamp
    } else if (point) {
      Object.assign(this, point)
    } else throw new Error('Missing property in Point constructor')
  }

  get deltaY() {
    // return this.nextY - this.y
    return this.nextY - this.y
  }

  // this.y = this.fixedY + Math.sin(this.cur) * this.max

  update = () => {
    const translateY = (this.animationTimestamp.delta * this.deltaY) / 1000
    console.log('components/wave/point.ts > translateY >', translateY)

    if (translateY > 0) {
      if (this.y >= this.maxY) {
        console.log('components/wave/point.ts > this.y >= this.maxY > TRUE')
        this.nextY = this.origY
      }
    } else {
      if (this.y <= this.origY) {
        console.log('components/wave/point.ts > this.y <= this.origY > TRUE')
        this.nextY = this.maxY
      }
    }
    this.y += translateY
  }
  private getNewNextY = () => {
    const nextY = Math.floor(Math.random() * (this.maxY - this.origY))
    return nextY
  }
}
