import { useEffect, useState } from 'react'

export type Countdown = {
  days: number
  hours: number
  minutes: number
  seconds: number
  completed: boolean
}

function compute(target: Date): Countdown {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, completed: true }
  }
  const totalSeconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    completed: false,
  }
}

export function useCountdown(isoDate: string): Countdown {
  const target = new Date(isoDate)
  const [value, setValue] = useState<Countdown>(() => compute(target))

  useEffect(() => {
    const tick = () => setValue(compute(target))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [isoDate])

  return value
}
