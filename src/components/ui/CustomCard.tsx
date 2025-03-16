import type React from "react"
import { MoreVertical } from "lucide-react"

interface CustomCardProps {
  title?: string
  subtitle?: string
  icon?: React.ReactNode
  actions?: React.ReactNode
  className?: string
  children: React.ReactNode
}

const CustomCard: React.FC<CustomCardProps> = ({ title, subtitle, icon, actions, className = "", children }) => {
  return (
    <div className={`card ${className}`}>
      {(title || subtitle || icon || actions) && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {icon && <div className="mr-3">{icon}</div>}
            <div>
              {title && <h3 className="text-lg font-semibold">{title}</h3>}
              {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
            </div>
          </div>

          {actions ? (
            actions
          ) : (
            <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <MoreVertical size={18} />
            </button>
          )}
        </div>
      )}

      {children}
    </div>
  )
}

export default CustomCard

