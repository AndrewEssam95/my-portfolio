"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { title: "home", path: "/" },
  { title: "resume", path: "/resume" },
  { title: "work", path: "/work" },
  { title: "contact", path: "/contact" },
];

const NavBar = ({ flexCol = false }) => {
  const pathName = usePathname();

  return (
    <nav className={`flex items-center gap-8 ${flexCol && "flex-col"}`}>
      {pages.map((page, index) => (
        <Link
          key={index}
          href={page.path}
          className={`capitalize transition-all dark:hover:text-accent-hover hover:text-primary/50 ${
            pathName === page.path &&
            `border-b-2 bg:border-accent border-primary dark:border-accent text-primary dark:text-accent`
          }`}>
          {page.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
