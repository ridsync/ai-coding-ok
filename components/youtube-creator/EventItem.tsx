"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ClockIcon from "@/components/icons/ClockIcon"

interface EventItemProps {
  title: string
  status: 'LIVE' | '예정'
  time: string
}

export function EventItem({ title, status, time }: EventItemProps) {
  return (
    <Card className="p-4 bg-surface-dark border-success/20">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-white">{title}</h4>
          <Badge 
            variant={status === 'LIVE' ? 'destructive' : 'secondary'}
            className={status === 'LIVE' 
              ? 'bg-red-500 text-white text-xs font-bold' 
              : 'bg-success text-black text-xs font-bold'
            }
          >
            {status}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon width={16} height={16} color="#64748B" />
          <span className="text-xs text-text-secondary-dark">{time}</span>
        </div>
      </div>
    </Card>
  )
}