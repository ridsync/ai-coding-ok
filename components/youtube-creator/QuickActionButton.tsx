"use client"

import { Button } from "@/components/ui/button"
import PlusCircleIcon from "@/components/icons/PlusCircleIcon"
import UsersManagementIcon from "@/components/icons/UsersManagementIcon"
import PackagePlusIcon from "@/components/icons/PackagePlusIcon"
import BarChartIcon from "@/components/icons/BarChartIcon"

interface QuickActionButtonProps {
  title: string
  icon: string
  gradient: string
  shadowColor: string
}

const iconMap = {
  plusCircle: PlusCircleIcon,
  usersManagement: UsersManagementIcon,
  packagePlus: PackagePlusIcon,
  barChart: BarChartIcon,
}

export function QuickActionButton({ title, icon, gradient, shadowColor }: QuickActionButtonProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap]

  return (
    <Button
      className="h-20 w-full rounded-xl border-0 text-black font-bold"
      style={{
        background: gradient,
        boxShadow: `0px 0px 15px ${shadowColor}`,
      }}
    >
      <div className="flex items-center gap-3">
        {IconComponent && (
          <IconComponent width={24} height={24} color="#000000" />
        )}
        <span>{title}</span>
      </div>
    </Button>
  )
}