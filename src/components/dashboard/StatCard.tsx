import type React from "react"
import { ArrowUp, ArrowDown } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  icon?: React.ReactNode
  iconBg?: string
  change?: number
  changeLabel?: string
  valueClassName?: string
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  iconBg = "bg-blue-100 dark:bg-blue-900/20",
  change,
  changeLabel = "vs last period",
  valueClassName = "",
}) => {
  const isPositiveChange = change && change > 0
  const isNegativeChange = change && change < 0

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        {icon && <div className={`p-2 rounded-lg ${iconBg}`}>{icon}</div>}
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className={`text-2xl font-bold ${valueClassName}`}>{value}</p>

          {typeof change !== "undefined" && (
            <div className="flex items-center mt-1 text-sm">
              {isPositiveChange && (
                <span className="flex items-center text-green-500">
                  <ArrowUp size={16} className="mr-1" />
                  {Math.abs(change)}%
                </span>
              )}

              {isNegativeChange && (
                <span className="flex items-center text-red-500">
                  <ArrowDown size={16} className="mr-1" />
                  {Math.abs(change)}%
                </span>
              )}

              {change === 0 && <span className="text-gray-500">0%</span>}

              <span className="ml-1 text-gray-500 dark:text-gray-400">{changeLabel}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StatCard

