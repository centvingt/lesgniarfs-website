'use client'

import { useEffect, useRef } from 'react'
import { Wave } from '../../components/wave/wave'
import { Point } from '../../components/wave/point'

const useCanvas = (
  draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('ANY 2D CONTEXT FOUND IN CANVAS')
    let frameCount = 0
    let animationFrameId: number
    const render = () => {
      frameCount++
      draw(ctx, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  return canvasRef
}

const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
  if (false) console.log('src/app/page.tsx > frameCount >', frameCount)
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

  const points = [
    new Point({ index: 0, speed: 0.1, x: 0, y: 30 }),
    new Point({ index: 1, speed: 0.1, x: 100, y: 60 }),
    new Point({ index: 2, speed: 0.1, x: 200, y: 0 }),
    new Point({ index: 3, speed: 0.1, x: 300, y: 50 }),
    new Point({ index: 3, speed: 0.1, x: 400, y: 20 }),
  ]
  const wave = new Wave({ color: '#ffffff', height: 300, width: 400, points })
  wave.draw(ctx)
}
export default function Home() {
  const canvasRef = useCanvas(draw)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <canvas ref={canvasRef}></canvas>
      </header>
    </div>
  )
}
