import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import light from "../../public/images/img1.png"
import sofa from "../../public/images/img2.png"
export default function Placeholder() {
  return (
    <div className="bg-gray-100 pb-20">
      <div className="container mx-auto flex flex-wrap items-center justify-center">
        {/* Left Section */}
        <div className="flex flex-col items-center w-full md:w-1/3 p-4">
          <Image
            src={light} // Replace with your image URL
            alt="Furniture"
            className="w-full h-auto mr-[300px]"
          />
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center space-y-4 -ml-36 w-full md:w-1/3">
          <h3 className="text-pink-500 text-xl">Best Furniture for Your Castle...</h3>
          <h2 className="text-3xl font-bold">New Furniture Collection Trends in 2024</h2>
          <p className="text-gray-600">Discover the latest trends and styles in furniture for 2024. Enhance your living space with our curated collection.</p>
          <button className="mt-4 bg-pink-500 text-white px-6 py-2 flex items-center">
            <ShoppingCart className="w-4 h-4 mr-2" /> Shop Now
          </button>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col items-center w-full md:w-1/3 p-4">
            <div className="absolute top-20 right-10 bg-blue-500 text-white px-2 py-1 rounded-md">
              50% OFF
            </div>
            <ellipse cx="25" cy="25" rx="25" ry="15" className="fill-gray-100"></ellipse>
            <Image
            src={sofa} // Replace with your image URL
            alt="Furniture"
            className="w-full h-auto"
          />
          </div>
        </div>
    </div>
  );
}
