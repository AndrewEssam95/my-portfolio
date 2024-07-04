import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <span className="text-accent font-semibold tracking-wide text-xl">
        Andrew<span className="font-light text-white">Essam</span>
      </span>
    </Link>
  );
};

export default Logo;
