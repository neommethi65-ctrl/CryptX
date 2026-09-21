import Sidebar from './layout/Sidebar'
import Header from './ui/Header'
import MetricCard from './ui/MetricCard'
import ChartVisual from './ui/ChartVisual'
import TransactionTable from './ui/TransactionTable'
import LiveMarket from './ui/LiveMarket'
function App() {
  return (
    <div className="flex m-4 bg-white rounded-2xl shadow-sm overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4 md:p-8 flex flex-col lg:flex-row gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MetricCard label="Total Profit" value="$40,291" change="5" color="bg-orange-400" />
            <MetricCard label="Market Cap" value="$18,291" change="5" color="bg-purple-500" />
            <MetricCard label="Total Loss" value="$8,291" change="5" color="bg-blue-500" />
            <MetricCard label="Holdings" value="$3,291" change="5" color="bg-green-500" />
          </div>
          <ChartVisual />
        </div>
       <div className="px-4 md:px-8 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
  <LiveMarket />
  <TransactionTable />
</div>
      </div>
    </div>
  )
}

export default App