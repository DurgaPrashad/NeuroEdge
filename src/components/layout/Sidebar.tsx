"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  BarChart2,
  Cpu,
  Settings,
  Users,
  Map,
  Bell,
  HelpCircle,
  ChevronRight,
  ChevronDown,
} from "lucide-react"

interface SidebarProps {
  collapsed?: boolean
  onToggle?: () => void
}

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  href: string
  active?: boolean
  hasSubmenu?: boolean
  expanded?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed = false, onToggle }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    devices: false,
    settings: false,
  })

  const toggleItem = (key: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white dark:bg-background-dark border-r border-gray-200 dark:border-gray-800 transition-all duration-300 z-20 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-2 space-y-1">
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              label="Dashboard"
              href="/dashboard"
              active={true}
              collapsed={collapsed}
            />

            <SidebarItem icon={<BarChart2 size={20} />} label="Analytics" href="/analytics" collapsed={collapsed} />

            <SidebarItem
              icon={<Cpu size={20} />}
              label="Devices"
              href="/devices"
              hasSubmenu={true}
              expanded={expandedItems.devices}
              onClick={() => toggleItem("devices")}
              collapsed={collapsed}
            >
              {!collapsed && expandedItems.devices && (
                <div className="pl-10 mt-1 space-y-1">
                  <SubMenuItem label="All Devices" href="/devices" />
                  <SubMenuItem label="Sensors" href="/devices/sensors" />
                  <SubMenuItem label="Cameras" href="/devices/cameras" />
                  <SubMenuItem label="Gateways" href="/devices/gateways" />
                </div>
              )}
            </SidebarItem>

            <SidebarItem icon={<Map size={20} />} label="Map View" href="/map" collapsed={collapsed} />

            <SidebarItem icon={<Bell size={20} />} label="Alerts" href="/alerts" collapsed={collapsed} />

            <SidebarItem
              icon={<Settings size={20} />}
              label="Settings"
              href="/settings"
              hasSubmenu={true}
              expanded={expandedItems.settings}
              onClick={() => toggleItem("settings")}
              collapsed={collapsed}
            >
              {!collapsed && expandedItems.settings && (
                <div className="pl-10 mt-1 space-y-1">
                  <SubMenuItem label="General" href="/settings" />
                  <SubMenuItem label="Security" href="/settings/security" />
                  <SubMenuItem label="Notifications" href="/settings/notifications" />
                  <SubMenuItem label="API Keys" href="/settings/api-keys" />
                </div>
              )}
            </SidebarItem>

            <SidebarItem icon={<Users size={20} />} label="Team" href="/team" collapsed={collapsed} />
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <SidebarItem icon={<HelpCircle size={20} />} label="Help & Support" href="/support" collapsed={collapsed} />
        </div>
      </div>
    </aside>
  )
}

const SidebarItem: React.FC<SidebarItemProps & { collapsed?: boolean }> = ({
  icon,
  label,
  href,
  active = false,
  hasSubmenu = false,
  expanded = false,
  onClick,
  children,
  collapsed = false,
}) => {
  return (
    <div>
      <Link
        href={hasSubmenu ? "#" : href}
        onClick={hasSubmenu ? onClick : undefined}
        className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
          active
            ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
            : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        } ${hasSubmenu ? "cursor-pointer" : ""}`}
      >
        <span className="mr-3 text-gray-500 dark:text-gray-400">{icon}</span>
        {!collapsed && (
          <>
            <span className="flex-1">{label}</span>
            {hasSubmenu && (expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
          </>
        )}
      </Link>
      {children}
    </div>
  )
}

const SubMenuItem: React.FC<{ label: string; href: string }> = ({ label, href }) => {
  return (
    <Link
      href={href}
      className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
    >
      {label}
    </Link>
  )
}

export default Sidebar

