import Carousel from '@/app/libs/Carousel'
import React from 'react'
import { motion } from 'framer-motion'

const HeroCarousel = () => {
  return (
    <div className=" w-full h-auto bg-[#0b0f1e] border-y border-gray-700 z-50">
      <div className='text-white h-[260px] flex-col w-full flex pt-8 px-6 items-center z-50'>
        <div className='w-full flex items-center justify-center h-[58px]'>
            <div className='flex gap-0 relative w-[682px] h-full rounded-full border items-center justify-center'>
                <button className='w-[130px] h-10 rounded-full border'>Code</button>
                <button className='w-[130px] h-10 rounded-full '>Plan</button>
                <button className='w-[130px] h-10 rounded-full '>Collaborate</button>
                <button className='w-[130px] h-10 rounded-full '>Automate</button>
                <button className='w-[130px] h-10 rounded-full '>Secure</button>

                <motion.div
            className="absolute w-[130px] bg-[#232038] h-10 rounded-full border border-gray-400"
            layoutId="activeCategory"
            transition={{ type: "spring", stiffness: 300, damping: 50 }}
            style={{
              top: "13%",
              // left: `${
              //   Object.keys(accordionData.categories).indexOf(activeCategory) *
              //   140
              // }px`,
              left: "15px",
              transform: "translateX(-50%, -50%)",
            }}
            />
            </div>
        </div>
        <div className='mt-6 text-[#8B949e]'>
            <p>Build code quickly and more securely with GitHub Copilot embedded throughout your workflows.</p>
        </div>
      </div>
<Carousel/>
    </div>
  )
}

export default HeroCarousel