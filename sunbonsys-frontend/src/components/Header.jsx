import { Menu, Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative flex items-center">
              <Zap className="h-8 w-8 text-blue-600 mr-2" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sunbonsys
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">About</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Products</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact</a>
            </div>
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden text-gray-700 hover:text-gray-900 p-2">
            <Menu className="h-6 w-6" />
          </button>

        </div>
      </nav>
    </header>
  );
}
