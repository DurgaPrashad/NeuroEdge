"use client"

import type React from "react"
import { useState } from "react"
import { Helmet } from "react-helmet"
import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"
import CustomCard from "../components/ui/CustomCard"
import { Save, User, Lock, Bell, Key, Globe, Database, Cloud, RefreshCw } from "lucide-react"

const Settings: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState("general")

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background-dark">
      <Helmet>
        <title>Settings - NeuroEdge</title>
      </Helmet>

      <Header />

      <div className="flex flex-1">
        <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />

        <main className={`flex-1 p-6 transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
          <h1 className="mb-6 text-2xl font-bold">Settings</h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="sticky top-20">
                <CustomCard>
                  <nav className="space-y-1">
                    <SettingsNavItem
                      icon={<Globe size={18} />}
                      label="General"
                      active={activeTab === "general"}
                      onClick={() => setActiveTab("general")}
                    />
                    <SettingsNavItem
                      icon={<User size={18} />}
                      label="Account"
                      active={activeTab === "account"}
                      onClick={() => setActiveTab("account")}
                    />
                    <SettingsNavItem
                      icon={<Lock size={18} />}
                      label="Security"
                      active={activeTab === "security"}
                      onClick={() => setActiveTab("security")}
                    />
                    <SettingsNavItem
                      icon={<Bell size={18} />}
                      label="Notifications"
                      active={activeTab === "notifications"}
                      onClick={() => setActiveTab("notifications")}
                    />
                    <SettingsNavItem
                      icon={<Database size={18} />}
                      label="Data Storage"
                      active={activeTab === "storage"}
                      onClick={() => setActiveTab("storage")}
                    />
                    <SettingsNavItem
                      icon={<Cloud size={18} />}
                      label="Integrations"
                      active={activeTab === "integrations"}
                      onClick={() => setActiveTab("integrations")}
                    />
                    <SettingsNavItem
                      icon={<Key size={18} />}
                      label="API Keys"
                      active={activeTab === "api-keys"}
                      onClick={() => setActiveTab("api-keys")}
                    />
                  </nav>
                </CustomCard>
              </div>
            </div>

            <div className="md:col-span-3">
              {activeTab === "general" && <GeneralSettings />}
              {activeTab === "account" && <AccountSettings />}
              {activeTab === "security" && <SecuritySettings />}
              {activeTab === "notifications" && <NotificationSettings />}
              {activeTab === "storage" && <StorageSettings />}
              {activeTab === "integrations" && <IntegrationSettings />}
              {activeTab === "api-keys" && <ApiKeySettings />}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

interface SettingsNavItemProps {
  icon: React.ReactNode
  label: string
  active: boolean
  onClick: () => void
}

const SettingsNavItem: React.FC<SettingsNavItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <button
      className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md ${
        active
          ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
          : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
      }`}
      onClick={onClick}
    >
      <span className="mr-3 text-gray-500 dark:text-gray-400">{icon}</span>
      {label}
    </button>
  )
}

const GeneralSettings: React.FC = () => {
  return (
    <CustomCard title="General Settings">
      <div className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium">Platform Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800"
            defaultValue="NeuroEdge"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Time Zone</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800">
            <option>UTC (Coordinated Universal Time)</option>
            <option>America/New_York (Eastern Time)</option>
            <option>America/Chicago (Central Time)</option>
            <option>America/Denver (Mountain Time)</option>
            <option>America/Los_Angeles (Pacific Time)</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Date Format</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800">
            <option>MM/DD/YYYY</option>
            <option>DD/MM/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Language</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
            <option>Japanese</option>
          </select>
        </div>

        <div className="flex items-center justify-end">
          <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
            <Save size={16} className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </CustomCard>
  )
}

const AccountSettings: React.FC = () => {
  return (
    <CustomCard title="Account Settings">
      <div className="space-y-6">
        <div className="flex items-center">
          <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
            <img src="/placeholder.svg?height=64&width=64" alt="Profile" className="object-cover w-full h-full" />
          </div>
          <div>
            <button className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
              Change Avatar
            </button>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">JPG, GIF or PNG. Max size 2MB.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium">First Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800"
              defaultValue="John"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Last Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800"
              defaultValue="Doe"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800"
            defaultValue="john.doe@example.com"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Job Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800"
            defaultValue="System Administrator"
          />
        </div>

        <div className="flex items-center justify-end">
          <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
            <Save size={16} className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </CustomCard>
  )
}

