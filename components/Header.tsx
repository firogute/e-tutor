import React from "react";

const Header = () => {
  return (
    <>
      <header className="border border-red-600">
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
            <select name="language" id="">
              <option value="usd" className="p-4">
                English
              </option>
              <option value="euro">Afan Oromo</option>
            </select>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
