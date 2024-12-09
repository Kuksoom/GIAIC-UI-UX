import { Mail, Phone, User, Heart, ChevronDown, ShoppingCart, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-purple-600 text-white">
      {/* Top Headline */}
      <div className="flex justify-between items-center px-4 py-2 text-sm">
        {/* Left Side: Contact Info */}
        <div className="flex space-x-4 ml-48">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-1" /> kulsoomabbas1551@gmail.com
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-1" /> (123) 456-7890
          </div>
        </div>
        {/* Right Side: Icons and Options */}
        <div className="flex space-x-4 items-center mr-40">
          <div className="flex items-center cursor-pointer">
            <User className="w-4 h-4 mr-1" /> Login
          </div>
          <div className="flex items-center cursor-pointer">
            <Heart className="w-4 h-4 mr-1" /> Wishlist
          </div>
          <div className="flex items-center cursor-pointer">
            English <ChevronDown className="w-4 h-4 ml-1" />
          </div>
          <div className="flex items-center cursor-pointer">
            USD <ChevronDown className="w-4 h-4 ml-1" />
          </div>
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-3 bg-white shadow">
        {/* Left: Logo */}
        <div className="text-3xl font-bold text-black ml-60">Hekto</div>

        {/* Center: Navigation Links */}
        <ul className="flex space-x-6 text-sm text-gray-600">
          <li className="cursor-pointer hover:text-purple-500">Home</li>
          <li className="cursor-pointer hover:text-purple-500">Pages</li>
          <li className="relative group cursor-pointer hover:text-purple-500">
            Blog
            {/* Dropdown Menu for Blog */}
            <ul className="absolute hidden group-hover:block bg-white shadow mt-2 text-gray-700 text-sm">
              <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">About Us</li>
              <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Blog Page</li>
            </ul>
          </li>
          <li className="cursor-pointer hover:text-purple-500">Product</li>
          <li className="relative group cursor-pointer hover:text-purple-500">
            Contact
            {/* Dropdown Menu for Contact */}
            <ul className="absolute hidden group-hover:block bg-white shadow mt-2 text-gray-700 text-sm">
              <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">FAQ</li>
              <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Sign In</li>
              <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">Contact</li>
            </ul>
          </li>
          <li className="cursor-pointer hover:text-purple-500">Shopping</li>
          <li className="cursor-pointer hover:text-purple-500">Shop</li>
        </ul>

        {/* Right: Search Bar */}
        <div className="flex items-center border bg-pink-500 border-gray-400 rounded-md mr-40">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none pr-9 py-1 text-sm "
          />
          <Search className="w-7 h-5 text-white" />
        </div>
      </nav>
    </header>
  );
}
