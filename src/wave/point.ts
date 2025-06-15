const WAVE_SPEED_MULTIPLIER = 0.000003

import { AnimationTimestamp } from './animation-timestamp'

export class Point {
  origY!: number
  speed!: number
  x!: number
  y!: number
  maxY!: number
  animationTimestamp!: AnimationTimestamp
  phase!: number

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
      // Vary speed slightly for each point for natural animation variation
      this.speed = 20 + Math.random() * 20
      this.x = x
      this.y = y

      this.maxY = y + gap
      this.animationTimestamp = animationTimestamp
      this.phase = Math.random() * Math.PI * 2
    } else if (point) {
      Object.assign(this, point)
    } else throw new Error('Missing property in Point constructor')
  }

  update = () => {
    this.phase +=
      this.animationTimestamp.delta * this.speed * WAVE_SPEED_MULTIPLIER
    const amplitude = (this.maxY - this.origY) / 2
    const centerY = this.origY + amplitude
    this.y = centerY + Math.sin(this.phase) * amplitude
  }
}
