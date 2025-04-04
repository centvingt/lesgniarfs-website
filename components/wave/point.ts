import { AnimationTimestamp } from './animation-timestamp'

export class Point {
  maxY: number
  origY: number
  speed: number
  x: number
  y: number
  animationTimestamp: AnimationTimestamp

  constructor({
    x,
    y,
    animationTimestamp,
  }: {
    x: number
    y: number
    animationTimestamp: AnimationTimestamp
  }) {
    this.maxY = Math.random() * 50 + 100
    this.origY = y
    this.speed = 30
    this.x = x
    this.y = y
    this.animationTimestamp = animationTimestamp
  }

  update = () => {
    // this.index += (this.timestamp.delta * this.speed) / 1000
    // this.y = this.origY + Math.sin(this.index) * this.maxY
  }
}
