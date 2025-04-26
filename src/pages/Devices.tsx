"use client"

import type React from "react"
import { useState } from "react"
import { Helmet } from "react-helmet"
import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"
import { Search, Filter, MoreVertical, CheckCircle, AlertTriangle, XCircle } from "lucide-react"

interface Device {
  id: string
  name: string
  type: string
  location: string
  status: "online" | "warning" | "offline"
  battery: number
  lastActive: string
}

const Devices: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  // Sample devices data
  const devices: Device[] = [
    {
      id: "1",
      name: "IoT Sensor Alpha",
      type: "Temperature Sensor",
      location: "Building A, Floor 1",
      status: "online",
      battery: 85,
      lastActive: "2 mins ago",
    },
    {
      id: "2",
      name: "Street Camera Beta",
      type: "CCTV Camera",
      location: "Main St. & 5th Ave",
      status: "online",
      battery: 92,
      lastActive: "5 mins ago",
    },
    {
      id: "3",
      name: "Traffic Monitor Gamma",
      type: "Traffic Sensor",
      location: "Highway 101, Mile 24",
      status: "warning",
      battery: 45,
      lastActive: "1 hour ago",
    },
    {
      id: "4",
      name: "Environment Sensor Delta",
      type: "Air Quality Monitor",
      location: "City Park",
      status: "offline",
      battery: 12,
      lastActive: "2 days ago",
    },
    {
      id: "5",
      name: "Smart Light Epsilon",
      type: "Street Lighting",
      location: "Downtown, Block C",
      status: "online",
      battery: 78,
      lastActive: "10 mins ago",
    },
    {
      id: "6",
      name: "Weather Station Zeta",
      type: "Weather Monitor",
      location: "Rooftop, Tower 3",
      status: "online",
      battery: 64,
      lastActive: "3 mins ago",
    },
  ]

  // Filter devices based on search query
  const filteredDevices = devices.filter(
    (device) =>
      device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      device.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      device.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background-dark">
      <Helmet>
        <title>Devices - NeuroEdge</title>
      </Helmet>

      <Header />

      <div className="flex flex-1">
        <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />

        <main className={`flex-1 p-6 transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Devices</h1>

            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search devices..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <button className="p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Filter size={18} />
              </button>

              <div className="flex border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                <button
                  className={`p-2 ${viewMode === "grid" ? "bg-blue-500 text-white" : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                  onClick={() => setViewMode("grid")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </button>
                <button
                  className={`p-2 ${viewMode === "list" ? "bg-blue-500 text-white" : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                  onClick={() => setViewMode("list")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredDevices.map((device) => (
                <DeviceCard key={device.id} device={device} />
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Type</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                      Location
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                      Battery
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                      Last Active
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDevices.map((device) => (
                    <tr key={device.id} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-4 text-sm">{device.name}</td>
                      <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">{device.type}</td>
                      <td className="px-4 py-4 text-sm">{device.location}</td>
                      <td className="px-4 py-4 text-sm">
                        <StatusBadge status={device.status} />
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <div className="w-32">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs">{device.battery}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div
                              className={`h-full rounded-full ${getBatteryColorClass(device.battery, device.status)}`}
                              style={{ width: `${device.battery}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">{device.lastActive}</td>
                      <td className="px-4 py-4 text-sm">
                        <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

interface DeviceCardProps {
  device: Device
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <StatusIcon status={device.status} />
          <div className="ml-3">
            <h3 className="text-lg font-semibold">{device.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{device.type}</p>
          </div>
        </div>
        <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
          <MoreVertical size={18} />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">Location</p>
          <p className="text-sm font-medium">{device.location}</p>
        </div>

        <div>
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">Status</p>
          <StatusBadge status={device.status} />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">Battery</p>
            <span className="text-sm font-medium">{device.battery}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
              className={`h-full rounded-full ${getBatteryColorClass(device.battery, device.status)}`}
              style={{ width: `${device.battery}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">Last Active</p>
          <p className="text-sm font-medium">{device.lastActive}</p>
        </div>
      </div>

      <button className="w-full py-2 mt-4 text-sm font-medium text-center text-white bg-blue-500 rounded-md hover:bg-blue-600">
        View Details
      </button>
    </div>
  )
}

const StatusIcon: React.FC<{ status: "online" | "warning" | "offline" }> = ({ status }) => {
  if (status === "online") {
    return <CheckCircle className="text-green-500" size={20} />
  } else if (status === "warning") {
    return <AlertTriangle className="text-amber-500" size={20} />
  } else {
    return <XCircle className="text-red-500" size={20} />
  }
}

const StatusBadge: React.FC<{ status: "online" | "warning" | "offline" }> = ({ status }) => {
  let bgColor = ""
  let textColor = ""
  let label = ""

  if (status === "online") {
    bgColor = "bg-green-100 dark:bg-green-900/20"
    textColor = "text-green-800 dark:text-green-400"
    label = "Online"
  } else if (status === "warning") {
    bgColor = "bg-amber-100 dark:bg-amber-900/20"
    textColor = "text-amber-800 dark:text-amber-400"
    label = "Warning"
  } else {
    bgColor = "bg-red-100 dark:bg-red-900/20"
    textColor = "text-red-800 dark:text-red-400"
    label = "Offline"
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
      <span
        className={`w-1.5 h-1.5 mr-1.5 rounded-full ${status === "online" ? "bg-green-500" : status === "warning" ? "bg-amber-500" : "bg-red-500"}`}
      ></span>
      {label}
    </span>
  )
}

function getBatteryColorClass(battery: number, status: "online" | "warning" | "offline"): string {
  if (status === "offline") return "bg-red-500"
  if (status === "warning") return "bg-amber-500"

  if (battery > 60) return "bg-green-500"
  if (battery > 30) return "bg-amber-500"
  return "bg-red-500"
}

export default Devices

