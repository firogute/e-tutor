import { formatNumber, getRandomColors, percentageOff } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const CoursePreview = ({ course }: { course: RecentCourse }) => {
  const { textColor, bgColor } = getRandomColors();
  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        <p
          className="px-[6px] py-1 text-[10px] w-fit"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          {course.category}
        </p>
        <h3 className="text-lg font-medium">{course.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={course.instructor.img}
              alt={course.instructor.name}
              width={28}
              height={28}
              className="rounded-full"
            />
            <p className="text-gray-700 text-sm">{course.instructor.name}</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Image src="/icons/Star.svg" alt="star" width={20} height={20} />
            <p className="text-gray-900">{course.rating.value.toFixed(1)}</p>
            <p className="text-gray-500">
              ({course.rating.count.toLocaleString()})
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <Image
              src="/icons/User.svg"
              alt="students"
              width={20}
              height={20}
            />
            <p className="text-gray-700 text-sm">
              {formatNumber(course.students)}{" "}
              <span className="text-gray-500">students</span>
            </p>
          </div>
          <div className="flex gap-1">
            <Image
              src="/icons/BarChart.svg"
              alt="students"
              width={20}
              height={20}
            />
            <p className="text-gray-700 text-sm">{course.level}</p>
          </div>
          <div className="flex gap-1">
            <Image
              src="/icons/Clock.svg"
              alt="students"
              width={20}
              height={20}
            />
            <p className="text-gray-700 text-sm">{course.duration}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="flex gap-1">
              <span className="text-2xl">
                ${course.discountedPrice.toFixed(2)}
              </span>
              <span className="text-base line-through text-gray-400">
                ${course.originalPrice.toFixed(2)}
              </span>
            </p>

            <p className="px-3 py-2 text-[#FF6636] bg-[#FFEEE8]">
              {percentageOff(
                course.discountedPrice,
                course.originalPrice
              ).toFixed(0)}
              % OFF
            </p>
          </div>
          <div className="p-3 bg-[#FFEEE8]">
            <Image
              src="/icons/HeartOrange.svg"
              alt="favorite"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <hr className="border-t border-[#E9EAF0]" />
      <div className="p-5">
        <p className="text-xs">{"What you`ll learn".toUpperCase()}</p>
        <ul className="">
          {course.learningOutcome.map((lo, index) => (
            <li key={index} className="flex gap-2 items-start my-2">
              <Image
                src="/icons/Check.svg"
                alt="check"
                width={24}
                height={24}
              />
              <p className="text-gray-600 text-sm">{lo}</p>
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-t border-[#E9EAF0]" />
      <div className="p-5 w-full flex flex-col gap-2">
        <Button className="bg-[#FF6636] text-[#FFEEE8] cursor-pointer py-5">
          <Image
            src="icons/ShoppingCartSimple.svg"
            alt="cart"
            width={24}
            height={24}
          />
          Add To Cart
        </Button>
        <Button className="text-[#FF6636] bg-[#FFEEE8] cursor-pointer py-5">
          Course Detail
        </Button>
      </div>
    </>
  );
};

export default CoursePreview;
