"use client";
import React, { useState, useEffect } from 'react';
import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";
import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@/constants/assets';
import { useAtom } from 'jotai';
import { theme } from '@/hooks/Atoms';
import { usePathname } from 'next/navigation';

export default function Header({ darkFlag = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [themeState, setThemeState] = useState(darkFlag);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
        setThemeState(false)
      } else {
        setIsScrolled(false);
        setThemeState(darkFlag);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [siteTheme, setSiteTheme] = useAtom(theme)

  const toggleTheme = () => {
    setSiteTheme(siteTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`w-full flex justify-center ${isScrolled ? 'bg-white dark:bg-background/90 fixed top-0 z-50 shadow-lg border-b' : 'absolute'}`}>
      <div
        className={`py-2 md:py-1 flex flex-wrap justify-between items-center px-4 md:px-20 transition-all duration-300 z-50 w-full max-w-7xl`}>
        <Link href="/">
          <Image
            src={siteTheme === "light" ? themeState ? assets.logo_dark : assets.logo : assets.logo_dark}
            alt="logo"
            width={150}
            height={50}
            className='w-20 md:w-24'
          />
        </Link>
        <div className='flex items-center justify-center gap-3'>
          {pathname !== "/menu" &&(<Link href={"/menu"} className="dark:text-ktheme-500 text-gray-700 bg-ktheme-500 dark:bg-transparent font-bold text-sm md:text-lg py-2 px-6 md:px-8 rounded-lg border-0 dark:border-2 dark:border-ktheme-500">
            <span>Our Menu</span>
          </Link>)}
          <button className={`p-1 hover:dark:bg-gray-800/70 ${themeState ? "hover:bg-gray-800/70" : "hover:bg-gray-200"} rounded-xl`} onClick={toggleTheme}>
            {siteTheme === "light" ? <GoMoon size={30} className={themeState ? "text-white" : "text-black"} /> : <IoSunnyOutline size={30} color="white" />}
          </button>
        </div>
      </div>
    </div>
  );
}
