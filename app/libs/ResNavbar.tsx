import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Image, { StaticImageData } from "next/image";
import { NAV_DATA } from "@/constants/NavbarData";
import { PLAIN_DATA } from "@/constants/PlainNavbarData";

interface NavbarItems {
  title: string;
  description: string;
  logo: StaticImageData | string;
  inverse: boolean;
}

export default function ResNavbar() {
  const [openedProduct, setOpenedProduct] = useState(false);
  const [openedSolution, setOpenedSolution] = useState(false);
  const [openedResource, setOpenedResource] = useState(false);
  const [openedSource, setOpenedSource] = useState(false);
  const [openedEnterprise, setOpenedEnterprise] = useState(false);
  const [openResNav, setOpenResNav] = useState(false);

  const navData = NAV_DATA || [];
  const plainNavData = PLAIN_DATA || [];

  const handleOpenProduct = () => {
    setOpenedProduct(!openedProduct);
    setOpenedSolution(false);
    setOpenedResource(false);
    setOpenedSource(false);
    setOpenedEnterprise(false);
  };

  const handleOpenSolution = () => {
    setOpenedSolution(!openedSolution);
    setOpenedProduct(false);
    setOpenedResource(false);
    setOpenedSource(false);
    setOpenedEnterprise(false);
  };

  const handleOpenResource = () => {
    setOpenedResource(!openedResource);
    setOpenedSolution(false);
    setOpenedProduct(false);
    setOpenedSource(false);
    setOpenedEnterprise(false);
  };

  const handleOpenSource = () => {
    setOpenedSource(!openedSource);
    setOpenedSolution(false);
    setOpenedProduct(false);
    setOpenedResource(false);
    setOpenedEnterprise(false);
  };

  const handleOpenEnterprise = () => {
    setOpenedEnterprise(!openedEnterprise);
    setOpenedSolution(false);
    setOpenedProduct(false);
    setOpenedResource(false);
    setOpenedSource(false);
  };

  return (
    <div className="w-screen h-[91vh] overflow-y-auto rounded-t-xl flex flex-col justify-between bg-white absolute top-[72px] pt-5 px-7 pb-9 left-0 text-xl ">
      <div>
        <div className="flex flex-col">
          <div className="py-3 text-[#1f2328] flex items-center justify-between"
          onClick={() => handleOpenProduct()}>
            <h1 className="text-xl font-semibold">Product</h1>
            {!openedProduct ? <IoIosArrowForward /> : <IoIosArrowDown />}
          </div>
          {openedProduct && (
            <div className=" flex flex-col rounded-md pb-6 pt-2 w-full h-auto transition-all bg-white">
              <div className="w-full flex flex-col h-full pr-12 border-b text-[#1f2328]">
                {navData.categories?.Product?.map(
                  (item: NavbarItems, index: number) => (
                    <div
                      className="flex items-center pt-2 pb-3 gap-2"
                      key={index}
                    >
                      <Image width={24} height={24} src={item.logo} alt="" />
                      <div>
                        <p className="text-base font-semibold">{item.title}</p>
                        <p className="text-sm text-[#585858]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>

              {plainNavData.categories?.Explore?.map((item, index: number) => (
                <div className="w-[198px] h-full pr-6 pt-4" key={index}>
                  <h1 className="text-[#1f2328] text-base font-semibold py-2">
                    {item.title}
                  </h1>
                  <ul className="text-[#585858] flex flex-col gap-3 text-sm">
                    <li>{item.desOne}</li>
                    <li>{item.desTwo}</li>
                    <li>{item.desThree}</li>
                    <li>{item.desFour}</li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* ///////////// */}
        <div
          className="flex flex-col h-auto"
        >
          <div className="py-3 text-[#1f2328] flex items-center justify-between"
          onClick={() => handleOpenSolution()}>
            <h1 className="text-xl font-semibold">Solutions</h1>
            {!openedSolution ? <IoIosArrowForward /> : <IoIosArrowDown />}
          </div>
          {openedSolution && (
            <div className=" rounded-md pb-6 pt-2 h-auto bg-white">
              <div className="w-full gap-5 flex flex-col h-full text-[#1f2328]">
                {plainNavData.categories?.Solutions?.map(
                  (item, index: number) => (
                    <div
                      className={`flex flex-col py-2 gap-2 border-b text-base`}
                      key={index}
                    >
                      <h1 className="font-semibold">{item.title}</h1>
                      <ul className="list-none text-[#585858] text-sm flex flex-col gap-2">
                        <li>{item.desOne}</li>
                        <li>{item.desTwo}</li>
                        <li>{item.desThree}</li>
                        <li>{item.desFour}</li>
                        <li>{item.desFive}</li>
                      </ul>
                    </div>
                  )
                )}
                <div className="flex items-center text-sm font-semibold py-6">
                  <h1>View all solutions</h1>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          )}
        </div>
        {/*////////////////*/}
        <div className="flex flex-col">
          <div className="py-3 text-[#1f2328] flex items-center justify-between" 
          onClick={() => handleOpenResource()}>
            <h1 className="text-xl font-semibold">Resources</h1>
            {!openedResource ? <IoIosArrowForward /> : <IoIosArrowDown />}
          </div>
          {openedResource && (
            <div className=" h-auto rounded-md py-b pt-2 bg-white">
              <div className="w-full  h-full pr-6 text-[#1f2328] text-base ">
                {plainNavData.categories?.Resources?.map(
                  (item, index: number) => (
                    <div
                      className="flex flex-col py-2 gap-2 border-b"
                      key={index}
                    >
                      <h1 className="font-semibold">{item.title}</h1>
                      <ul className="list-none text-[#585858] text-sm flex flex-col gap-3">
                        <li>{item.desOne}</li>
                        <li>{item.desTwo}</li>
                        <li>{item.desThree}</li>
                        <li>{item.desFour}</li>
                        <li>{item.desFive}</li>
                        <li>{item.desSix}</li>
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
        {/*///////////////*/}

        <div
          className="flex flex-col h-auto"
        >
          <div className="py-3 text-[#1f2328] flex items-center justify-between" 
           onClick={() => handleOpenSource()}>
            <h1 className="text-xl font-semibold">Open Source</h1>
            {!openedSource ? <IoIosArrowForward /> : <IoIosArrowDown />}
          </div>
          {openedSource && (
            <div className="w-full pb-6 pt-2">
              <div className=" flex flex-col h-auto text-[#333]">
                {plainNavData.categories?.["Open Source"]?.map(
                  (item, index: number) => (
                    <div
                      className={`flex flex-col py-2 text-base ${
                        item.inverse === false ? "gap-2" : "border-b"
                      }`}
                      key={index}
                    >
                      <h1 className="font-semibold">{item.title}</h1>
                      <ul className="list-none text-[#585858] text-sm flex flex-col gap-3">
                        <li>{item.desOne}</li>
                        <li>{item.desTwo}</li>
                        <li>{item.desThree}</li>
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        {/*////////////////////*/}
        <div
          className="flex flex-col h-auto"
        >
          <div className="py-3 text-[#1f2328] flex items-center justify-between" 
          onClick={() => handleOpenEnterprise()}
          >
            <h1 className="text-xl font-semibold">Enterprise</h1>
            {!openedEnterprise ? <IoIosArrowForward /> : <IoIosArrowDown />}
          </div>
          {openedEnterprise && (
            <div className="flex items-center pb-6 pt-2 w-auto bg-white">
              <div className="w-full flex flex-col h-full text-base text-black">
                {navData.categories?.Enterprise?.map(
                  (item: NavbarItems, index: number) => (
                    <div
                      className={`flex items-center pt-2 gap-3 ${
                        item.inverse === true
                          ? "border-b mb-3 pb-5 border-gray-800 "
                          : "pb-3"
                      }`}
                      key={index}
                    >
                      <Image width={25} height={25} src={item.logo} alt="" />
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-[#585858]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        <div className="py-3 text-[#1f2328]">
          <h1 className="text-xl font-semibold">Pricing</h1>
        </div>
      </div>
      <div>
        <div className="w-[318px] h-8 flex items-center px-2 mt-5 justify-between text-[#59636e] mb-4 rounded-md border border-gray-300 max-[1280px]:w-auto">
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
