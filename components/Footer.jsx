import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-center items-center h-10 text-gray-400 font-light">
      ©{currentYear} Andrew Essam, All rights reserved.
    </div>
  );
};

export default Footer;
