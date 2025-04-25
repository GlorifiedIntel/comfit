"use client";
import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();
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

        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs px-4 py-1.5 bg-red-500 rounded-full"
          >
            Admin Dashboard
          </button>
        )}
      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        {
        user 
        ? <>
          <UserButton>
             <UserButton.MenuItems>
              <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={()=> router.push('/cart')}/>
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={()=> router.push('/my-orders')}/>
            </UserButton.MenuItems>
          </UserButton>
          </>
        : <button
            onClick={openSignIn}
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
            Account Login
          </button>
        }
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push("/seller")} className="text-xs border px-4 py-1.5 rounded-full">Admin Dashboard</button>}
        {
        user 
        ? <>
          <UserButton>
          <UserButton.MenuItems>
              <UserButton.Action label="Home" labelIcon={<HomeIcon />} onClick={()=> router.push('/')}/>
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action label="Products" labelIcon={<BoxIcon />} onClick={()=> router.push('/all-products')}/>
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={()=> router.push('/cart')}/>
            </UserButton.MenuItems>
            <UserButton.MenuItems>
              <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={()=> router.push('/my-orders')}/>
            </UserButton.MenuItems>
          </UserButton>
          </>
        : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-green-400 transition">
            <Image src={assets.user_icon} alt="user icon" />Account Login</button>}
      </div>
    </nav>
  );
};

export default Navbar;
