import { Logo } from "./Logo/Logo";
import { NavItem } from "../nav-elem/NavItem";
import { Button } from "../ui/Button";
import MenuIconClose from "./hamburger/MenuIconClose";
import MenuIconOpen from "./hamburger/MeunIconOpen";
import { useState } from "react";
import Hamburger from "./hamburger/Hamburger";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="justify-between md:h-10 flex items-center">
      <Logo />
      <nav className="hidden md:flex space-x-[77px] basis-1/3 justify-center">
        <NavItem text="Home" />
        <NavItem text="Pricing" />
        <NavItem text="Contact" />
      </nav>
      <div className="hidden md:flex space-x-[18px] justify-center  basis-1/3 ">
        <Button
          text="login"
          styles={
            "w-[132px] h-[36px] uppercase text-[white] font-[500] hover:font-[700]"
          }
        ></Button>
        <Button
          text="sign up"
          styles={
            "w-[132px] h-[36px] text-[#bf71f6] bg-white rounded-[30px] px-[16px] py-[5px] uppercase font-[500] hover:bg-transparent hover:font-[700] hover:text-[white]"
          }
        ></Button>
      </div>
      <div className="md:hidden z-30" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <MenuIconClose /> : <MenuIconOpen />}
      </div>
      <Hamburger isOpen={isOpen} />
    </header>
  );
};
