function MetricCard({ icon, color, value, change, label }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm w-48">
      <div className="flex items-center justify-between mb-2">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${color}`}>
          {icon}
        </div>
       <span className="text-green-500 text-sm font-medium">+{change}%</span>
      </div>
      <div className="text-xl font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  )
}

export default MetricCard