import React from "react";
import { NavItem } from "../../nav-elem/NavItem";
import { Button } from "../../ui/Button";
const Hamburger = ({ isOpen = false }) => {
  return (
    <React.Fragment>
      <div
        className={`absolute top-0 left-0 right-0 bg-[black] w-[100%] tablet:w-1/2 opacity-50 z-10 min-h-[150vh] ${
          isOpen ? "flex" : "hidden"
        }`}
      ></div>
      <div
        className={`absolute top-0 right-0 bg-[#7862e5] justify-center w-1/2 z-20 opacity-90 min-h-[150vh] ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <nav className="my-[150px] mx-5 text-center space-y-5 text-lg">
          <NavItem text="Home" />
          <NavItem text="Pricing" />
          <NavItem text="Contact" />
          <Button
            text="login"
            styles={
              "w-[132px] h-[36px] uppercase rounded-[30px] text-[white] font-[500] hover:font-[700] hover:bg-[white] hover:text-[#bf71f6]"
            }
          ></Button>
          <Button
            text="sign up"
            styles={
              "w-[132px] h-[36px] text-[#bf71f6] bg-white rounded-[30px] px-[16px] py-[5px] uppercase font-[500] hover:bg-transparent"
            }
          ></Button>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Hamburger;
