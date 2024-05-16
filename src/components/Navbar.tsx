import clsx from "clsx";
import React, { useState } from "react";
import ExpandMoreIcon from "../assets/img/expand-more.svg";
import { NavLink } from "./Links";
import { Button } from "./ui/button";
import Image from "next/image";

interface MenuItem {
  title: string;
  url: string;
  hasDropdown?: boolean;
  position: string;
  isButton?: boolean;
}

export interface NavbarProps {
  menuItems: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-body">
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between sm:hidden">
          <div className="space-x-6 flex items-center">
            {menuItems.map((item, index) =>
              item?.position === "left" && !item?.isButton ? (
                <NavLink key={index} className="flex">
                  {item.title}
                  {item.hasDropdown && (
                    <Image
                      src={ExpandMoreIcon}
                      alt="expand icon"
                      className="ml-1"
                    />
                  )}
                </NavLink>
              ) : (
                item?.position === "left" && (
                  <Button key={index} className="py-2.5">
                    {item.title}
                  </Button>
                )
              )
            )}
          </div>
          <div className="space-x-6 flex items-center">
            {menuItems.map((item, index) =>
              item?.position === "right" && !item?.isButton ? (
                <NavLink key={index} className="flex">
                  {item.title}
                  {item.hasDropdown && (
                    <Image
                      src={ExpandMoreIcon}
                      alt="expand icon"
                      className="ml-1"
                    />
                  )}
                </NavLink>
              ) : (
                item?.position === "right" && (
                  <Button key={index} className="py-2.5">
                    {item.title}
                  </Button>
                )
              )
            )}
          </div>
        </div>

        <div
          className={clsx(
            "hamburger sm:block md:hidden lg:hidden xl:hidden focus:outline-none",
            isOpen && "open"
          )}
          onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </div>

        <div
          className={clsx(
            "mobile-menu absolute flex-col items-center self-end py-8 mt-5 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md md:hidden lg:hidden xl:hidden",
            isOpen ? "flex" : "hidden"
          )}
        >
          {menuItems.map((item, index) => (
            <NavLink key={index} className="text-black text-2xl">
              {item.title}
            </NavLink>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
