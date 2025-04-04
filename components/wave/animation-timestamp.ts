export class AnimationTimestamp {
  current: number
  delta: number
  constructor() {
    this.current = 0
    this.delta = 0
  }
  update(timestamp: number) {
    const last = this.current
    this.current = timestamp
    this.delta = this.current - last
  }
}