const SecuritySettings: React.FC = () => {
  return (
    <CustomCard title="Security Settings">
      <div className="space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-medium">Change Password</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Current Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">New Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Confirm New Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="mb-4 text-lg font-medium">Two-Factor Authentication</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Two-factor authentication is enabled</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your account is secured with two-factor authentication.
              </p>
            </div>
            <button className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
              Configure
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="mb-4 text-lg font-medium">Sessions</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-100 rounded-md dark:bg-gray-800">
              <div>
                <p className="font-medium">Current Session</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Last active: Just now</p>
              </div>
              <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full dark:bg-green-900/20 dark:text-green-400">
                Active
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-100 rounded-md dark:bg-gray-800">
              <div>
                <p className="font-medium">Chrome on Windows</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Last active: 2 days ago</p>
              </div>
              <button className="text-sm text-red-500 hover:text-red-600">Revoke</button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
            <Save size={16} className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </CustomCard>
  )
}

const NotificationSettings: React.FC = () => {
  return (
    <CustomCard title="Notification Settings">
      <div className="space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="email-alerts"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                defaultChecked
              />
              <label htmlFor="email-alerts" className="block ml-2 text-sm">
                System Alerts
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="email-reports"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                defaultChecked
              />
              <label htmlFor="email-reports" className="block ml-2 text-sm">
                Weekly Reports
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="email-updates"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="email-updates" className="block ml-2 text-sm">
                Product Updates
              </label>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="mb-4 text-lg font-medium">Push Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="push-alerts"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                defaultChecked
              />
              <label htmlFor="push-alerts" className="block ml-2 text-sm">
                Critical Alerts
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="push-warnings"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                defaultChecked
              />
              <label htmlFor="push-warnings" className="block ml-2 text-sm">
                Warning Notifications
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="push-info"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="push-info" className="block ml-2 text-sm">
                Informational Updates
              </label>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
            <Save size={16} className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </CustomCard>
  )
}

const StorageSettings: React.FC = () => {
  return (
    <CustomCard title="Data Storage Settings">
      <div className="space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-medium">Data Retention</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Sensor Data Retention</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800">
                <option>30 days</option>
                <option>60 days</option>
                <option>90 days</option>
                <option>180 days</option>
                <option>1 year</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Log Data Retention</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800">
                <option>7 days</option>
                <option>14 days</option>
                <option>30 days</option>
                <option>60 days</option>
                <option>90 days</option>
              </select>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="mb-4 text-lg font-medium">Data Backup</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Backup Frequency</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md dark:bg-gray-800">
              <div>
                <p className="font-medium">Last Backup</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Today, 03:45 AM</p>
              </div>
              <button className="flex items-center px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
                <RefreshCw size={14} className="mr-1" />
                Backup Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
            <Save size={16} className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </CustomCard>
  )
}

