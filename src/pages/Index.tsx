"use client"

import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"
import Dashboard from "../components/dashboard/Dashboard"

const Index: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background-dark">
      <Helmet>
        <title>NeuroEdge - AI-Powered IoT & Geospatial Intelligence Platform</title>
      </Helmet>

      <Header notifications={3} />

      <div className="flex flex-1">
        <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />

        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default Index

