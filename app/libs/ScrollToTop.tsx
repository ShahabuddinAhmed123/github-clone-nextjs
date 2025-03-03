"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-3 p-3 max-md:p-2 bg-gray-800 text-white rounded-full z-50 shadow-lg transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;
