import React from 'react'
import Header from '@/Components/Header'
import Placeholder from '@/Components/Placeholder'
import ProductSection from '@/Components/Products'
import Updates from '@/Components/Updates'
import DiscountSection from '@/Components/Blog'
import LatestSection from '@/Components/Latest'
import Footer from '@/Components/Footer'
function page() {
  return (
    <div>
      <Header />
      <Placeholder />
      <ProductSection/>
      <Updates/>
      <DiscountSection/>
      <LatestSection />
      <Footer/>
    </div>
  )
}

export default page
