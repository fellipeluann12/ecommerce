import React, { useEffect, useRef, useState } from "react";
import {
  IoLogOutOutline,
  IoSettingsOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";

interface Props {
  isOpen: boolean;
  setIsOpen: (param: boolean) => void;
  items: { iconType: string; text: string }[];
}

const DropDown: React.FC<Props> = ({ isOpen, items }) => {
  const renderIcon = (iconName: string | null) => {
    switch (iconName) {
      case "Logout":
        return <IoLogOutOutline className="text-2xl" />;
      case "Settings":
        return <IoSettingsOutline className="text-2xl" />;
      case "Profile":
        return <IoPersonCircleOutline className="text-2xl" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } absolute right-0 top-12 z-40 w-52 rounded-md bg-white shadow-md transition-transform duration-300 ease-in-out`}
    >
      <div className="px-2">
        <ul className="divide-y divide-gray-200">
          {items.map((item, index) => (
            <li key={index} className="py-1">
              <div className="flex cursor-pointer items-center gap-2 py-1 pl-6 hover:bg-gray-100">
                {renderIcon(item.iconType)}
                <span className="text-sm font-light">{item.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
