export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          {/* Section 1: Hakto Enter Your Email */}
          <div className="mb-12">
            <h3 className="text-lg font-bold mb-2">Hakto Enter Your Email</h3>
            <form className="flex items-center">
              <input
                type="email"
                className="px-4 py-2 rounded-l-md text-gray-800"
                placeholder="Enter your email"
              />
              <button type="submit" className="bg-pink-500 text-white px-6 py-2 rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>
  
          {/* Section 2: Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-2">Categories</h3>
              <ul className="list-none space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Sofas</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Chairs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Tables</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Lamps</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-bold mb-2">Customer Care</h3>
              <ul className="list-none space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Shipping Info</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-bold mb-2">Pages</h3>
              <ul className="list-none space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>

  
          {/* Social Media Links */}
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
          </div>
  
          {/* Copyright Section */}
          <div className="flex justify-between items-center mt-12">
            <span className="text-gray-400">&copy; 2024 Hakto. All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  