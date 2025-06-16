import { Point } from './point'

class DrawingPointsHub {
  remainingPoints: Point[]
  drawingPoints: Point[] = []
  width = 0
  constructor(points: Point[]) {
    this.remainingPoints = points
  }
}

export class Wave {
  color: string
  points: Point[]
  drawingPoints: Point[] = []
  height: number

  constructor({
    points,
    color,
    height,
  }: {
    points: Point[]
    color: string
    height: number
  }) {
    this.points = points
    this.color = color
    this.height = height
  }

  resize = (ctx: CanvasRenderingContext2D) => {
    const { width: canvasWidth } = ctx.canvas
    const drawingPointsHub = new DrawingPointsHub(this.points)

    const updateDrawingPointsHub = () => {
      for (const point of drawingPointsHub.remainingPoints) {
        if (drawingPointsHub.width > canvasWidth) return

        drawingPointsHub.drawingPoints = [
          ...drawingPointsHub.drawingPoints,
          point,
        ]

        drawingPointsHub.width += point.x - drawingPointsHub.width
      }

      drawingPointsHub.remainingPoints = []
    }
    updateDrawingPointsHub()
    while (drawingPointsHub.width < canvasWidth) {
      const [, ...rest] = this.points
      for (const point of rest) {
        const newPoint = new Point({
          config: {
            x: point.x + drawingPointsHub.width,
            y: point.origY,
            gap: point.maxY - point.origY,
            animationTimestamp: point.animationTimestamp,
          },
        })
        drawingPointsHub.remainingPoints = [
          ...drawingPointsHub.remainingPoints,
          newPoint,
        ]
      }

      updateDrawingPointsHub()
    }

    this.drawingPoints = drawingPointsHub.drawingPoints

    this.draw(ctx)
  }

  private drawWaveShape(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    if (this.drawingPoints.length === 0) return

    let previousX = this.drawingPoints[0].x
    let previousY = this.drawingPoints[0].y
    ctx.moveTo(previousX, previousY)

    for (const point of this.drawingPoints) {
      point.update()
      const endingX = (previousX + point.x) / 2
      const endingY = (previousY + point.y) / 2
      ctx.quadraticCurveTo(previousX, previousY, endingX, endingY)
      previousX = point.x
      previousY = point.y
    }

    ctx.lineTo(previousX, previousY)
    ctx.lineTo(this.drawingPoints[this.drawingPoints.length - 1].x, this.height)
    ctx.lineTo(this.drawingPoints[0].x, this.height)
    ctx.closePath()
  }

  draw = (ctx: CanvasRenderingContext2D) => {
    if (this.drawingPoints.length === 0) this.resize(ctx)

    // Shadow
    ctx.fillStyle = 'rgba(64, 64, 64, 0.25)'
    ctx.filter = 'blur(16px)'
    this.drawWaveShape(ctx)
    ctx.fill()
    ctx.filter = 'none'

    // Actual wave
    ctx.fillStyle = this.color
    this.drawWaveShape(ctx)
    ctx.fill()
  }
}
