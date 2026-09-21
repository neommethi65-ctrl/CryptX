import { Bell, Settings } from 'lucide-react'
function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
      <input
        type="text"
        placeholder="Search or type a command"
        className="w-96 px-4 py-2 rounded-lg bg-gray-100 text-sm text-gray-600 outline-none"
      />

      <div className="flex items-center gap-4">
     <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
  <Bell size={16} className="text-gray-500" />
</button>
<button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
  <Settings size={16} className="text-gray-500" />
</button>
        <div className="w-9 h-9 rounded-full bg-gray-300"></div>
      </div>
    </header>
  )
}

export default Header