import { cn, formatNumber, getRandomColors } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const CourseCard = ({
  name,
  img,
  noOfStudents,
  category,
  price,
  rating,
}: TopCourse) => {
  const { textColor, bgColor } = getRandomColors();
  return (
    <div className="flex flex-col gap-4 pb-4 shadow-sm hover:scale-110 cursor-pointer transition">
      <div className="w-full">
        <Image src={img} alt={name} width={244} height={184} className="w-full h-full" />
      </div>
      <div className="px-4 flex flex-col gap-4">
        <div className="">
          <div className="flex items-center justify-between">
            <p
              className={cn("px-[6px] py-1 font-medium text-[10px]")}
              style={{
                backgroundColor: bgColor,
                color: textColor,
              }}
            >
              {category.toUpperCase()}
            </p>
            <p className="text-[#FF6636] font-semibold text-base">${price}</p>
          </div>
        </div>
        <p className="font-medium text-sm text-left line-clamp-2">{name}</p>
      </div>
      <div className="px-4 flex items-center justify-between">
        <p className="flex gap-1">
          <Image src="/icons/Star.svg" alt="rating" width={16} height={16} />
          {rating.toFixed(1)}
        </p>
        <p className="">
          <span className="text-[#4E5566] font-medium text-sm">
            {formatNumber(noOfStudents)}
          </span>
          <span className="text-[#8C94A3]"> students</span>
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
