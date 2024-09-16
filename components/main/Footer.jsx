import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from 'next/link'; // Using Next.js Link component

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
                <span className="text-[15px] ml-[6px]">YouTube</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">GitHub</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Discord</span>
              </a>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="https://www.instagram.com"  className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                <RxInstagramLogo />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <RxTwitterLogo />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </a>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <Link href="/sponsor" legacyBehavior>
                <a>
                  <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                </a>
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <Link href="/about" legacyBehavior>
                <a>
                  <span className="text-[15px] ml-[6px]">Learning about me</span>
                </a>
              </Link>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="mailto:sabbaghmouayed@gmail.com">
                <span className="text-[15px] ml-[6px]">sabbaghmouayed@gmail.com</span>
              </a>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; WebChain Dev 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
