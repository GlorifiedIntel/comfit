import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center bg-sky-950 text-white px-6 md:px-16 lg:px-32 gap-10 py-14 text-gray-500">
        <div className="w-4/5">
        <Link href="/" className="text-2xl font-bold cursor-pointer logo" onClick={() => router.push("/")}> Comfit Optics </Link>
          <p className="mt-6 text-sm">
          Comfit Optics is a trusted optical store located in Abuja, Nigeria, dedicated to providing 
          high-quality eye care solutions. Specializing in prescription glasses, contact lenses, and stylish 
          eyewear, Comfit Optics combines professional eye examinations with a wide selection of frames to suit 
          every style and budget.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5 text-green-400">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">About us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contact us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5 text-green-400">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+234-234-567-890</p>
              <p>contact@comfitoptics.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center bg-stone-900 text-neutral-300 text-xs md:text-sm copyright">
        Copyright 2025 © Comfit Optics All Right Reserved. Designed &amp; Developed by{" "} <a href="https://eternal.link" target="_blank"  rel="noopener noreferrer"
    className="text-amber-400 hover:underline"
  > Kevin Cross Minchakpu </a> </p>
      
    </footer>
  );
};

export default Footer;