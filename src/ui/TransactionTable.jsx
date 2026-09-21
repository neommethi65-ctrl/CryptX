import transactionData from '../data/transactionData'

function TransactionTable() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <div className="text-sm text-gray-500 mb-4">Transactions</div>

      <div className="flex flex-col gap-3">
        {transactionData.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold ${tx.color}`}>
                {tx.coin[0]}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">{tx.coin}</div>
                <div className="text-xs text-gray-400">{tx.date}</div>
              </div>
            </div>
            <div className={`text-sm font-semibold ${tx.color}`}>{tx.amount}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionTable
