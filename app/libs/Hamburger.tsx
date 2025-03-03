import React from "react";

export const Hamburger = () => {
  return (
    <div>
      <label className="relative w-6 h-4 cursor-pointer block min-[1024px]:hidden" htmlFor="burger">
        <input type="checkbox" id="burger" className="hidden peer" />
        <span className="absolute w-full h-[2px] bg-white rounded transition-all duration-300 ease-in-out top-0 left-0 peer-checked:rotate-45 peer-checked:top-[6px] peer-checked:left-[5px]" />
        <span className="absolute w-full h-[2px] bg-white rounded transition-all duration-300 ease-in-out top-1/2 left-0 -translate-y-1/2 peer-checked:opacity-0 peer-checked:w-0" />
        <span className="absolute w-full h-[2px] bg-white rounded transition-all duration-300 ease-in-out top-full left-0 -translate-y-full peer-checked:rotate-[-45deg] peer-checked:top-[14px] peer-checked:left-[5px]" />
      </label>
    </div>
  );
};

export default Hamburger;
