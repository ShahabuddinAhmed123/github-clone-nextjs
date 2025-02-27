'use client'
import localFont from "next/font/local";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ACCORDION_DATA } from "@/constants/AccordionData"

const monaSemibold = localFont({ src: "../fonts/MonaSans-SemiBold.otf" });

interface AccordionItem {
    heading: string;
    description: string;
    image: StaticImageData;
    anchorTag: string;
    inverse: string;
  }
  

const ImageAccordion = () => {
  const [selected, setSelected] = useState<number | null>(0);

  const toggle = (index: number) => {
    setSelected(selected === index ? null : index);
  }

  return (
    <div className='bg-[#0d1117] border-b flex items-center justify-center text-[#8b949e] border-gray-800 w-full h-[698px]'>
            
      <div className='flex justify-end w-[auto] h-full'>
        <div className='w-[640px] h-full mx-auto px-12 justify-center flex flex-col'>
        {ACCORDION_DATA.map((item:AccordionItem, index: number) => (
            <div className='pt-6 pb-5 flex flex-col gap-3 border-b border-gray-800' onClick={() => toggle(index)} key={index}>
                <div className="flex items-center justify-between">
                <h1 className={selected === index ? `${monaSemibold.className} text-2xl text-white cursor-pointer` : `${monaSemibold.className} text-2xl hover:text-white cursor-pointer`}>{item.heading}</h1>
                <div className={selected !== index ? "text-purple-600 font-light" : "hidden"}>
                <FaPlus />
                </div>
                </div>

                <div className={selected === index ? "w-full h-auto" : "hidden"}>
                <p className="text-lg mb-2">{item.description}</p>
                <div className="flex text-lg items-center gap-1 text-[#55a8d1] font-semibold">
                <a href="#" className="underline-animation">{item.anchorTag}</a>
                <IoIosArrowForward />
                </div>
                </div>
            </div>
        ))}
        </div>
        {selected !== null && (
        <div className='w-[800px] h-full -mr-40'>
            <Image
            src={ACCORDION_DATA[selected].image}
            alt={ACCORDION_DATA[selected].heading}
            className="accordion w-full"
            />
        </div>
        )}
      </div>
    </div>
  )
}

export default ImageAccordion
