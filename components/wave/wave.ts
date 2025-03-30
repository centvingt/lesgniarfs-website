import { Point } from './point'

export class Wave {
  //   index: number
  color: string
  points: Point[]
  width: number
  height: number

  constructor({
    // index,
    points,
    color,
    width,
    height,
  }: {
    // index: number
    points: Point[]
    color: string
    width: number
    height: number
  }) {
    this.points = points
    // this.index = index
    this.color = color
    this.width = width
    this.height = height
  }

  draw = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath()
    ctx.fillStyle = this.color

    let previousX = this.points[0].x
    let previousY = this.points[0].y

    ctx.moveTo(previousX, previousY)

    for (const point of this.points) {
      point.update()

      const endingX = (previousX + point.x) / 2
      const endingY = (previousY + point.y) / 2

      ctx.quadraticCurveTo(previousX, previousY, endingX, endingY)

      previousX = point.x
      previousY = point.y
    }

    ctx.lineTo(previousX, previousY)
    ctx.lineTo(this.width, this.height)
    ctx.lineTo(this.points[0].x, this.height)
    ctx.fill()
    ctx.closePath()
  }
}
