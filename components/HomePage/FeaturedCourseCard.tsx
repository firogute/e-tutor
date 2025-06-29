import { formatNumber, getRandomColors } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const FeaturedCourseCard = ({ course }: { course: Course }) => {
  const { textColor, bgColor } = getRandomColors();
  return (
    <div className="flex shadow-md">
      <div className="h-full">
        <Image
          src={course.imageCover}
          alt={course.title}
          width={220}
          height={190}
          className="object-cover h-full w-[220px]"
        />
      </div>
      <div className="flex flex-col py-4 gap-4 w-full">
        <div className="px-4 flex flex-col gap-4 w-full">
          <div className="flex items-start justify-between">
            <p
              className="px-[6px] py-1 text-[10px]"
              style={{ backgroundColor: bgColor, color: textColor }}
            >
              {course.category}
            </p>
            <p className="flex gap-1">
              <span className="text-lg">{course.discountedPrice}</span>
              <span className="text-sm line-through text-gray-400">
                {course.originalPrice}
              </span>
            </p>
          </div>
          <p className="font-medium text-gray-900 line-clamp-1 text-bas">
            {course.title}
          </p>
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
        </div>
        <hr className="border-t border-[#E9EAF0]" />
        <div className="flex items-center justify-between px-4">
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
      </div>
    </div>
  );
};

export default FeaturedCourseCard;
