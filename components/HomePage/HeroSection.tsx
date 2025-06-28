import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between pl-20 bg-white">
      <div className="max-w-xl flex flex-col gap-6">
        <h2 className="font-bold text-gray-900 text-4xl sm:text-6xl leading-tight">
          Learn with experts <br /> anytime, anywhere
        </h2>

        <p className="text-gray-700 text-2xl max-w-md">
          Our mission is to help people find the best online courses and learn
          from top instructors — anytime, anywhere.
        </p>

        <div>
          <Button
            type="button"
            className="bg-[#FF6636] text-white px-8 py-6 w-fit rounded-none hover:bg-[#FFEEE8] hover:text-[#FF6636] transition text-lg cursor-pointer"
          >
            Create Account
          </Button>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/Lecturer.png"
          alt="lecturer-teaching"
          width={900}
          height={550}
          className="object-contain h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
