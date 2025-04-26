import type React from "react"
import StatCard from "./StatCard"
import ActivityChart from "./ActivityChart"
import SystemHealth from "./SystemHealth"
import MapView from "../map/MapView"
import { Server, Database, Cpu, Activity } from "lucide-react"

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Real-time overview of your IoT devices and analytics.</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Devices"
          value="128"
          icon={<Server className="text-blue-500" />}
          change={12}
          changeLabel="vs last week"
          iconBg="bg-blue-100 dark:bg-blue-900/20"
        />
        <StatCard
          title="Data Processed"
          value="1.4 TB"
          icon={<Database className="text-purple-500" />}
          change={8}
          changeLabel="vs last week"
          iconBg="bg-purple-100 dark:bg-purple-900/20"
        />
        <StatCard
          title="Edge Computing"
          value="98.2%"
          icon={<Cpu className="text-green-500" />}
          change={-2}
          changeLabel="vs last week"
          iconBg="bg-green-100 dark:bg-green-900/20"
        />
        <StatCard
          title="Network Status"
          value="Optimal"
          icon={<Activity className="text-blue-500" />}
          iconBg="bg-blue-100 dark:bg-blue-900/20"
          valueClassName="text-green-500"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="card">
            <h2 className="mb-1 text-lg font-semibold">System Activity</h2>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">Real-time monitoring of system performance</p>
            <div className="h-64">
              <ActivityChart data={generateActivityData()} color="#3B82F6" />
            </div>
          </div>
        </div>

        <div>
          <SystemHealth />
        </div>
      </div>

      {/* Map View */}
      <div>
        <div className="card">
          <h2 className="mb-4 text-lg font-semibold">Device Map</h2>
          <div className="h-96">
            <MapView />
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to generate sample activity data
const generateActivityData = () => {
  const hours = 24
  const data = []
  let value = 20

  for (let i = 0; i < hours; i++) {
    // Generate a somewhat realistic pattern with some randomness
    value = Math.max(10, Math.min(120, value + (Math.random() - 0.5) * 30))

    data.push({
      time: new Date(Date.now() - (hours - i) * 3600 * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      value: Math.round(value),
    })
  }

  return data
}

export default Dashboard

