"use client";

import header from "@/data/header.json";
import cx from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 768) {
      setShowMenu(false);
    }
  }, [size.width]);
  return (
    <nav className="flex w-screen items-center justify-between sm:justify-center p-6 border-b">
      <ul
        className={cx(
          "flex top-0 right-0 bg-white flex-col sm:translate-y-0 sm:flex-row duration-150 w-full justify-center sm:justify-between max-w-3xl items-center absolute sm:relative h-screen sm:h-full",
          showMenu ? "translate-y-visible-menu" : "translate-y-hidden-menu"
        )}
      >
        {header.menuItems.map((item, index) => (
          <li
            className="flex items-center group py-6 justify-center tracking-tighter relative text-sub-title "
            key={index}
          >
            <Link className="font-coolvetica" href={item.url}>
              {item.label}
            </Link>
            <div className="bg-highlight-green h-[.1rem] left-0 absolute group-hover:w-full w-0 duration-300 p-0"></div>
          </li>
        ))}
      </ul>
      <div className="relative sm:hidden font-coolvetica uppercase text-sub-title cursor-pointer">
        <Link href="/">Tennis Academy</Link>
      </div>
      <span
        className="material-symbols-outlined sm:hidden relative cursor-pointer"
        onClick={toggleMenu}
      >
        {showMenu ? "close" : "menu"}
      </span>
    </nav>
  );
};

export default Header;
