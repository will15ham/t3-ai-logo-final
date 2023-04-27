import React, { useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Nav: React.FC = () => {
  const { data: sessionData } = useSession();
  const [toggleNav, setNav] = useState<boolean>(false);

  return (
    <nav className="fixed left-0 top-0 z-20 w-full bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold text-white md:text-2xl">
            AI Logo Gen
          </span>
        </Link>
        <div className="flex">
          <button
            onClick={() => setNav(!toggleNav)}
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden"
          >
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
          </button>
        </div>
        <div
          className={
            !toggleNav
              ? "hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
              : "w-full items-center justify-between md:flex md:w-auto md:justify-center"
          }
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-700 bg-gray-800 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-gray-900 md:p-0">
            <li>
              <Link
                href="/"
                className="text-whitemd:bg-transparent block rounded py-2 pl-3 pr-4 md:p-0"
                onClick={() => setNav(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/generate"
                className="block rounded py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0"
                onClick={() => setNav(false)}
              >
                Generate
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="block rounded py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0"
                onClick={() => setNav(false)}
              >
                Community
              </Link>
            </li>
            <li>
              <button
                className="block rounded py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0"
                onClick={
                  sessionData ? () => void signOut() : () => void signIn()
                }
              >
                {sessionData ? "Sign out" : "Sign in"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
