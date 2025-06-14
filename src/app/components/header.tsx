'use client'

import { FC, useEffect, useRef } from 'react'
import { AnimationTimestamp } from '../../../components/wave/animation-timestamp'
import { Point } from '../../../components/wave/point'
import { Wave } from '../../../components/wave/wave'

const useCanvas = (
  draw: (ctx: CanvasRenderingContext2D) => void,
  resizeWIdth: (ctx: CanvasRenderingContext2D) => void,
  animationTimestamp: AnimationTimestamp
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    if (!canvasRef.current || !window) return
    const canvas = canvasRef.current
    canvas.height = 100
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('ANY 2D CONTEXT FOUND IN CANVAS')
    const resizeCanvasWidth = () => {
      canvas.width = window.innerWidth
      resizeWIdth(ctx)
    }
    resizeCanvasWidth()
    window.addEventListener('resize', resizeCanvasWidth)
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
  }, [animationTimestamp, draw, resizeWIdth])
  return canvasRef
}

const Header: FC = () => {
  const animationTimestamp = new AnimationTimestamp()
  const points = [
    new Point({ config: { x: 0, y: 30, gap: 25, animationTimestamp } }),
    new Point({ config: { x: 120, y: 60, gap: 20, animationTimestamp } }),
    new Point({ config: { x: 250, y: 15, gap: 10, animationTimestamp } }),
    new Point({ config: { x: 375, y: 50, gap: 30, animationTimestamp } }),
    new Point({ config: { x: 530, y: 10, gap: 40, animationTimestamp } }),
    new Point({ config: { x: 680, y: 50, gap: 60, animationTimestamp } }),
    new Point({ config: { x: 850, y: 20, gap: 80, animationTimestamp } }),
    new Point({ config: { x: 920, y: 30, gap: 50, animationTimestamp } }),
  ]
  const wave = new Wave({ color: '#ffffff', height: 300, points })
  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    wave.draw(ctx)
  }

  const canvasRef = useCanvas(draw, wave.resize, animationTimestamp)

  return (
    <header>
      <canvas ref={canvasRef} className="w-full h-[100px]"></canvas>
    </header>
  )
}

export default Header
