"use client";
import localFont from "next/font/local";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ACCORDION_DATA } from "@/constants/AccordionData";

const monaSemibold = localFont({ src: "../fonts/MonaSans-SemiBold.otf" });

interface AccordionItem {
  heading: string;
  description: string;
  image: StaticImageData | string;
  anchorTag: string;
  inverse: string;
}

const ImageAccordion = () => {
  const [selected, setSelected] = useState<number | null>(0);

  const toggle = (index: number) => {
    setSelected((prev) => (prev === index ? prev : index));
  };

  return (
    <div className="bg-[#0d1117] border-b flex items-center justify-center text-[#8b949e] border-gray-800 w-full h-[698px]">
      <div className="flex justify-end w-auto h-full">
        <div className="w-[640px] h-full mx-auto justify-center px-12 flex flex-col">
          {ACCORDION_DATA.map((item: AccordionItem, index: number) => (
            <div
              className="pt-6 pb-5 flex flex-col h-auto justify-center gap-3 border-b border-gray-800 cursor-pointer"
              onClick={() => toggle(index)}
              key={index}
            >
              <div className="flex items-center justify-between">
                <h1
                  className={`${monaSemibold.className} text-2xl ${
                    selected === index ? "text-white" : "hover:text-white"
                  }`}
                >
                  {item.heading}
                </h1>
                <div
                  className={
                    selected === index ? "hidden" : "text-purple-600 font-light"
                  }
                >
                  <FaPlus />
                </div>
              </div>

              <AnimatePresence>
                {selected === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-lg mb-2">{item.description}</p>
                    <div className="flex text-lg items-center gap-1 text-[#55a8d1] font-semibold">
                      <a href="#" className="underline-animation">
                        {item.anchorTag}
                      </a>
                      <IoIosArrowForward />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="w-[800px] h-full -mr-40 relative">
          <AnimatePresence mode="popLayout">
            {selected !== null && ACCORDION_DATA[selected] && (
              <motion.div
                key={selected}
                initial={{ opacity: 0, z: 40 }}
                animate={{ opacity: 1, z: 0 }}
                exit={{ opacity: 0, z: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-full"
              >
                <Image
                  src={ACCORDION_DATA[selected].image}
                  alt={ACCORDION_DATA[selected].heading}
                  className=" w-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ImageAccordion;
