import CustomLink from "./subcomponents/CustomLink";
import { Github, Linkedin, Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import CustomLinkMobile from "./subcomponents/CustomLinkMobile";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-end relative sm:px-8 md:px-12 xl:px-24 lg:px-16">
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex gap-10">
          <CustomLink to="/" title="Home" onClick={handleLinkClick} />
          <CustomLink to="/about" title="About" onClick={handleLinkClick} />
          <CustomLink
            to="/projects"
            title="Projects"
            onClick={handleLinkClick}
          />
        </nav>
        <div className="flex gap-5">
          <a
            href="https://github.com/ShashwatK07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border-2 border-solid border-black rounded-lg p-1 hover:text-white hover:bg-black">
              <Github />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/shashwat-kapoor-28b0b31b4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border-2 border-solid border-black rounded-lg p-1 hover:text-white hover:bg-black">
              <Linkedin />
            </div>
          </a>
        </div>
      </div>
      <button onClick={handleToggleMenu} className="hidden lg:flex">
        <Menu />
      </button>
      {toggleMenu && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vh] sm:min-w-[70%] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-black/85 text-white rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col gap-5 items-center">
            <CustomLinkMobile to="/" title="Home" toggle={handleLinkClick} />
            <CustomLinkMobile
              to="/about"
              title="About"
              toggle={handleLinkClick}
            />
            <CustomLinkMobile
              to="/projects"
              title="Projects"
              toggle={handleLinkClick}
            />

            <a
              href="https://github.com/ShashwatK07"
              target="_blank"
              onClick={handleLinkClick}
            >
              <div>
                <Github />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/shashwat-kapoor-28b0b31b4/"
              target="_blank"
              onClick={handleLinkClick}
            >
              <div>
                <Linkedin />
              </div>
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
