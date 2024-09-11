import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-[#0a0a0a] backdrop-blur-md mb-12 p-4 z-50">
      <div className="flex items-center justify-end p-4 mx-auto max-w-7xl">
        <div className="flex items-center space-x-6">
          <Link className="text-white" href="https://x.com/sidhxntt" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </Link>
          <Link className="text-white" href="https://github.com/sidhxntt" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </Link>
          <Link className="text-white" href="https://www.linkedin.com/in/siddhant-gupta-885384239/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
          <Link className="text-white" href="https://www.instagram.com/siddhant.xo/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
