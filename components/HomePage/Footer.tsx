import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Footer = () => {
  return (
    <section className="flex flex-col gap-20 bg-gray-900 text-white">
      <div className="max-w-[1320px] mx-auto gap-20">
        <div className="flex items-center justify-between py-20 gap-10">
          <div className="flex flex-col gap-6 w-[600px]">
            <p className="font-semibold text-[40px]">
              Start learning with 67.1k students around the world.
            </p>
            <div className="flex gap-4">
              <Button
                type="button"
                className="px-8 py-6 bg-[#FF6636] hover:text-[#FF6636] hover:bg-gray-50 cursor-pointer"
              >
                Join The Family
              </Button>
              <Button
                type="button"
                className="px-8 py-6 bg-gray-700 hover:text-[#FF6636] hover:bg-gray-50 cursor-pointer"
              >
                Join The Family
              </Button>
            </div>
          </div>
          <div className="flex justify-between gap-10 w-[600px]">
            <div className="">
              <p className="font-semibold text-[40px]">6.3K</p>
              <p className="text-gray-600 font-medium text-sm">
                Online Courses
              </p>
            </div>
            <div className="">
              <p className="font-semibold text-[40px]">26K</p>
              <p className="text-gray-600 font-medium text-sm">
                Certified Instructors
              </p>
            </div>
            <div className="">
              <p className="font-semibold text-[40px]">99.9%</p>
              <p className="text-gray-600 font-medium text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-800" />
      <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-5">
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/GraduationCap.svg"
              alt="logo"
              width={46}
              height={46}
            />{" "}
            <span className="text-4xl">E-tutor</span>
          </div>
          <p className="text-gray-500 text-sm">
            Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
            mattis odio at.
          </p>
          <ul className="flex items-center gap-2">
            <li className="bg-[#363B47] p-3 hover:bg-[#FF6636] cursor-pointer">
              <Facebook className="fill-white" />
            </li>
            <li className="bg-[#363B47] p-3 hover:bg-[#FF6636] cursor-pointer">
              <Instagram className="stroke-white" />
            </li>
            <li className="bg-[#363B47] p-3 hover:bg-[#FF6636] cursor-pointer">
              <Linkedin className="fill-white" />
            </li>
            <li className="bg-[#363B47] p-3 hover:bg-[#FF6636] cursor-pointer">
              <Twitter className="fill-white" />
            </li>
            <li className="bg-[#363B47] p-3 hover:bg-[#FF6636] cursor-pointer">
              <Youtube className="stroke-white" />
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-sm">TOP 4 CATEGORY</p>
          <ul className="flex flex-col gap-5">
            <li className="text-gray-500">Development</li>
            <li className="text-gray-500">Finance & Accounting</li>
            <li className="text-gray-500">Design</li>
            <li className="text-gray-500">Business</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-sm">Quick Links</p>
          <ul className="flex flex-col gap-5">
            <li className="text-gray-500">About</li>
            <li className="text-gray-500">Become Instructor</li>
            <li className="text-gray-500">Contact</li>
            <li className="text-gray-500">Career</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-sm">SUPPORT</p>
          <ul className="flex flex-col gap-5">
            <li className="text-gray-500">Help Center</li>
            <li className="text-gray-500">FAQs</li>
            <li className="text-gray-500">Terms & Conditions</li>
            <li className="text-gray-500">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-sm uppercase">Download Our App</p>
          <div className="py-3 px-4 flex gap-2 bg-gray-700">
            <Image
              src="/icons/Apple.svg"
              alt="App Store"
              width={28}
              height={28}
            />
            <div className="">
              <p className="text-[10px]">Download Now</p>
              <p className="text-base font-medium uppercase">App Store</p>
            </div>
          </div>
          <div className="py-3 px-4 flex gap-2 bg-gray-700">
            <Image
              src="/icons/PlayStore.svg"
              alt="Play Store"
              width={28}
              height={28}
            />
            <div className="">
              <p className="text-[10px]">Download Now</p>
              <p className="text-base font-medium uppercase">Play Store</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-800" />
      <div className="max-w-[1320px] mx-auto p-6 flex items-center justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()} - Eduflex. Designed by Templatecookie.
          All rights reserved
        </p>
        <Select defaultValue="english">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
};

export default Footer;
