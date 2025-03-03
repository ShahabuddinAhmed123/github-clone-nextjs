import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export default function ResNavbar( ) {
  return (
    <div className="w-screen h-[91vh] rounded-t-2xl flex flex-col justify-between bg-white absolute top-[72px] pt-5 px-7 pb-9 left-0 text-xl ">
      <div>
        <div className="py-3 text-[#1f2328] flex items-center justify-between">
          <h1 className="text-xl font-semibold">Product</h1>
          <IoIosArrowForward />
        </div>
        <div className="py-3 text-[#1f2328] flex items-center justify-between">
          <h1 className="text-xl font-semibold">Solutions</h1>
          <IoIosArrowForward />
        </div>
        <div className="py-3 text-[#1f2328] flex items-center justify-between">
          <h1 className="text-xl font-semibold">Resources</h1>
          <IoIosArrowForward />
        </div>
        <div className="py-3 text-[#1f2328] flex items-center justify-between">
          <h1 className="text-xl font-semibold">Open Source</h1>
          <IoIosArrowForward />
        </div>
        <div className="py-3 text-[#1f2328] flex items-center justify-between">
          <h1 className="text-xl font-semibold">Enterprise</h1>
          <IoIosArrowForward />
        </div>
        <div className="py-3 text-[#1f2328]">
          <h1 className="text-xl font-semibold">Pricing</h1>
        </div>
      </div>
      <div>
        <div className="w-[318px] h-8 flex items-center px-2 justify-between text-[#59636e] mb-4 rounded-md border border-gray-300 max-[1280px]:w-auto">
          <CiSearch />
          <input
            className=" h-full bg-transparent w-[94%] text-sm outline-none placeholder:text-sm pb-1 font-semibold"
            type="text"
            placeholder="Search or jump to..."
          />
          <div className="p-[6px] rounded border border-gray-400 h-5 flex items-center text-xs ">
            /
          </div>
        </div>

        <button className="h-10 w-full bg-[#25292e] rounded-xl text-white text-base font-semibold">
          Sign up
        </button>
      </div>
    </div>
  );
}
