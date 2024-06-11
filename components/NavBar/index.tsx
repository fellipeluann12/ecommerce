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
    <nav className="w-ful fixed left-0 top-0 z-50 w-full bg-neutral-100 py-2 shadow-sm">
      <header className="flex h-full flex-col items-center gap-2 space-x-5 px-10 md:flex-row md:gap-0">
        <Link href="/" legacyBehavior>
          <span className="flex-shrink-0 cursor-pointer text-3xl font-bold text-black">
            WR STORE
          </span>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="min-w-100px relative flex w-full flex-1"
        >
          <input
            className="w-full rounded-lg border bg-white px-4 py-2 outline-none placeholder:text-neutral-500"
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
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Link
              href={"/basket"}
              className="space-x-2 rounded-lg border border-neutral-300 px-1 py-1 transition duration-300 ease-in-out hover:text-gray-500"
            >
              <CiShoppingCart size={33} />
            </Link>
            <div>
              <p className="text-xs">No items</p>
              <p className="font-bold">$0.00</p>
            </div>
          </div>
          <div className="flex-shrink-0 rounded-lg border border-neutral-300 px-1 py-1 hover:cursor-pointer">
            <IoNotificationsOutline className="text-3xl transition duration-300 ease-in-out hover:text-gray-500" />
          </div>
          <Avatar />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
