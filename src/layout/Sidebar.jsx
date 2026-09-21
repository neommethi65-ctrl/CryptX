function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 h-screen bg-white border-r border-gray-200 flex-col p-6">
      <div className="text-xl font-bold text-gray-900 mb-8">CryptX</div>

      <nav className="flex flex-col gap-2">
        <a href="#" className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium">
          Overview
        </a>
        <a href="#" className="px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-50">
          Analytics
        </a>
        <a href="#" className="px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-50">
          Transactions
        </a>
        <a href="#" className="px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-50">
          Wallet
        </a>
        <a href="#" className="px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-50">
          Settings
        </a>
      </nav>
    </aside>
  )
}

export default Sidebar