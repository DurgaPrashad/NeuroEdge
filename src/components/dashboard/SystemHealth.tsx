import type React from "react"
import { Server, Cloud } from "lucide-react"

type SystemHealthProps = {}

const SystemHealth: React.FC<SystemHealthProps> = () => {
  const resources = [
    { name: "CPU Usage", value: 45, color: "bg-blue-500" },
    { name: "Memory", value: 72, color: "bg-blue-500" },
    { name: "Network", value: 93, color: "bg-green-500" },
    { name: "Storage", value: 38, color: "bg-blue-500" },
  ]

  return (
    <div className="card h-full">
      <h2 className="mb-4 text-lg font-semibold">System Health</h2>

      <div className="space-y-4">
        {resources.map((resource) => (
          <div key={resource.name} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">{resource.name}</span>
              <span className="text-sm font-medium">{resource.value}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div className={`h-full rounded-full ${resource.color}`} style={{ width: `${resource.value}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="p-3 text-center bg-gray-100 dark:bg-gray-800 rounded-lg">
          <Server className="mx-auto mb-1 text-blue-500" size={20} />
          <div className="text-sm font-medium">5 Gateways</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">All Online</div>
        </div>
        <div className="p-3 text-center bg-gray-100 dark:bg-gray-800 rounded-lg">
          <Cloud className="mx-auto mb-1 text-blue-500" size={20} />
          <div className="text-sm font-medium">3 Clouds</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">2 Syncing</div>
        </div>
      </div>
    </div>
  )
}

export default SystemHealth

