import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { HiMenuAlt3 } from "react-icons/hi";
import Logo from "./Logo";
import NavBar from "./NavBar";

const MobileNavBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <HiMenuAlt3 className="text-accent text-[30px]" />
      </SheetTrigger>
      <SheetContent className="pt-20 flex flex-col items-center gap-10">
        <Logo />
        <NavBar flexCol={true} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;
