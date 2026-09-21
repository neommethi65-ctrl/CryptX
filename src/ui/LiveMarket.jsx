import { liveMarketData } from '../data/transactionData'

function LiveMarket() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <div className="text-sm text-gray-500 mb-4">Live Market</div>

      <div className="flex flex-col gap-3">
        {liveMarketData.map((coin) => (
          <div key={coin.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100"></div>
              <div className="text-sm font-medium text-gray-900">{coin.coin}</div>
              <span className={`text-xs font-medium ${coin.up ? 'text-green-500' : 'text-red-500'}`}>
                {coin.change}
              </span>
            </div>
            <div className="text-sm text-gray-500">{coin.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LiveMarket