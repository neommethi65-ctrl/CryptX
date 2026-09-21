function ChartVisual() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm flex-1">
      <div className="text-sm text-gray-500 mb-4">BTC Prices</div>

      <div className="relative h-40">
        {/* the highlighted price pill */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-1 bg-purple-500 text-white text-xs px-2 py-1 rounded-md">
          $18,291
        </div>

        {/* the wavy line itself */}
        <svg viewBox="0 0 300 120" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,80 C40,20 60,20 100,60 C140,100 160,100 200,40 C230,0 260,10 300,50"
            fill="none"
            stroke="#a855f7"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  )
}

export default ChartVisual