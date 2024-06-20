import React, { useEffect, useRef, useState } from "react";
import { HiUserCircle } from "react-icons/hi2";
import DropDown from "../Dropdown";

interface Props {}

const Avatar: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (isOpen === false) {
        return;
      }

      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isOpen]);

  const dropDownItems = [
    { iconType: "Profile", text: "Profile" },
    { iconType: "Settings", text: "Settings" },
    { iconType: "Logout", text: "Logout" },
  ];

  return (
    <div className="relative border-l-1 border-neutral-300 pl-2" ref={menuRef}>
      <div
        className="flex-shrink-0 rounded-lg border border-neutral-300 px-1 py-1 hover:cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <HiUserCircle className="text-3xl transition duration-300 ease-in-out hover:text-gray-500" />
      </div>
      <DropDown isOpen={isOpen} setIsOpen={setIsOpen} items={dropDownItems} />
    </div>
  );
};

export default Avatar;
