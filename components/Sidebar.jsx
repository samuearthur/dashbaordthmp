import React from "react";
import Link from "next/link";
import Images from "next/image";
import { RxDashboard, RxPerson, RxSketchLogo } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-blue-700 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

          <Link href="/">
            <div className="bg-blue-700 text-white p-3 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

          <Link href="/users">
            <div className="bg-blue-700 text-white p-3 rounded-lg inline-block">
              <RxPerson size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-1"></span>

          <Link href="/orders">
            <div className="bg-blue-700 text-white p-3 rounded-lg inline-block">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-1"></span>

          <Link href="/settings">
            <div className="bg-blue-700 text-white p-3 rounded-lg inline-block">
              <FiSettings size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-1"></span>
        </div>
      </div>
      <main className="ml-50 w-full"></main>
    </div>
  );
};

export default Sidebar;
