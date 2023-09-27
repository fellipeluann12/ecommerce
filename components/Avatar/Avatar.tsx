import React, { useState } from "react";
import { HiUserCircle } from "react-icons/hi2";

function Avatar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative border-l-1 border-neutral-300 pl-4">
      <div
        className="flex-shrink-0 rounded-lg border border-neutral-300 px-1 py-1 hover:cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <HiUserCircle className="text-3xl transition duration-300 ease-in-out hover:text-gray-500" />
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 top-12 z-40 w-2 transform rounded-md bg-white p-10 shadow-md transition-transform duration-300 ease-in-out`}
      ></div>
    </div>
  );
}

export default Avatar;
