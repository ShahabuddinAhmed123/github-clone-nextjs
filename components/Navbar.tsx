"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { NAV_DATA } from "@/constants/NavbarData";
import Image, { StaticImageData } from "next/image";
import { PLAIN_DATA } from "@/constants/PlainNavbarData";
import Hamburger from "@/app/libs/Hamburger";
import ResNavbar from "@/app/libs/ResNavbar";

interface NavbarItems {
  title: string;
  description: string;
  logo: StaticImageData | string;
  inverse: boolean;
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openedProduct, setOpenedProduct] = useState(false);
  const [openedSolution, setOpenedSolution] = useState(false);
  const [openedResource, setOpenedResource] = useState(false);
  const [openedSource, setOpenedSource] = useState(false);
  const [openedEnterprise, setOpenedEnterprise] = useState(false);

  const navData = NAV_DATA || [];
  const plainNavData = PLAIN_DATA || [];

  const handleOpenProduct = () => {
    setOpenedProduct(true);
    setOpenedSolution(false);
    setOpenedResource(false);
    setOpenedSource(false);
    setOpenedEnterprise(false);
  };
  const handleCloseProduct = () => {
    setOpenedProduct(false);
  };
  const handleOpenSolution = () => {
    setOpenedSolution(true);
    setOpenedProduct(false);
    setOpenedResource(false);
    setOpenedSource(false);
    setOpenedEnterprise(false);
  };
  const handleCloseSolution = () => {
    setOpenedSolution(false);
  };
  const handleOpenResource = () => {
    setOpenedResource(true);
    setOpenedSolution(false);
    setOpenedProduct(false);
    setOpenedSource(false);
    setOpenedEnterprise(false);
  };
  const handleCloseResource = () => {
    setOpenedResource(false);
  };
  const handleOpenSource = () => {
    setOpenedSource(true);
    setOpenedSolution(false);
    setOpenedProduct(false);
    setOpenedResource(false);
    setOpenedEnterprise(false);
  };
  const handleCloseSource = () => {
    setOpenedSource(false);
  };
  const handleOpenEnterprise = () => {
    setOpenedEnterprise(true);
    setOpenedSolution(false);
    setOpenedProduct(false);
    setOpenedResource(false);
    setOpenedSource(false);
  };
  const handleCloseEnterprise = () => {
    setOpenedEnterprise(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const arrow = <IoIosArrowDown />;
  return (
    <nav
      className={`text-white hover:bg-black h-[72px] transition-all duration-500 w-screen sticky top-0 left-0 z-50 bg-transparent px-8 justify-between flex items-center ${
        scrolled && "bg-black" }`}
    >
      {/* <ResNavbar/> */}
      <div className="flex items-center space-x-5">
      <Hamburger/>
        <svg
          height="32"
          aria-hidden="true"
          viewBox="0 0 24 24"
          version="1.1"
          width="32"
          data-view-component="true"
          className="octicon octicon-mark-github fill-white max-lg:hidden "
        >
          <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
        </svg>
        <div
          className="flex items-center space-x-2 relative max-lg:hidden "
          onMouseOver={() => handleOpenProduct()}
        >
          <a href="#">Product</a>
          <span>{arrow}</span>

          {openedProduct && (
            <div
              onMouseOut={() => handleCloseProduct()}
              className="absolute flex items-center top-8 -left-6 rounded-md py-6 w-[520px] h-[567px] bg-white"
            >
              <div className="w-[284px] flex flex-col h-full pl-6 pr-12 border-r text-black">
                {navData.categories?.Product?.map(
                  (item: NavbarItems, index: number) => (
                    <div
                      className="flex items-center pt-2 pb-3 gap-2"
                      key={index}
                    >
                      <Image width={24} height={24} src={item.logo} alt="" />
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

              {plainNavData.categories?.Explore?.map((item, index: number) => (
                <div className="w-[198px] h-full px-6" key={index}>
                  <h1 className="text-black font-semibold py-2">
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

        <div
          className="flex items-center space-x-2 relative max-lg:hidden "
          onMouseOver={() => handleOpenSolution()}
        >
          <a href="#">Solutions</a>
          <span>{arrow}</span>
          {openedSolution && (
            <div
              onMouseOut={() => handleCloseSolution()}
              className="absolute top-8 -left-6 rounded-md py-6 h-auto bg-white"
            >
              <div className="w-[350px] gap-5 grid grid-cols-2 h-full pl-6 pr-6 border-r text-black">
                {plainNavData.categories?.Solutions?.map(
                  (item, index: number) => (
                    <div className={`flex flex-col py-2 gap-2`} key={index}>
                      <h1>{item.title}</h1>
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
              </div>
            </div>
          )}
        </div>

        <div
          className="flex items-center space-x-2 relative max-lg:hidden "
          onMouseOver={() => handleOpenResource()}
        >
          <a href="#">Resources</a>
          <span>{arrow}</span>
          {openedResource && (
            <div
              onMouseOut={() => handleCloseResource()}
              className="absolute top-8  h-[293px] -left-6 rounded-md py-6 bg-white"
            >
              <div className="w-[520px] flex h-full pl-6 pr-6 text-[#333]">
                {plainNavData.categories?.Resources?.map(
                  (item, index: number) => (
                    <div
                      className={`flex flex-col py-2 gap-2 ${
                        item.inverse === false ? "border-r pr-10" : "pl-10"
                      }`}
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

        <div
          className="flex items-center space-x-2 relative max-lg:hidden "
          onMouseOver={() => handleOpenSource()}
        >
          <a href="#">Open Source</a>
          <span>{arrow}</span>
          {openedSource && (
            <div
              onMouseOut={() => handleCloseSource()}
              className="absolute top-8 w-[320px] -left-6 rounded-md p-6 bg-white"
            >
              <div className=" flex flex-col h-auto text-[#333]">
                {plainNavData.categories?.["Open Source"]?.map(
                  (item, index: number) => (
                    <div
                      className={`flex flex-col py-2 ${
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

        <div className="flex items-center relative space-x-2 max-lg:hidden " onMouseOver={() => handleOpenEnterprise()}>
          <a href="#">Enterprise</a>
          <span>{arrow}</span>
          {openedEnterprise && <div
          onMouseOut={() => handleCloseEnterprise()}
                className="absolute flex items-center top-8 -left-6 rounded-md py-6 w-auto bg-white"
                >
                <div className="w-[310px] flex flex-col h-full pl-6 pr-6 border-r text-black">
                {navData.categories?.Enterprise?.map(
                  (item: NavbarItems, index: number) => (
                  <div className={`flex items-center pt-2 gap-2 ${item.inverse === true ? "border-b mb-3 pb-5 border-gray-500 " : "pb-3"}`} key={index}>
                  <Image width={25} height={25} src={item.logo} alt="" />
                    <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-[#585858]">{item.description}</p>
                    </div>
                  </div>
                )
              )}
                </div>
              </div> }
        </div>
        <a href="#" className="max-lg:hidden ">Pricing</a>
      </div>

      <div className="lg:hidden">
      <svg
          height="32"
          aria-hidden="true"
          viewBox="0 0 24 24"
          version="1.1"
          width="32"
          data-view-component="true"
          className="octicon octicon-mark-github fill-white"
        >
          <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
        </svg>
      </div>

      <div className="flex items-center space-x-6">
        <div className="w-[318px] max-lg:hidden h-8 flex items-center px-2 justify-between bg-[#272f49] rounded-md border border-gray-400 max-[1280px]:w-auto">
          <CiSearch />
          <input
            className="w-[252px] h-full bg-transparent placeholder:text-sm pb-1 font-semibold max-[1280px]:hidden"
            type="text"
            placeholder="Search or jump to..."
          />
          <div className="p-[6px] rounded border border-gray-400 h-5 flex items-center text-xs max-[1280px]:hidden">
            /
          </div>
        </div>
        <button className="py-1 px-3 text-sm max-lg:border max-lg:rounded-md">Sign in</button>
        <button className="py-1 px-3 border rounded-md text-sm max-lg:hidden">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
