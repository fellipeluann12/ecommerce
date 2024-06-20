"use client";

import Link from "next/link";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import Avatar from "../Avatar";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.input.value;
    router.push(`/search?q=${input}`);
  };

  return (
    <header className="sticky left-0 top-0 z-50 w-full bg-neutral-100 shadow-sm">
      <div className="items-center gap-2 px-10 py-2 md:flex md:flex-row md:gap-0 md:space-x-5">
        <Link href="/" legacyBehavior>
          <span className="flex-shrink-0 cursor-pointer text-3xl font-bold text-black">
            WR STORE
          </span>
        </Link>
        <input className="peer hidden" type="checkbox" id="navbar-open" />
        <label
          className="absolute right-3 mt-2.5 cursor-pointer text-xl md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.88em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </label>

        <nav className="hidden w-full gap-y-4 py-6 peer-checked:block md:block md:py-0">
          <ul className="flex flex-col items-center gap-y-3 sm:gap-x-8 md:flex-row">
            <li className="w-full">
              <form
                onSubmit={handleSubmit}
                className="min-w-100px relative flex w-full flex-1"
              >
                <input
                  className="w-full rounded-lg border bg-white px-4 py-1 outline-none placeholder:text-neutral-500"
                  type="text"
                  name="input"
                  placeholder="Search for products..."
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mr-3 flex h-full items-center"
                >
                  <IoSearchOutline className="" />
                </button>
              </form>
            </li>
            <li className="mt-2 sm:mt-0">
              <button
                className="min-w-114px items-center rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-white focus:outline-none focus:ring"
                type="button"
              >
                Login
              </button>
            </li>
            <li>
              <button
                className="min-w-114px inline-flex justify-center gap-1.5 rounded-lg bg-primary px-5 py-2 font-medium text-white transition hover:bg-opacity-80 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium"> Register </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
