import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <>
      <header className="flex flex-col">
        <div className="px-8 flex items-center justify-between bg-gray-900 text-gray-500">
          <div className="">
            <ul className="flex items-center gap-2 text-sm">
              <li className="font-medium text-white p-4 border-t-2 border-[#FF6636]">
                Home
              </li>
              <li className="font-medium p-4">Courses</li>
              <li className="font-medium p-4">About</li>
              <li className="font-medium p-4">Contact</li>
              <li className="font-medium p-4">Become an Instructor</li>
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <select name="currency" id="">
              <option value="usd" className="p-4">
                USD
              </option>
              <option value="euro">Euro</option>
            </select>
            <select
              name="language"
              className="p-2 rounded text-sm focus:outline-none"
            >
              <option value="usd">English</option>
              <option value="euro">Oromo</option>
            </select>
          </div>
        </div>
        <div className="px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="flex items-center gap-2 font-semibold text-2xl">
              <Image
                src="/icons/GraduationCap.svg"
                alt="logo"
                width={40}
                height={40}
              />
              E-tutor
            </h1>
            <div className="flex items-center gap-4">
              <Select defaultValue="browse">
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="browse">Browse</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center w-full max-w-sm border border-gray-300 rounded-md bg-white px-2">
                <Image
                  src="/icons/Search.svg"
                  alt="search"
                  className="text-gray-600"
                  width={24}
                  height={24}
                />
                <input
                  name="search"
                  type="text"
                  placeholder="What do you want to learn..."
                  className="flex-1 w-full bg-transparent border-none outline-none ring-0 focus:ring-0 focus:outline-none focus:border-none placeholder:text-gray-400 text-sm shadow-none h-10 px-2"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <Image
              src="/icons/Notification.svg"
              alt="notification"
              width={24}
              height={24}
            />
            <Image
              src="/icons/Heart.svg"
              alt="notification"
              width={24}
              height={24}
            />
            <Image
              src="/icons/Cart.svg"
              alt="notification"
              width={24}
              height={24}
            />
            <Button
              type="button"
              className="bg-[#FFEEE8] text-[#FF6636] rounded-none hover:bg-[#FF6636] hover:text-[#FFEEE8] cursor-pointer"
            >
              Create Account
            </Button>
            <Button
              type="button"
              className="bg-[#FF6636] rounded-none hover:text-[#FF6636] hover:bg-[#FFEEE8] cursor-pointer"
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
