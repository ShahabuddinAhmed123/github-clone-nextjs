import React from "react";
import { FOOTER_DATA } from "../constants/Footer";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaTwitch,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  const socialIcons = [
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaXTwitter,
    FaTwitch,
    FaGithub,
  ];

  return (
    <footer className="text-gray-600 body-font pt-10 bg-[#0d1117]">
      <div className=" px-4 w-[1280px] py-8 mb-8 mx-auto flex max-[1280px]:w-full max-lg:flex-col max-lg:px-10 max-sm:px-4">
        <div className="w-[416px] flex-shrink-0 md:mx-0 mx-auto md:text-left max-lg:w-full max-lg:mb-8">
          <a className="flex title-font font-medium items-center md:justify-start text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 367.4 90"
              className="footer-logo-mktg d-block"
              height="30"
            >
              <g fill="white">
                <path d="m46.1 0c-25.5 0-46.1 20.6-46.1 46.1 0 20.4 13.2 37.7 31.5 43.8 2.3.4 3.2-1 3.2-2.2 0-1.1-.1-4.7-.1-8.6-11.6 2.1-14.6-2.8-15.5-5.4-.5-1.3-2.8-5.4-4.7-6.5-1.6-.9-3.9-3-.1-3.1 3.6-.1 6.2 3.3 7.1 4.7 4.2 7 10.8 5 13.4 3.8.4-3 1.6-5 2.9-6.2-10.3-1.2-21-5.1-21-22.8 0-5 1.8-9.2 4.7-12.4-.5-1.2-2.1-5.9.5-12.2 0 0 3.9-1.2 12.7 4.7 3.7-1 7.6-1.6 11.5-1.6s7.8.5 11.5 1.6c8.8-6 12.7-4.7 12.7-4.7 2.5 6.3.9 11.1.5 12.2 2.9 3.2 4.7 7.3 4.7 12.4 0 17.7-10.8 21.6-21.1 22.8 1.7 1.4 3.1 4.2 3.1 8.5 0 6.2-.1 11.1-.1 12.7 0 1.2.9 2.7 3.2 2.2 18.2-6.1 31.4-23.4 31.4-43.8.3-25.4-20.4-46-45.9-46z"></path>
                <path d="m221.6 67.1h-.1zm0 0c-.5 0-1.8.3-3.2.3-4.4 0-5.9-2-5.9-4.6v-17.5h8.9c.5 0 .9-.4.9-1.1v-9.5c0-.5-.4-.9-.9-.9h-8.9v-11.7c0-.4-.3-.7-.8-.7h-12c-.5 0-.8.3-.8.7v12.1s-6.1 1.5-6.5 1.6-.7.5-.7.9v7.6c0 .6.4 1.1.9 1.1h6.2v18.3c0 13.6 9.5 15 16 15 3 0 6.5-.9 7.1-1.2.3-.1.5-.5.5-.9v-8.4c.1-.6-.3-1-.8-1.1zm132.2-12.2c0-10.1-4.1-11.4-8.4-11-3.3.2-6 1.9-6 1.9v19.6s2.7 1.9 6.8 2c5.8.2 7.6-1.9 7.6-12.5zm13.6-.9c0 19.1-6.2 24.6-17 24.6-9.1 0-14.1-4.6-14.1-4.6s-.2 2.6-.5 2.9c-.2.3-.4.4-.8.4h-8.3c-.6 0-1.1-.4-1.1-.9l.1-62c0-.5.4-.9.9-.9h11.9c.5 0 .9.4.9.9l-.1 20.9s4.6-3 11.3-3h.1c6.8-0 16.7 2.5 16.7 21.7zm-48.7-20.2h-11.7c-.6 0-.9.4-.9 1.1v30.3s-3.1 2.2-7.3 2.2-5.4-1.9-5.4-6.1v-26.5c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v28.5c0 12.3 6.9 15.3 16.3 15.3 7.8 0 14.1-4.3 14.1-4.3s.3 2.2.4 2.5.5.5.9.5h7.5c.6 0 .9-.4.9-.9l.1-41.7c-.1-.4-.6-.9-1.2-.9zm-132.2 0h-11.9c-.5 0-.9.5-.9 1.1v40.9c0 1.1.7 1.5 1.7 1.5h10.7c1.1 0 1.4-.5 1.4-1.5v-41.1c0-.5-.5-.9-1-.9zm-5.8-18.9c-4.3 0-7.7 3.4-7.7 7.7s3.4 7.7 7.7 7.7c4.2 0 7.6-3.4 7.6-7.7s-3.4-7.7-7.6-7.7zm92-1.4h-11.8c-.5 0-.9.4-.9.9v22.8h-18.5v-22.7c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v62c0 .5.5.9.9.9h11.9c.5 0 .9-.4.9-.9v-26.6h18.5l-.1 26.5c0 .5.4.9.9.9h11.9c.5 0 .9-.4.9-.9v-62c0-.4-.4-.9-.9-.9zm-105.3 27.5v32c0 .2-.1.6-.3.7 0 0-7 5-18.5 5-13.9 0-30.3-4.4-30.3-33 0-28.7 14.4-34.6 28.4-34.5 12.2 0 17.1 2.7 17.8 3.2.2.3.3.5.3.8l-2.3 9.9c0 .5-.5 1.1-1.1.9-2-.6-5-1.8-12.1-1.8-8.2 0-17 2.3-17 20.8s8.4 20.6 14.4 20.6c5.1 0 7-.6 7-.6v-12.8h-8.2c-.6 0-1.1-.4-1.1-.9v-10.3c0-.5.4-.9 1.1-.9h20.9c.6-.1 1 .4 1 .9z"></path>
              </g>
            </svg>
          </a>
          <p className="text-sm text-white font-semibold mt-7">
            Subscribe to our developer newsletter
          </p>
          <p className="text-[#9198a1] text-sm mb-4">
            Get tips, technical guides, and best practices. Twice a month. Right
            in your inbox.
          </p>
          <button className="w-[122px] py-3 px-6 text-white font-semibold border border-gray-600 rounded-md hover:border-2 hover:scale-[0.999] hover:border-stone-300 transition-all duration-300">
            Subscribe
          </button>
        </div>

        <div className="container flex md:mt-0 mt-10 text-sm text-[#9198a1] flex-shrink max-sm:flex-wrap">
          {Object.entries(FOOTER_DATA[0]).map(([category, items], index) => (
            <div key={index} className="h-auto w-3/12 pl-6 max-sm:w-1/2 max-sm:pl-0 max-sm:pr-4">
              <h2 className="text-sm mb-4">{category}</h2>
              <nav className="list-none mb-10">
                {items.map((item, subIndex) => (
                  <li
                    key={subIndex}
                    className="mb-4"
                  >
                    <a href="#" className=" hover:text-blue-500 hover:underline cursor-pointer ">{item}</a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#151b23] text-[#9198a1]">
        <div className=" mx-auto py-6 px-4 flex w-[1280px] flex-col sm:flex-row max-sm:items-start items-center max-[1280px]:w-full">
          <div className="h-auto w-fit flex flex-wrap">
          <p className="text-xs text-center sm:text-left">© 2025 GitHub Inc.</p>
          <p className="text-xs text-center sm:text-left mx-2">Terms</p>
          <p className="text-xs text-center sm:text-left mx-2">
            Privacy (Updated 02/2024)
          </p>
          <p className="text-xs text-center sm:text-left mx-2">Sitemap</p>
          <p className="text-xs text-center sm:text-left mx-2">What is Git?</p>
          <p className="text-xs text-center sm:text-left mx-2">
            Manage cookies
          </p>
          <p className="text-xs text-center sm:text-left mx-2">
            Do not share my personal information
          </p>
          </div>

          <span className="text-xl gap-4 inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start w-fit">
            {socialIcons.map((Icon, idx) => (
              <a key={idx} className="cursor-pointer hover:text-[#616161]">
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
