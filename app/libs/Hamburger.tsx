import React from "react";

interface HamburgerProps {
  onClick: () => void;
  isOpen: boolean;
}

export const Hamburger: React.FC<HamburgerProps> = ({ onClick, isOpen }) => {
  return (
    <div>
      <button
        className="relative w-6 h-4 cursor-pointer block min-[1024px]:hidden"
        onClick={onClick} 
      >
        <span
          className={`absolute w-full h-[2px] bg-white rounded transition-all duration-300 ease-in-out top-0 left-0 
          ${isOpen ? "-rotate-45 top-[5px] left-[2px]" : ""}`}
        />
        <span
          className={`absolute w-full h-[2px] bg-white rounded transition-all duration-300 ease-in-out top-1/2 left-0 -translate-y-1/2 
          ${isOpen ? "opacity-0 w-0" : ""}`}
        />
        <span
          className={`absolute w-full h-[2px] bg-white rounded transition-all duration-300 ease-in-out top-full left-0 -translate-y-full 
          ${isOpen ? "rotate-45 top-[7px] left-[2px]" : ""}`}
        />
      </button>
    </div>
  );
};

export default Hamburger;
