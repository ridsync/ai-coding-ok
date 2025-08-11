"use client"

import { Card } from "@/components/ui/card"
import UserPlusIcon from "@/components/icons/UserPlusIcon"
import CalendarCheckIcon from "@/components/icons/CalendarCheckIcon"
import ShoppingBagIcon from "@/components/icons/ShoppingBagIcon"

interface ActivityItemProps {
  icon: string
  title: string
  timestamp: string
}

const iconMap = {
  userPlus: UserPlusIcon,
  calendarCheck: CalendarCheckIcon,
  shoppingBag: ShoppingBagIcon,
}

export function ActivityItem({ icon, title, timestamp }: ActivityItemProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap]

  return (
    <Card className="p-4 bg-surface-dark border-success/20">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          {IconComponent && (
            <IconComponent width={20} height={20} color="#10B981" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white truncate">{title}</p>
          <p className="text-xs text-text-secondary-dark mt-1">{timestamp}</p>
        </div>
      </div>
    </Card>
  )
}