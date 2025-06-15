'use client'

import { FC, useEffect, useRef } from 'react'
import { AnimationTimestamp } from '../../wave/animation-timestamp'
import { Point } from '../../wave/point'
import { Wave } from '../../wave/wave'
import { lgColorsConfig } from '../../../lg-colors-config'

const useCanvas = (
  draw: (ctx: CanvasRenderingContext2D) => void,
  resizeWIdth: (ctx: CanvasRenderingContext2D) => void,
  animationTimestamp: AnimationTimestamp,
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    if (!canvasRef.current || !window) return
    const canvas = canvasRef.current
    canvas.height = 700
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

const waveHeight = 700
const bandHeight = 175 // 700px ÷ 4 bandes (environ)

// Helper to create a wave with evenly spaced points
const createWave = ({
  numPoints,
  waveColor,
  waveHeight,
  bandHeight,
  animationTimestamp,
  minGap,
  maxGap,
}: {
  numPoints: number
  waveColor: string
  waveHeight: number
  bandHeight: number
  animationTimestamp: AnimationTimestamp
  minGap: number
  maxGap: number
}): Wave => {
  const spacing = 800 / (numPoints - 1)
  const points = Array.from({ length: numPoints }, (_, i) => {
    const x = i * spacing
    const y = waveHeight - bandHeight + (Math.random() * 40 - 20)
    const gap = minGap + Math.random() * (maxGap - minGap)
    return new Point({
      config: { x, y, gap, animationTimestamp },
    })
  })
  return new Wave({ color: waveColor, height: waveHeight, points })
}

const Header: FC = () => {
  const animationTimestamp = new AnimationTimestamp()

  const waves = [
    createWave({
      numPoints: 8,
      waveColor: lgColorsConfig.colors['lg-pink'][800],
      waveHeight,
      bandHeight: bandHeight * 3.5,
      animationTimestamp,
      minGap: 40,
      maxGap: 90,
    }),
    createWave({
      numPoints: 7,
      waveColor: lgColorsConfig.colors['lg-pink'][700],
      waveHeight,
      bandHeight: bandHeight * 3,
      animationTimestamp,
      minGap: 20,
      maxGap: 55,
    }),
    createWave({
      numPoints: 8,
      waveColor: lgColorsConfig.colors['lg-pink'][600],
      waveHeight,
      bandHeight: bandHeight * 2.6,
      animationTimestamp,
      minGap: 20,
      maxGap: 60,
    }),
    createWave({
      numPoints: 10,
      waveColor: lgColorsConfig.colors['lg-pink'][500],
      waveHeight,
      bandHeight: bandHeight * 2.1,
      animationTimestamp,
      minGap: 30,
      maxGap: 50,
    }),
    createWave({
      numPoints: 10,
      waveColor: lgColorsConfig.colors['lg-dark-purple'][500],
      waveHeight,
      bandHeight: bandHeight * 1.5,
      animationTimestamp,
      minGap: 30,
      maxGap: 60,
    }),
  ]

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    waves.forEach((wave) => wave.draw(ctx))
  }

  const canvasRef = useCanvas(
    draw,
    (ctx) => {
      waves.forEach((wave) => wave.resize(ctx))
    },
    animationTimestamp,
  )

  return (
    <header>
      <canvas ref={canvasRef} className="h-[700px] w-full"></canvas>
    </header>
  )
}

export default Header
