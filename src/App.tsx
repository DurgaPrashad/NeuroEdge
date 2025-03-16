import type React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "next-themes"
import Index from "./pages/Index"
import Analytics from "./pages/Analytics"
import Devices from "./pages/Devices"
import Settings from "./pages/Settings"

const App: React.FC = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/devices/sensors" element={<Devices />} />
          <Route path="/devices/cameras" element={<Devices />} />
          <Route path="/devices/gateways" element={<Devices />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/security" element={<Settings />} />
          <Route path="/settings/notifications" element={<Settings />} />
          <Route path="/settings/api-keys" element={<Settings />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

