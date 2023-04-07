import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="px-4b fixed flex h-[80px] w-screen items-center justify-between font-bold">
      <ul className="flex w-full items-center justify-center gap-10">
        <li className="hover:text-cyan-200">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-cyan-200">
          <Link href="/generate">Generate</Link>
        </li>
        <li className="hover:text-cyan-200">
          <Link href="/community">Community</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
