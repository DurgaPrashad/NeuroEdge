import type React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface ActivityChartProps {
  data: Array<{ time: string; value: number }>
  color?: string
}

const ActivityChart: React.FC<ActivityChartProps> = ({ data, color = "#3B82F6" }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.2} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(107, 114, 128, 0.2)" />
        <XAxis
          dataKey="time"
          tick={{ fontSize: 12, fill: "rgba(107, 114, 128, 0.8)" }}
          axisLine={{ stroke: "rgba(107, 114, 128, 0.2)" }}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 12, fill: "rgba(107, 114, 128, 0.8)" }}
          axisLine={{ stroke: "rgba(107, 114, 128, 0.2)" }}
          tickLine={false}
          domain={[0, "dataMax + 20"]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(30, 41, 59, 0.9)",
            border: "none",
            borderRadius: "0.5rem",
            padding: "0.75rem",
            color: "white",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
          itemStyle={{ color: "white" }}
          labelStyle={{ marginBottom: "0.5rem", fontWeight: "bold" }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          dot={{ r: 3, fill: color, strokeWidth: 0 }}
          activeDot={{ r: 5, strokeWidth: 0 }}
          fillOpacity={1}
          fill="url(#colorValue)"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default ActivityChart

