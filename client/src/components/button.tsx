"use client";
import { useRouter } from "next/navigation"; // Use next/navigation for App Router

const Button = () => {
  const router = useRouter();
  
  const scrollToSection = () => {
    router.push("#usage"); // Navigate to the section with id 'usage'
  };

  return (
    <button
      onClick={scrollToSection}
      className="mt-6 z-50 shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
    >
      Get Started
    </button>
  );
};

export default Button;