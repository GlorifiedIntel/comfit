"use client"
import React from "react";
import { assets} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const Navbar = () => {

  const { isSeller, router } = useAppContext();

  return (
    <nav className="flex items-center justify-between bg-sky-950 px-6 md:px-16 lg:px-32 py-3 h-20 text-lg text-white">
    <Link
        href="/"
        className="text-2xl font-bold cursor-pointer logo"
        onClick={() => router.push("/")}
      >
        Comfit Optics
      </Link>
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-amber-500 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-amber-500 transition">
          Shop
        </Link>
        <Link href="/about" className="hover:text-amber-500 transition">
          About Us
        </Link>
        <Link href="/" className="hover:text-amber-500 transition">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs px-4 py-1.5 bg-red-500 rounded-full">Admin Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        <button className="flex items-center gap-2 hover:text-green-400 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Admin Dashboard</button>}
        <button className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;