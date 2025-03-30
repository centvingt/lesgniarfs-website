export class Point {
  index: number
  maxY: number
  origY: number
  speed: number
  x: number
  y: number

  constructor({
    index,
    // maxY,
    speed,
    x,
    y,
  }: {
    index: number
    // maxY: number
    speed: number
    x: number
    y: number
  }) {
    this.index = index
    this.maxY = Math.random() * 50 + 100
    this.origY = y
    this.speed = speed
    this.x = x
    this.y = y
  }

  update = () => {
    this.index += this.speed
    this.y = this.origY + Math.sin(this.index) * this.maxY
  }
}
