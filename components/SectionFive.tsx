import localFont from 'next/font/local';
import React from 'react'

const monaSemibold = localFont({ src: "../app/fonts/MonaSans-SemiBold.otf" });
export default function SectionFive() {
  return (
    <div className='sectioFive w-full h-auto bg-[#0b0f1e]'>
      <div className='h-36 w-full'></div>
      <img className='w-32 mx-auto' src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDRudDV1Y3Q3M2MxbHhwdGNoejNjcjg1MW8wbzQ4MTRsNzNoM2lpNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ou60s0z0v7JzSWGn8C/giphy.gif" alt="" />
      <div className='w-[1280px] h-auto mx-auto'>
        <p className={`text-[#8b949e] font-semibold text-5xl w-[1000px] mx-auto text-center ${monaSemibold.className}`}><span className='text-white'>From startups to enterprises,</span> GitHub scales
        with teams of any size in any industry.</p>
      </div>
      <div className='w-full h-14'></div>
      <div className='w-full h-[58px] flex items-center justify-center'>
        <div className='w-[414px] border border-gray-600 h-[56px] rounded-full'></div>
      </div>
      <div className='w-full h-14'></div>
      <div className='w-full h-[461px] border-y border-gray-800 flex justify-center items-center'>
        <div className='grid grid-cols-3 w-[1280px] h-full border-l border-gray-800'>
          <div className='h-full border-r border-gray-800'></div>
          <div className='h-full border-r border-gray-800'></div>
          <div className='h-full border-r border-gray-800'></div>
        </div>
      </div>
    </div>
  )
}
