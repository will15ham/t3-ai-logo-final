import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Nav: React.FC = () => {
  const { data: sessionData } = useSession();
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
        <button
          className="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? "Sign out" : "Get Started!"}
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
