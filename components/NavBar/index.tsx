"use client";

import Link from "next/link";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import Avatar from "../Avatar";

const Navbar: React.FC = () => {
  return (
    <nav className="h-16 py-2">
      <div className="mx-auto flex h-full items-center justify-between px-10 ">
        <Link href="/" legacyBehavior>
          <a className="flex-shrink-0 cursor-pointer text-3xl font-bold text-black">
            WR STORE
          </a>
        </Link>
        <div className="flex w-96 justify-center">
          <form className="min-w-100px relative lg:w-full">
            <input
              className="w-full rounded-lg border bg-white px-4 py-2 pr-9 outline-none placeholder:text-neutral-500"
              type="text"
              placeholder="Search for products..."
            />
            <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
              <IoSearchOutline className="" />
            </div>
          </form>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2">
            <div className="flex-shrink-0 rounded-lg border border-neutral-300 px-1 py-1 hover:cursor-pointer">
              <CiShoppingCart className="text-3xl transition duration-300 ease-in-out hover:text-gray-500" />
            </div>
            <div className="flex-shrink-0 rounded-lg border border-neutral-300 px-1 py-1 hover:cursor-pointer">
              <IoNotificationsOutline className="text-3xl transition duration-300 ease-in-out hover:text-gray-500" />
            </div>
          </div>
          <Avatar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
