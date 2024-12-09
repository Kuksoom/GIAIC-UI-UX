import { ShoppingCart,Heart,Search } from 'lucide-react';
import Image from 'next/image';
import one from "../../public/images/img10.png"
import two from "../../public/images/img11.png"
import three from "../../public/images/img12.png"
import four from "../../public/images/img14.png"
import five from "../../public/images/img116.png"
import six from "../../public/images/img17.png"
import seven from "../../public/images/img18.png"

export default function Updates() {

  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto flex flex-wrap items-center justify-center">
        {/* Left Section */}
        <div className="flex flex-col items-center w-full md:w-1/2 p-8">
          <Image
            src={one} // Replace with your image URL
            alt="Trending Product"
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start w-full md:w-1/2 p-8 text-blue-950">
          <h2 className="text-2xl font-bold">Unique Features of Latest & Trending Products 2024</h2>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>High-quality materials and craftsmanship</li>
            <li>Modern design with ergonomic comfort</li>
            <li>Wide range of colors and styles</li>
            <li>Competitive pricing with great value</li>
          </ul>
          <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-md flex items-center">
            <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
          </button>
          <p className="mt-2 text-gray-600">B&B Italian Sofa - $32.00</p>
        </div>
      </div>

      {/* Trending Products Section */}
      <div className="bg-gray-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-950">Trending Products</h2>
        
        <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
          <Image
            src={two} // Replace with your image URL
            alt="Trending Product"
            className="w-full h-auto rounded-md"
          />
            <div className="text-dark-blue mt-2">
              <p className="text-lg font-bold">Sofa A</p>
              <p className="text-gray-600">
                <span className="text-pink-500">$150</span> <span className="line-through text-red-500">$200</span>
              </p>
              <div className="flex justify-around mt-2">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md"><ShoppingCart className="w-5 h-5" /></button>
                <button className="bg-gray-200 text-gray-600 p-1 rounded-full"><Heart className="w-5 h-5" /></button>
                <button className="bg-gray-200 text-gray-600 p-1 rounded-full"><Search className="w-5 h-5" /></button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
          <Image
            src={three} // Replace with your image URL
            alt="Trending Product"
            className="w-full h-auto rounded-md"
          />
            <div className="text-dark-blue mt-2">
              <p className="text-lg font-bold">Sofa B</p>
              <p className="text-gray-600">
                <span className="text-pink-500">$250</span> <span className="line-through text-red-500">$300</span>
              </p>
              <div className="flex justify-around mt-2">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md"><ShoppingCart className="w-5 h-5" /></button>
                <button className="bg-gray-200 text-gray-600 p-1 rounded-full"><Heart className="w-5 h-5" /></button>
                <button className="bg-gray-200 text-gray-600 p-1 rounded-full"><Search className="w-5 h-5" /></button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
          <Image
            src={four} // Replace with your image URL
            alt="Trending Product"
            className="w-full h-[225px] rounded-md"
          />
            <div className="text-dark-blue mt-2">
              <p className="text-lg font-bold">Sofa C</p>
              <p className="text-gray-600">
                <span className="text-pink-500">$350</span> <span className="line-through text-red-500">$400</span>
              </p>
              <div className="flex justify-around mt-2">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md"><ShoppingCart className="w-5 h-5" /></button>
                <button className="bg-gray-200 text-gray-600 p-1 rounded-full"><Heart className="w-5 h-5" /></button>
                <button className="bg-gray-200 text-gray-600 p-1 rounded-full"><Search className="w-5 h-5" /></button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
          <Image
            src={five} // Replace with your image URL
            alt="Trending Product"
            className="w-full h-[225px] rounded-md"
          />
            <div className="text-dark-blue mt-2">
              <p className="text-lg font-bold">Sofa D</p>
              <p className="text-gray-600">
                <span className="text-pink-500">$450</span> <span className="line-through text-red-500">$500</span>
              </p>
              <div className="flex justify-around mt-2">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md"><ShoppingCart className="w-5 h-5" /></button>
                <button className="bg-gray-200 text-gray-600 p-1 rounded-full"><Heart className="w-5 h-5" /></button>
                <button className="bg-gray-200 text-gray-600 p-1 rounded-full"><Search className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Card 5 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
          <Image
            src={six} // Replace with your image URL
            alt="Trending Product"
            className="w-full h-auto rounded-md"
          />
            <div className="text-dark-blue mt-2">
              <p className="text-lg font-bold">Sofa E</p>
              <p className="text-gray-600">
                <span className="text-pink-500">$550</span> <span className="line-through text-red-500">$600</span>
              </p>
              <div className="flex justify-around mt-2">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md"><ShoppingCart className="w-5 h-5" /></button>
                <button className="bg-gray-200 text-gray-600 p-1 rounded-full"><Heart className="w-5 h-5" /></button>
                <button className="bg-gray-200 text-gray-600 p-1 rounded-full"><Search className="w-5 h-5" /></button>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
          <Image
            src={seven} // Replace with your image URL
            alt="Trending Product"
            className="w-full h-auto rounded-md"
          />
            <div className="text-dark-blue mt-2">
              <p className="text-lg font-bold">Sofa F</p>
              <p className="text-gray-600">
                <span className="text-pink-500">$650</span> <span className="line-through text-red-500">$700</span>
              </p>
              <div className="flex justify-around mt-2">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md"><ShoppingCart className="w-5 h-5" /></button>
                <button className="bg-gray-200 text-gray-600 p-1 rounded-full"><Heart className="w-5 h-5" /></button>
                <button className="bg-gray-200 text-gray-600 p-1 rounded-full"><Search className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
