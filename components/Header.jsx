import React from "react";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center h-16 py-8 xl:py-0 px-4">
      <Logo />
      <div className="hidden xl:flex gap-16">
        <NavBar />
        <Button>Hire Me</Button>
      </div>
      <div className="xl:hidden">
        <MobileNavBar />
      </div>
    </header>
  );
};

export default Header;
