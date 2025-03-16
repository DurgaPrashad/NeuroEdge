"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import "leaflet/dist/leaflet.css"

interface MapViewProps {
  center?: [number, number]
  zoom?: number
}

const MapView: React.FC<MapViewProps> = ({
  center = [37.7749, -122.4194], // San Francisco by default
  zoom = 12,
}) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && mapRef.current && !mapInstanceRef.current) {
      // Dynamically import Leaflet to avoid SSR issues
      import("leaflet").then((L) => {
        // Fix for marker icons in production
        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        })

        // Create map instance
        const map = L.map(mapRef.current).setView(center, zoom)

        // Add dark theme tile layer
        L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        }).addTo(map)

        // Sample device data
        const devices = [
          { id: 1, name: "IoT Sensor Alpha", lat: center[0] - 0.02, lng: center[1] - 0.03, status: "online" },
          { id: 2, name: "Street Camera Beta", lat: center[0] + 0.01, lng: center[1] + 0.02, status: "online" },
          { id: 3, name: "Traffic Monitor Gamma", lat: center[0] + 0.03, lng: center[1] - 0.01, status: "warning" },
          { id: 4, name: "Environment Sensor Delta", lat: center[0] - 0.01, lng: center[1] + 0.04, status: "offline" },
          { id: 5, name: "Smart Light Epsilon", lat: center[0] - 0.03, lng: center[1] - 0.02, status: "online" },
        ]

        // Add markers for each device
        devices.forEach((device) => {
          const markerColor =
            device.status === "online"
              ? "#10B981" // Green
              : device.status === "warning"
                ? "#F59E0B" // Amber
                : "#EF4444" // Red

          const markerIcon = L.divIcon({
            className: "custom-div-icon",
            html: `<div style="background-color: ${markerColor}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>`,
            iconSize: [12, 12],
            iconAnchor: [6, 6],
          })

          const marker = L.marker([device.lat, device.lng], { icon: markerIcon }).addTo(map)

          marker.bindPopup(`
            <div style="min-width: 200px;">
              <h3 style="font-weight: bold; margin-bottom: 5px;">${device.name}</h3>
              <p style="margin: 0; color: ${markerColor}; text-transform: capitalize;">${device.status}</p>
              <p style="margin: 5px 0 0;">Lat: ${device.lat.toFixed(4)}, Lng: ${device.lng.toFixed(4)}</p>
            </div>
          `)
        })

        mapInstanceRef.current = map
      })
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [center, zoom])

  return <div ref={mapRef} className="w-full h-full rounded-lg" />
}

export default MapView

