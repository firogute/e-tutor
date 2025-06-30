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
  // Data for reusable sections
  const stats = [
    { value: "6.3K", label: "Online Courses" },
    { value: "26K", label: "Certified Instructors" },
    { value: "99.9%", label: "Success Rate" },
  ];

  const categories = [
    "Development",
    "Finance & Accounting",
    "Design",
    "Business",
  ];

  const quickLinks = ["About", "Become Instructor", "Contact", "Career"];

  const supportLinks = [
    "Help Center",
    "FAQs",
    "Terms & Conditions",
    "Privacy Policy",
  ];

  const socialIcons = [
    { icon: <Facebook className="fill-white" />, name: "Facebook" },
    { icon: <Instagram className="stroke-white" />, name: "Instagram" },
    { icon: <Linkedin className="fill-white" />, name: "LinkedIn" },
    { icon: <Twitter className="fill-white" />, name: "Twitter" },
    { icon: <Youtube className="stroke-white" />, name: "YouTube" },
  ];

  const appStores = [
    {
      icon: "/icons/Apple.svg",
      alt: "App Store",
      downloadText: "Download Now",
      name: "App Store",
    },
    {
      icon: "/icons/PlayStore.svg",
      alt: "Play Store",
      downloadText: "Download Now",
      name: "Play Store",
    },
  ];

  return (
    <footer className="flex flex-col gap-20 bg-gray-900 text-white">
      {/* Top Section */}
      <div className="max-w-[1320px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 gap-10">
          {/* CTA Section */}
          <div className="flex flex-col gap-6 max-w-[600px]">
            <h2 className="font-semibold text-4xl">
              Start learning with 67.1k students around the world.
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                className="px-8 py-6 hover:text-[#FF6636]"
              >
                Join The Family
              </Button>
              <Button
                variant="secondary"
                className="px-8 py-6 hover:text-[#FF6636]"
              >
                Browse Courses
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex justify-between gap-10 max-w-[600px] w-full">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-semibold text-4xl">{stat.value}</p>
                <p className="text-gray-600 font-medium text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-800" />

      <div className="max-w-[1320px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/GraduationCap.svg"
                alt="logo"
                width={46}
                height={46}
              />
              <span className="text-4xl">E-tutor</span>
            </div>
            <p className="text-gray-500 text-sm">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
              mattis odio at.
            </p>
            <ul className="flex items-center gap-2 flex-wrap">
              {socialIcons.map((social, index) => (
                <li
                  key={index}
                  className="bg-[#363B47] p-3 hover:bg-[#FF6636] cursor-pointer rounded"
                  aria-label={social.name}
                >
                  {social.icon}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm uppercase">Top 4 Category</h3>
            <ul className="flex flex-col gap-5">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-5">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm uppercase">Support</h3>
            <ul className="flex flex-col gap-5">
              {supportLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm uppercase">Download Our App</h3>
            {appStores.map((app, index) => (
              <div
                key={index}
                className="py-3 px-4 flex gap-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors cursor-pointer"
              >
                <Image src={app.icon} alt={app.alt} width={28} height={28} />
                <div>
                  <p className="text-[10px]">{app.downloadText}</p>
                  <p className="text-base font-medium uppercase">{app.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-800" />

      <div className="max-w-[1320px] mx-auto w-full p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
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
      </div>
    </footer>
  );
};

export default Footer;
