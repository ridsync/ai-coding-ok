"use client"

import { Card } from "@/components/ui/card"
import UsersIcon from "@/components/icons/UsersIcon"
import EyeIcon from "@/components/icons/EyeIcon"
import DollarSignIcon from "@/components/icons/DollarSignIcon"
import CalendarIcon from "@/components/icons/CalendarIcon"
import TrendingUpIcon from "@/components/icons/TrendingUpIcon"
import PlusIcon from "@/components/icons/PlusIcon"

interface StatCardProps {
  title: string
  value: string
  growth: string
  icon: string
}

const iconMap = {
  users: UsersIcon,
  eye: EyeIcon,
  dollar: DollarSignIcon,
  calendar: CalendarIcon,
}

const growthIconMap = {
  "+": TrendingUpIcon,
  "3": PlusIcon,
}

export function StatCard({ title, value, growth, icon }: StatCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap]
  const isGrowthPercentage = growth.startsWith('+') && growth.includes('%')
  const GrowthIcon = isGrowthPercentage ? TrendingUpIcon : PlusIcon

  return (
    <Card className="p-6 bg-surface-dark border-success/20 shadow-lg shadow-success/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-text-secondary-dark">{title}</h3>
        {IconComponent && (
          <IconComponent width={20} height={20} color="#10B981" />
        )}
      </div>
      <div className="space-y-2">
        <p className="text-2xl font-bold text-white">{value}</p>
        <div className="flex items-center gap-2">
          <GrowthIcon width={16} height={16} color="#10B981" />
          <span className="text-sm font-medium text-success">{growth}</span>
        </div>
      </div>
    </Card>
  )
}