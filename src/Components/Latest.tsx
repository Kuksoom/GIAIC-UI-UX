import Image from 'next/image';

import two from "../../public/images/img26.png";
import three from "../../public/images/img27.jpg";
import four from "../../public/images/img29.jpg";
export default function LatestSection() {
  return (
    <div className="bg-cover py-12 mt-20"  >
      <div className="container  text-center" style={{ backgroundImage: "url('/images/img24.jpg')" }} >
        <h2  className="text-3xl font-bold text-white mb-8">Get Latest Updates by Subscribe Our Newsletter</h2>
        <form className="mb-12">
          <input type="email" className="px-4 py-2 rounded-l-md text-dark-blue" placeholder="Enter your email" />
          <button type="submit" className="bg-pink-500 text-white px-6 py-2 rounded-r-md">Subscribe</button>
        </form>
        <Image src={two} alt="Blog Image" className="w-full h-auto" />

        {/* Our Blogs Section */}
        <h2 className="text-3xl font-bold text-dark-blue mb-8">Our Blogs</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Blog Card 1 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
            <Image src={four} alt="Blog Image" className="w-full h-auto rounded-md" />
            <h3 className="text-lg font-bold text-dark-blue mt-2">Blog Title 1</h3>
            <p className="text-gray-600">December 9, 2024</p>
            <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at neque eros.</p>
            <a href="#" className="text-pink-500 hover:text-pink-700 mt-2">Read More</a>
          </div>

          {/* Blog Card 2 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
            <Image src={four} alt="Blog Image" className="w-full h-auto rounded-md" />
            <h3 className="text-lg font-bold text-dark-blue mt-2">Blog Title 2</h3>
            <p className="text-gray-600">December 8, 2024</p>
            <p className="text-gray-800">Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
            <a href="#" className="text-pink-500 hover:text-pink-700 mt-2">Read More</a>
          </div>

          {/* Blog Card 3 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-64 p-4">
            <Image src={three} alt="Blog Image" className="w-full h-auto rounded-md" />
            <h3 className="text-lg font-bold text-dark-blue mt-2">Blog Title 3</h3>
            <p className="text-gray-600">December 7, 2024</p>
            <p className="text-gray-800">Maecenas ultrices diam sit amet ligula bibendum, vel tincidunt sem auctor.</p>
            <a href="#" className="text-pink-500 hover:text-pink-700 mt-2">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
