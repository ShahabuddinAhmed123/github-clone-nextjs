import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    const arrow = <IoIosArrowDown />
  return (
    <nav className="text-white h-[72px] w-screen fixed top-0 left-0 bg-transparent px-8 justify-between flex items-center">
      <div className="flex items-center space-x-8">
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
        <div className="flex items-center space-x-2">
          <a href="#">Product</a>
            <span>{arrow}</span>
        </div>
        <div className="flex items-center space-x-2">
          <a href="#">Solution</a>
          <span>{arrow}</span>
        </div>
        <div className="flex items-center space-x-2">
          <a href="#">Resources</a>
            <span>{arrow}</span>
        </div>
        <div className="flex items-center space-x-2">
          <a href="#">Open Source</a>
            <span>{arrow}</span>
        </div>
        <div className="flex items-center space-x-2">
          <a href="#">Enterprise</a>
            <span>{arrow}</span>
        </div>
        <a href="#">Pricing</a>
      </div>
      <div className="flex items-center space-x-6">
        <div className="w-[318px] h-8 flex items-center px-2 justify-between bg-[#272f49] rounded-md border border-gray-400">
        <CiSearch />
        <input className="w-[252px] h-full bg-transparent placeholder:text-sm pb-1 font-semibold" type="text" placeholder="Search or jump to..." />
        <div className="p-[6px] rounded border border-gray-400 h-5 flex items-center text-xs">
            /
        </div>
        </div>
        <button className="py-1 px-3 text-sm">Sign in</button>
        <button className="py-1 px-3 border rounded-md text-sm">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