const IntegrationSettings: React.FC = () => {
  return (
    <CustomCard title="Integrations">
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md dark:bg-gray-800">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 mr-4 bg-blue-100 rounded-md dark:bg-blue-900/20">
              <Cloud className="text-blue-500" size={20} />
            </div>
            <div>
              <p className="font-medium">AWS IoT</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Connected</p>
            </div>
          </div>
          <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600">
            Configure
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md dark:bg-gray-800">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 mr-4 bg-green-100 rounded-md dark:bg-green-900/20">
              <Database className="text-green-500" size={20} />
            </div>
            <div>
              <p className="font-medium">MongoDB Atlas</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Connected</p>
            </div>
          </div>
          <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600">
            Configure
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md dark:bg-gray-800">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 mr-4 bg-purple-100 rounded-md dark:bg-purple-900/20">
              <svg className="w-5 h-5 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.091.035.185.058.279.058.195 0 .355-.175.355-.385 0-.205-.149-.367-.355-.367-.148 0-.276.079-.337.197l.001-.012zm-3.852.86c-.194 0-.351.169-.351.373 0 .206.157.374.351.374.194 0 .351-.168.351-.374 0-.204-.157-.373-.351-.373zm-6.595 1.186c-.194 0-.351.169-.351.373 0 .206.157.374.351.374.194 0 .351-.168.351-.374 0-.204-.157-.373-.351-.373zm10.615 1.568c-.194 0-.351.169-.351.373 0 .206.157.374.351.374.194 0 .351-.168.351-.374 0-.204-.157-.373-.351-.373zm-8.118 1.569c-.193 0-.351.169-.351.373 0 .206.158.374.351.374.194 0 .351-.168.351-.374 0-.204-.157-.373-.351-.373zm10.615 1.568c-.194 0-.351.169-.351.373 0 .206.157.374.351.374.194 0 .351-.168.351-.374 0-.204-.157-.373-.351-.373zm-8.117 1.568c-.194 0-.351.169-.351.373 0 .206.157.374.351.374.194 0 .351-.168.351-.374 0-.204-.157-.373-.351-.373zm-2.497 1.569c-.194 0-.351.169-.351.373 0 .206.157.374.351.374.194 0 .351-.168.351-.374 0-.204-.157-.373-.351-.373zm10.615 1.568c-.194 0-.351.169-.351.373 0 .206.157.374.351.374.194 0 .351-.168.351-.374 0-.204-.157-.373-.351-.373zm-8.118 1.569c-.193 0-.351.169-.351.373 0 .206.158.374.351.374.194 0 .351-.168.351-.374 0-.204-.157-.373-.351-.373zm-2.496 1.568c-.194 0-.351.169-.351.373 0 .206.157.374.351.374.194 0 .351-.168.351-.374 0-.204-.157-.373-.351-.373z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Kafka</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Connected</p>
            </div>
          </div>
          <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600">
            Configure
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md dark:bg-gray-800">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 mr-4 bg-red-100 rounded-md dark:bg-red-900/20">
              <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Grafana</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Not connected</p>
            </div>
          </div>
          <button className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Connect
          </button>
        </div>

        <div className="flex items-center justify-end">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Add Integration
          </button>
        </div>
      </div>
    </CustomCard>
  )
}

const ApiKeySettings: React.FC = () => {
  return (
    <CustomCard title="API Keys">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Your API Keys</h3>
          <button className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Generate New Key
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Key</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Created</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Last Used</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-4 text-sm">Production API Key</td>
                <td className="px-4 py-4 text-sm">
                  <code className="px-2 py-1 bg-gray-100 rounded dark:bg-gray-800">••••••••••••••••</code>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">2023-07-15</td>
                <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">Today</td>
                <td className="px-4 py-4 text-sm">
                  <button className="text-red-500 hover:text-red-600">Revoke</button>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-4 text-sm">Development API Key</td>
                <td className="px-4 py-4 text-sm">
                  <code className="px-2 py-1 bg-gray-100 rounded dark:bg-gray-800">••••••••••••••••</code>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">2023-08-22</td>
                <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">Yesterday</td>
                <td className="px-4 py-4 text-sm">
                  <button className="text-red-500 hover:text-red-600">Revoke</button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm">Testing API Key</td>
                <td className="px-4 py-4 text-sm">
                  <code className="px-2 py-1 bg-gray-100 rounded dark:bg-gray-800">••••••••••••••••</code>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">2023-09-10</td>
                <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">3 days ago</td>
                <td className="px-4 py-4 text-sm">
                  <button className="text-red-500 hover:text-red-600">Revoke</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-gray-100 rounded-md dark:bg-gray-800">
          <h4 className="mb-2 text-sm font-medium">API Documentation</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            View our comprehensive API documentation to learn how to integrate with the NeuroEdge platform.
          </p>
          <a href="#" className="inline-block mt-2 text-sm text-blue-500 hover:text-blue-600">
            View Documentation →
          </a>
        </div>
      </div>
    </CustomCard>
  )
}

export default Settings

