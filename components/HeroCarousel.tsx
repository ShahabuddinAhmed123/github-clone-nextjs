import Carousel from '@/app/libs/Carousel'
import React from 'react'

const HeroCarousel = () => {
  return (
    <div className=" w-full h-auto bg-[#0b0f1e] border-t z-50">
      <div className='text-white h-[260px] flex-col w-full flex pt-8 px-6 items-center z-50'>
        <div className='w-full flex items-center justify-center h-[58px]'>
            <div className='flex gap-0 w-[682px] h-full rounded-full border items-center justify-center'>
                <button className='w-[130px] h-10 rounded-full border'>Code</button>
                <button className='w-[130px] h-10 rounded-full '>Plan</button>
                <button className='w-[130px] h-10 rounded-full '>Collaborate</button>
                <button className='w-[130px] h-10 rounded-full '>Automate</button>
                <button className='w-[130px] h-10 rounded-full '>Secure</button>
            </div>
        </div>
        <div className='mt-6 text-[#8B949e]'>
            <p>Build code quickly and more securely with GitHub Copilot embedded throughout your workflows.</p>
        </div>
      </div>
<Carousel/>
<hr className='w-full h-auto' />
    </div>
  )
}

export default HeroCarousel
