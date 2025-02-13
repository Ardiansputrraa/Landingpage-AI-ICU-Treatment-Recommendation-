import React from "react";
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 p-10">
      {/* Bagian Atas - Sosial Media */}
      <div className="flex justify-between items-center border-b border-gray-800 pb-5">
        <div className="text-lg font-semibold text-gray-400">Follow us</div>
        <div className="flex space-x-4">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-all duration-300 shadow-lg shadow-[#2A0E61]/50 hover:text-[#E4405F] hover:scale-110 hover:-translate-y-1"
          >
            <RxInstagramLogo size={24} />
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors duration-300 shadow-lg shadow-[#2A0E61]/50 hover:scale-110 hover:-translate-y-1"
          >
            <RxLinkedinLogo size={24} />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300 shadow-lg shadow-[#2A0E61]/50 hover:scale-110 hover:-translate-y-1"
          >
            <RxGithubLogo size={24} />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-red-600 transition-colors duration-300 shadow-lg shadow-[#2A0E61]/50 hover:scale-110 hover:-translate-y-1"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>

      {/* Bagian Tengah - Informasi */}
      <div className="grid grid-cols-3 gap-10 py-10">
        {/* About */}
        <div>
          <h3 className="font-bold text-lg text-gray-400">About</h3>
          <ul className="mt-6 space-y-2 text-gray-500 text-sm">
            <li>
              <a className="hover:text-gray-200" href="">
                PRIMA
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="">
                SENUSA
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="">
                ASHOKA
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="">
                DENTALEDU
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="">
                VEUME
              </a>
            </li>
          </ul>
        </div>

        {/* Learn More */}
        <div>
          <h3 className="font-bold text-lg text-gray-400">Product</h3>
          <ul className="mt-6 space-y-2 text-gray-500 text-sm">
            <li>
              <a className="hover:text-gray-200" href="">
                PRIMA
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="">
                SENUSA
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="">
                ASHOKA
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="">
                DENTALEDU
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="">
                VEUME
              </a>
            </li>
          </ul>
        </div>

        {/* Form Subscribe */}
        <div className="gap-4">
          <h3 className="font-bold text-lg text-gray-400">
            Sign up for updates on our latest innovations
          </h3>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-2 bg-transparent border border-gray-700 rounded-md text-white"
            />
            <p className="text-sm text-gray-600 mt-4">
              I accept Google&apos;s Terms and Conditions and acknowledge that
              my information will be used in accordance with Google&apos;s
              Privacy Policy.
            </p>
            <button className="w-full mt-6 p-2 bg-gray-900 hover:bg-gray-800 transition py-2 rounded-xl">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Bagian Bawah - Copyright */}
      <div className="border-t border-gray-800 pt-5 text-center">
        <p className="text-sm text-gray-600 space-x-4">
          &copy; PRIMA Dev 2025 Inc. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
