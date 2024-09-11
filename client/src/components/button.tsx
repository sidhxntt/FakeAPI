"use client";
import Link from "next/link";

const Button = () => {
  return (
    <Link 
    className="z-50"
    href="#usage">
     <button
    className="mt-6 z-50 shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
      Get Started
    </button>
    </Link>
   
  );
};

export default Button;
