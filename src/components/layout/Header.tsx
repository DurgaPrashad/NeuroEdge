"use client"

import React from "react"
import Link from "next/link"
import { Bell, Search, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

interface HeaderProps {
  notifications?: number
}

const Header: React.FC<HeaderProps> = ({ notifications = 0 }) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // After mounting, we can access the theme
  React.useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 border-b bg-background dark:bg-background-dark border-gray-200 dark:border-gray-800">
      <div className="flex items-center">
        <Link href="/" className="flex items-center mr-8">
          <div className="flex items-center justify-center w-8 h-8 mr-2 text-white bg-blue-500 rounded">
            <span className="text-xs font-bold">N</span>
          </div>
          <span className="text-xl font-semibold">NeuroEdge</span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <NavLink href="/dashboard" label="Dashboard" />
          <NavLink href="/analytics" label="Analytics" />
          <NavLink href="/devices" label="Devices" />
          <NavLink href="/settings" label="Settings" />
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        {mounted && (
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}

        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Search">
          <Search size={20} />
        </button>

        <div className="relative">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Notifications">
            <Bell size={20} />
            {notifications > 0 && (
              <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                {notifications > 9 ? "9+" : notifications}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

interface NavLinkProps {
  href: string
  label: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  const isActive = typeof window !== "undefined" && window.location.pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={`py-2 border-b-2 ${
        isActive
          ? "border-blue-500 text-blue-500"
          : "border-transparent hover:border-gray-300 dark:hover:border-gray-700"
      }`}
    >
      {label}
    </Link>
  )
}

export default Header

