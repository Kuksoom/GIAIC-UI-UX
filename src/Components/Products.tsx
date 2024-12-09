import { ShoppingCart, Heart, Search, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import sofa1 from "../../public/images/img3.png"
import sofa2 from "../../public/images/img4.png"
import sofa3 from "../../public/images/img5.png"
import sofa4 from "../../public/images/img7.png"
import sofa5 from "../../public/images/img8.png"
import sofa6 from "../../public/images/img9.png"

export default function ProductSection() {
  return (
    <div className="py-12">
      {/* Featured Products Section */}
      <div className="container mx-auto mb-12">
        <h2 className="text-3xl font-bold text-center text-blue-950 mb-8">Featured Products</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
            <Image
             src={sofa1} alt="Product" className="w-full h-48 object-cover rounded-md" 
             />
            <div className="flex justify-around mt-4 w-full">
              <button className="p-2 bg-gray-100 rounded-full">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 rounded-full">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 rounded-full">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex items-center justify-between w-full mt-2">
              <div className="text-gray-600">Code: XYZ123</div>
              <div className="text-gray-600">
                <span className="text-pink-500">$150</span> <span className="line-through text-red-500">$200</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
          <Image
             src={sofa2} alt="Product" className="w-full h-48 object-cover rounded-md" 
             />
            <div className="flex justify-around mt-4 w-full">
              <button className="p-2 bg-gray-100 rounded-full">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 rounded-full">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 rounded-full">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex items-center justify-between w-full mt-2">
              <div className="text-gray-600">Code: ABC456</div>
              <div className="text-gray-600">
                <span className="text-pink-500">$250</span> <span className="line-through text-red-500">$300</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
          <Image
             src={sofa3} alt="Product" className="w-full h-48 object-cover rounded-md" 
             />
            <div className="flex justify-around mt-4 w-full">
              <button className="p-2 bg-gray-100 rounded-full">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 rounded-full">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 rounded-full">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex items-center justify-between w-full mt-2">
              <div className="text-gray-600">Code: DEF789</div>
              <div className="text-gray-600">
                <span className="text-pink-500">$350</span> <span className="line-through text-red-500">$400</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Products Section */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-950 mb-8">Latest Products</h2>
        <ul className="flex flex-wrap items-center justify-center gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
          <Image
             src={sofa4} alt="Product" className="w-full h-48 object-cover rounded-md" 
             />
            <div className="flex justify-around mt-4 w-full">
              <button className="p-2 bg-gray-100 rounded-full">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 rounded-full">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 rounded-full">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex items-center justify-between w-full mt-2">
              <div className="text-gray-600">Name: Sofa A</div>
              <div className="text-gray-600">
                <span className="text-red-500">$400</span> <span className="line-through text-gray-600">$500</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
          <Image
             src={sofa5} alt="Product" className="w-full h-48 object-cover rounded-md" 
             />
            <div className="flex justify-around mt-4 w-full">
              <button className="p-2 bg-gray-100 rounded-full">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 rounded-full">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 rounded-full">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex items-center justify-between w-full mt-2">
              <div className="text-gray-600">Name: Sofa B</div>
              <div className="text-gray-600">
                <span className="text-red-500">$450</span> <span className="line-through text-gray-600">$550</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
          <Image
             src={sofa6} alt="Product" className="w-full h-48 object-cover rounded-md" 
             />
            <div className="flex justify-around mt-4 w-full">
              <button className="p-2 bg-gray-100 rounded-full">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 rounded-full">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 rounded-full">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex items-center justify-between w-full mt-2">
              <div className="text-gray-600">Name: Sofa C</div>
              <div className="text-gray-600">
                <span className="text-red-500">$500</span> <span className="line-through text-gray-600">$600</span>
              </div>
            </div>
          </div>
        </ul>
      </div>

      {/* What Shopex Us Section */}
      <div className="container mx-auto my-12">
        <h2 className="text-3xl font-bold text-center text-blue-950 mb-8">What Shopex Us!</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
            <div className="p-4 bg-gray-100 rounded-full mb-4">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-center">We provide support around the clock to assist you with any inquiries or issues.</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
            <div className="p-4 bg-gray-100 rounded-full mb-4">
              <Heart className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Quality Products</h3>
            <p className="text-gray-600 text-center">We offer a wide range of high-quality products to meet all your needs.</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
            <div className="p-4 bg-gray-100 rounded-full mb-4">
              <Search className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Easy Shopping</h3>
            <p className="text-gray-600 text-center">Our user-friendly interface makes shopping easy and convenient.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
