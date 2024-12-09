import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import one from "../../public/images/img22.png";
import two from "../../public/images/img19.png";
import three from "../../public/images/img20.png";
import four from "../../public/images/img21.png";
import five from "../../public/images/img23.png";

export default function DiscountSection() {
  return (
    <div>
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-dark-blue mb-8">Discount Items</h2>

        {/* List of Discounted Items */}
        <div className="flex justify-center gap-4 mb-8">
          <span className="bg-gray-200 px-4 py-2 rounded-full">Plastic Chair</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">Wooden Chair</span>
          <span className="bg-gray-200 px-4 py-2 rounded-full">Sofa Collection</span>
        </div>

        {/* 20% Discount Section */}
        <div className="flex flex-wrap items-center justify-center gap-12 mb-12">
          {/* Left Section */}
          <div className="w-full md:w-1/2 p-8 text-dark-blue order-2 md:order-1">
            <h3 className="text-2xl font-bold">20% Discount</h3>
            <ul className="list-none mt-4 space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> High-quality materials
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Ergonomic design
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Modern styles
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Competitive pricing
              </li>
            </ul>
            <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-md">Shop Now</button>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 p-8 order-1 md:order-2">
            <Image 
              src={one} alt="Discount Item" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>

        {/* Top Categories */}
        <h2 className="text-3xl font-bold text-dark-blue m-8 text-center">Top Categories</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
            <Image 
              src={five} alt="Discount Item" className="w-full h-auto rounded-md" />
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-dark-blue font-bold">1</span>
            </div>
            <p className="text-lg font-bold text-dark-blue">Sofas</p>
            <p className="text-gray-600">$450</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
            <Image 
              src={two} alt="Discount Item" className="w-full h-auto rounded-md" />
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-dark-blue font-bold">2</span>
            </div>
            <p className="text-lg font-bold text-dark-blue">Chairs</p>
            <p className="text-gray-600">$200</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
            <Image 
              src={three} alt="Discount Item" className="w-full h-auto rounded-md" />
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-dark-blue font-bold">3</span>
            </div>
            <p className="text-lg font-bold text-dark-blue">Tables</p>
            <p className="text-gray-600">$350</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
            <Image 
              src={four} alt="Discount Item" className="w-full h-auto rounded-md" />
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-dark-blue font-bold">4</span>
            </div>
            <p className="text-lg font-bold text-dark-blue">Lamps</p>
            <p className="text-gray-600">$100</p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <span className="inline-block w-2 h-2 bg-pink-500 rounded-full mx-1"></span>
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mx-1"></span>
          <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full mx-1"></span>
        </div>
      </div>
  );
}
