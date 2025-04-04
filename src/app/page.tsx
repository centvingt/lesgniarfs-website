'use client'

import 'reflect-metadata'

import { useEffect, useRef } from 'react'
import { Wave } from '../../components/wave/wave'
import { Point } from '../../components/wave/point'
import { AnimationTimestamp } from '../../components/wave/animation-timestamp'

const useCanvas = (
  draw: (ctx: CanvasRenderingContext2D) => void,
  animationTimestamp: AnimationTimestamp
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    if (!canvasRef.current || !window) return
    const canvas = canvasRef.current
    const resizeCanvasWidth = () => {
      console.log('src/app/page.tsx > RESIZE')
      canvas.width = window.innerWidth
    }
    resizeCanvasWidth()
    window.addEventListener('resize', resizeCanvasWidth)
    canvas.height = 100
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('ANY 2D CONTEXT FOUND IN CANVAS')
    let animationFrameId: number
    const render = (timestamp: number) => {
      animationTimestamp.update(timestamp)
      draw(ctx)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render(0)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resizeCanvasWidth', resizeCanvasWidth)
    }
  }, [animationTimestamp, draw])
  return canvasRef
}

const animationTimestamp = new AnimationTimestamp()
const points = [
  new Point({ x: 0, y: 30, animationTimestamp }),
  new Point({ x: 100, y: 60, animationTimestamp }),
  new Point({ x: 200, y: 0, animationTimestamp }),
  new Point({ x: 300, y: 50, animationTimestamp }),
  new Point({ x: 400, y: 30, animationTimestamp }),
]
const wave = new Wave({ color: '#ffffff', height: 300, width: 400, points })
const draw = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  wave.draw(ctx)
}
export default function Home() {
  const canvasRef = useCanvas(draw, animationTimestamp)
  return (
    <header>
      <canvas ref={canvasRef} className="w-full h-[100px]"></canvas>
    </header>
  )
}
