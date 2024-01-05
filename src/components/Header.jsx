import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex w-full justify-between px-5 lg:px-[130px] h-[56px] py-3 bg-transparent relative">
      <h2 className="text-[#25282B] text-[18px] font-[700]">Madelyn Torff</h2>
      <div className="gap-[48px] font-[500] text-[#25282B] text-[18px] hidden lg:flex">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contacts</a>
      </div>
      <GiHamburgerMenu
        size={24}
        onClick={() => {
          setIsOpen(true);
        }}
        className="lg:hidden text-zinc-700"
      />

      <div
        className={`w-[60vw] flex flex-col absolute top-0 ${
          isOpen ? "right-[0]" : "right-[-100%]"
        } min-h-[100vh] text-black bg-[#efd38c] ease-in-out duration-1000 lg:hidden`}
      >
        <RxCross2
          size={24}
          className="self-end mt-3 mr-5"
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <div className="flex flex-col pl-5 gap-3 font-semibold font-serif text-xl">
          <a
            href="#about"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Projects
          </a>
          <a
            href="#contacts"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Contacts
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
