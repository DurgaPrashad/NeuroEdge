"use client"

import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"
import CustomCard from "../components/ui/CustomCard"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const Analytics: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  // Sample data for charts
  const deviceTypeData = [
    { name: "Sensors", value: 45 },
    { name: "Cameras", value: 25 },
    { name: "Gateways", value: 15 },
    { name: "Controllers", value: 10 },
    { name: "Others", value: 5 },
  ]

  const performanceTrendData = [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 59 },
    { month: "Mar", value: 80 },
    { month: "Apr", value: 81 },
    { month: "May", value: 56 },
    { month: "Jun", value: 55 },
    { month: "Jul", value: 40 },
  ]

  const resourceUsageData = [
    { day: "Mon", value: 4000 },
    { day: "Tue", value: 3000 },
    { day: "Wed", value: 2000 },
    { day: "Thu", value: 2780 },
    { day: "Fri", value: 1890 },
    { day: "Sat", value: 2390 },
    { day: "Sun", value: 3490 },
  ]

  const dataTransferData = generateTimeSeriesData(24)
  const powerConsumptionData = generateTimeSeriesData(24)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background-dark">
      <Helmet>
        <title>Analytics - NeuroEdge</title>
      </Helmet>

      <Header />

      <div className="flex flex-1">
        <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />

        <main className={`flex-1 p-6 transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <CustomCard title="Device Types" className="lg:col-span-1">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart layout="vertical" data={deviceTypeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" domain={[0, 60]} />
                    <YAxis dataKey="name" type="category" width={80} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3B82F6" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CustomCard>

            <CustomCard title="Performance Trend" className="lg:col-span-1">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceTrendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CustomCard>

            <CustomCard title="Resource Usage" className="lg:col-span-1">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={resourceUsageData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#8B5CF6" fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CustomCard>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2">
            <CustomCard title="Monthly Data Transfer" subtitle="Data processed through edge devices">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataTransferData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="time" />
                    <YAxis domain={[0, 120]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8B5CF6" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CustomCard>

            <CustomCard title="Power Consumption" subtitle="Energy usage by connected devices">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={powerConsumptionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="time" />
                    <YAxis domain={[0, 120]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CustomCard>
          </div>
        </main>
      </div>
    </div>
  )
}

// Helper function to generate time series data
function generateTimeSeriesData(hours: number) {
  const data = []
  let value = 30
  const now = new Date()

  for (let i = 0; i < hours; i++) {
    const time = new Date(now.getTime() - (hours - i) * 60 * 60 * 1000)

    // Generate a somewhat realistic pattern with some randomness
    value = Math.max(10, Math.min(120, value + (Math.random() - 0.5) * 30))

    data.push({
      time: time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      value: Math.round(value),
    })
  }

  return data
}

export default Analytics

