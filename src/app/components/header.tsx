'use client'

import { FC, useEffect, useRef } from 'react'
import { AnimationTimestamp } from '../../../components/wave/animation-timestamp'
import { Point } from '../../../components/wave/point'
import { Wave } from '../../../components/wave/wave'
import { lgColorsConfig } from '../../../lg-colors-config'

const useCanvas = (
  draw: (ctx: CanvasRenderingContext2D) => void,
  resizeWIdth: (ctx: CanvasRenderingContext2D) => void,
  animationTimestamp: AnimationTimestamp
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
const bandHeights = [
  bandHeight * 3.5,
  bandHeight * 3,
  bandHeight * 2.5,
  bandHeight * 2,
  bandHeight * 1.5,
]

const Header: FC = () => {
  const animationTimestamp = new AnimationTimestamp()

  const waves = [
    new Wave({
      color: lgColorsConfig.colors['lg-pink'][800],
      height: waveHeight,
      points: [
        new Point({
          config: {
            x: 0,
            y: waveHeight - bandHeights[0],
            gap: 40,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 100,
            y: waveHeight - bandHeights[0] + 20,
            gap: 30,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 200,
            y: waveHeight - bandHeights[0] - 20,
            gap: 50,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 300,
            y: waveHeight - bandHeights[0] + 10,
            gap: 40,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 400,
            y: waveHeight - bandHeights[0],
            gap: 60,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 500,
            y: waveHeight - bandHeights[0] + 20,
            gap: 40,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 600,
            y: waveHeight - bandHeights[0] - 10,
            gap: 30,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 700,
            y: waveHeight - bandHeights[0] + 20,
            gap: 40,
            animationTimestamp,
          },
        }),
      ],
    }),
    new Wave({
      color: lgColorsConfig.colors['lg-pink'][700],
      height: waveHeight,
      points: [
        new Point({
          config: {
            x: 0,
            y: waveHeight - bandHeights[1],
            gap: 40,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 100,
            y: waveHeight - bandHeights[1] + 20,
            gap: 30,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 200,
            y: waveHeight - bandHeights[1] - 20,
            gap: 50,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 300,
            y: waveHeight - bandHeights[1] + 10,
            gap: 40,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 400,
            y: waveHeight - bandHeights[1],
            gap: 60,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 500,
            y: waveHeight - bandHeights[1] + 20,
            gap: 40,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 600,
            y: waveHeight - bandHeights[1] - 10,
            gap: 30,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 700,
            y: waveHeight - bandHeights[1] + 20,
            gap: 40,
            animationTimestamp,
          },
        }),
      ],
    }),
    new Wave({
      color: lgColorsConfig.colors['lg-pink'][600],
      height: waveHeight,
      points: [
        new Point({
          config: {
            x: 0,
            y: waveHeight - bandHeights[2],
            gap: 40,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 100,
            y: waveHeight - bandHeights[2] + 20,
            gap: 30,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 200,
            y: waveHeight - bandHeights[2] - 20,
            gap: 50,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 300,
            y: waveHeight - bandHeights[2] + 10,
            gap: 40,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 400,
            y: waveHeight - bandHeights[2],
            gap: 60,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 500,
            y: waveHeight - bandHeights[2] + 20,
            gap: 40,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 600,
            y: waveHeight - bandHeights[2] - 10,
            gap: 30,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 700,
            y: waveHeight - bandHeights[2] + 20,
            gap: 40,
            animationTimestamp,
          },
        }),
      ],
    }),
    new Wave({
      color: lgColorsConfig.colors['lg-pink'][500],
      height: waveHeight,
      points: [
        new Point({
          config: {
            x: 0,
            y: waveHeight - bandHeights[3],
            gap: 40,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 100,
            y: waveHeight - bandHeights[3] + 20,
            gap: 30,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 200,
            y: waveHeight - bandHeights[3] - 20,
            gap: 50,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 300,
            y: waveHeight - bandHeights[3] + 10,
            gap: 40,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 400,
            y: waveHeight - bandHeights[3],
            gap: 60,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 500,
            y: waveHeight - bandHeights[3] + 20,
            gap: 40,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 600,
            y: waveHeight - bandHeights[3] - 10,
            gap: 30,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 700,
            y: waveHeight - bandHeights[3] + 20,
            gap: 40,
            animationTimestamp,
          },
        }),
      ],
    }),
    new Wave({
      color: lgColorsConfig.colors['lg-tar'][500], // couche supérieure sombre
      height: waveHeight,
      points: [
        new Point({
          config: {
            x: 0,
            y: waveHeight - bandHeights[4],
            gap: 40,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 100,
            y: waveHeight - bandHeights[4] + 20,
            gap: 30,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 200,
            y: waveHeight - bandHeights[4] - 20,
            gap: 50,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 300,
            y: waveHeight - bandHeights[4] + 10,
            gap: 40,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 400,
            y: waveHeight - bandHeights[4],
            gap: 60,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 500,
            y: waveHeight - bandHeights[4] + 20,
            gap: 40,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 600,
            y: waveHeight - bandHeights[4] - 10,
            gap: 30,
            animationTimestamp,
          },
        }),
        new Point({
          config: {
            x: 700,
            y: waveHeight - bandHeights[4] + 20,
            gap: 40,
            animationTimestamp,
          },
        }),
      ],
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
    animationTimestamp
  )

  return (
    <header>
      <canvas ref={canvasRef} className="w-full h-[700px]"></canvas>
    </header>
  )
}

export default Header
