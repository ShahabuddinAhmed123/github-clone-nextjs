import React from "react";
import { FOOTER_DATA } from "../constants/Footer";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaXTwitter, FaTwitch, FaGithub } from "react-icons/fa6";

const Footer = () => {
  const socialIcons = [FaLinkedinIn, FaInstagram, FaYoutube, FaXTwitter, FaTwitch, FaGithub];

  return (
    <footer className="text-gray-600 body-font pt-14 bg-[#0d1117]">
      <div className="container px-4 w-[1280px] py-8 mb-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Left Section */}
        <div className="w-[416px] flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 367.4 90"
              className="footer-logo-mktg d-block"
              height="30"
            >
              <g fill="white">
                <path d="m46.1 0c-25.5 0-46.1 20.6-46.1 46.1 0 20.4 13.2 37.7 31.5 43.8 2.3.4 3.2-1 3.2-2.2 0-1.1-.1-4.7-.1-8.6-11.6 2.1-14.6-2.8-15.5-5.4-.5-1.3-2.8-5.4-4.7-6.5-1.6-.9-3.9-3-.1-3.1 3.6-.1 6.2 3.3 7.1 4.7 4.2 7 10.8 5 13.4 3.8.4-3 1.6-5 2.9-6.2-10.3-1.2-21-5.1-21-22.8 0-5 1.8-9.2 4.7-12.4-.5-1.2-2.1-5.9.5-12.2 0 0 3.9-1.2 12.7 4.7 3.7-1 7.6-1.6 11.5-1.6s7.8.5 11.5 1.6c8.8-6 12.7-4.7 12.7-4.7 2.5 6.3.9 11.1.5 12.2 2.9 3.2 4.7 7.3 4.7 12.4 0 17.7-10.8 21.6-21.1 22.8 1.7 1.4 3.1 4.2 3.1 8.5 0 6.2-.1 11.1-.1 12.7 0 1.2.9 2.7 3.2 2.2 18.2-6.1 31.4-23.4 31.4-43.8.3-25.4-20.4-46-45.9-46z"></path>
              </g>
            </svg>
          </a>
          <p className="text-sm text-white font-semibold mt-7">
            Subscribe to our developer newsletter
          </p>
          <p className="text-[#9198a1] text-sm mb-4">
            Get tips, technical guides, and best practices. Twice a month. Right in your inbox.
          </p>
          <button className="w-[122px] py-3 px-6 text-white font-semibold border border-gray-600 rounded-md hover:border-2 hover:scale-[0.999] hover:border-stone-300 transition-all duration-300">
            Subscribe
          </button>
        </div>

        {/* Middle Section */}
        <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-sm text-[#9198a1] text-center">
          {Object.entries(FOOTER_DATA[0]).map(([category, items], index) => (
            <div key={index} className="lg:w-[208px] md:w-1/2 pl-6">
              <h2 className="text-sm mb-4">{category}</h2>
              <nav className="list-none mb-10">
                {items.map((item, subIndex) => (
                  <li key={subIndex} className="mb-4">
                    <a className="hover:text-blue-500 hover:underline cursor-pointer">{item}</a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#151b23] text-[#9198a1]">
        <div className="container mx-auto py-6 px-4 flex flex-wrap w-[1280px] flex-col sm:flex-row items-center">
          <p className="text-xs text-center sm:text-left">© 2025 GitHub Inc.</p>
          <p className="text-xs text-center sm:text-left mx-2">Terms</p>
          <p className="text-xs text-center sm:text-left mx-2">Privacy (Updated 02/2024)</p>
          <p className="text-xs text-center sm:text-left mx-2">Sitemap</p>
          <p className="text-xs text-center sm:text-left mx-2">What is Git?</p>
          <p className="text-xs text-center sm:text-left mx-2">Manage cookies</p>
          <p className="text-xs text-center sm:text-left mx-2">Do not share my personal information</p>
          
          {/* Social Icons */}
          <span className="text-xl gap-4 inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {socialIcons.map((Icon, idx) => (
              <a key={idx}>
                <Icon />
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
