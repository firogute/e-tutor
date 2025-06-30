import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { formatNumber, getRandomColors, percentageOff } from "@/lib/utils";
import RecentCourseCard from "./RecentCourseCard";

interface RecentCourse extends Course {
  learningOutcome: string[];
}

const Courses: RecentCourse[] = [
  {
    category: "HEALTH & FITNESS",
    originalPrice: 26.6,
    discountedPrice: 14.0,
    title: "Investing in Stocks: The Complete Course! (13 Hours of Content)",
    instructor: {
      name: "Kevin Gilbert",
      img: "/Photo.png",
    },
    rating: {
      value: 5.0,
      count: 357914,
    },
    students: 265700,
    level: "Beginner",
    duration: "6 hours",
    imageCover: "/courses/Course_Images4.png",
    learningOutcome: [
      "Learn to use Python professionally, learning both Python 2 and Python 3!",
      "Create games with Python, like Tic Tac Toe and Blackjack!",
      "Create games with Python, like Tic Tac Toe and Blackjack!",
    ],
  },
  {
    category: "PRODUCTIVITY",
    originalPrice: 26.6,
    discountedPrice: 14.0,
    title: "Adobe XD for Web Design: Essential Principles and Practices",
    instructor: {
      name: "Kevin Gilbert",
      img: "/Photo.png",
    },
    rating: {
      value: 5.0,
      count: 357914,
    },
    students: 265700,
    level: "Beginner",
    duration: "6 hours",
    imageCover: "/courses/Course_Images6.png",
    learningOutcome: [
      "Learn to use Python professionally, learning both Python 2 and Python 3!",
      "Create games with Python, like Tic Tac Toe and Blackjack!",
      "Create games with Python, like Tic Tac Toe and Blackjack!",
    ],
  },
  {
    category: "PERSONAL DEVELOPMENT",
    originalPrice: 26.6,
    discountedPrice: 14.0,
    title: "Google Analytics Certification - Learn How To Pass The Exam",
    instructor: {
      name: "Kevin Gilbert",
      img: "/Photo.png",
    },
    rating: {
      value: 5.0,
      count: 357914,
    },
    students: 265700,
    level: "Beginner",
    duration: "6 hours",
    imageCover: "/courses/Course_Images8.png",
    learningOutcome: [
      "Learn to use Python professionally, learning both Python 2 and Python 3!",
      "Create games with Python, like Tic Tac Toe and Blackjack!",
      "Create games with Python, like Tic Tac Toe and Blackjack!",
    ],
  },
  {
    category: "MUSIC",
    originalPrice: 26.6,
    discountedPrice: 14.0,
    title: "The Python Mega Course: Build 10 Real World Applications",
    instructor: {
      name: "Kevin Gilbert",
      img: "/Photo.png",
    },
    rating: {
      value: 5.0,
      count: 357914,
    },
    students: 265700,
    level: "Beginner",
    duration: "6 hours",
    imageCover: "/courses/Course_Images10.png",
    learningOutcome: [
      "Learn to use Python professionally, learning both Python 2 and Python 3!",
      "Create games with Python, like Tic Tac Toe and Blackjack!",
      "Create games with Python, like Tic Tac Toe and Blackjack!",
    ],
  },
];

const RecentCourses = () => {
  const { textColor, bgColor } = getRandomColors();
  return (
    <section className="">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-10 py-20">
        <h2 className="font-semibold text-[40px] text-center">
          Recently added courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {Courses.map((course) => (
            <HoverCard key={course.title}>
              <HoverCardTrigger asChild>
                <div className="relative">
                  <RecentCourseCard {...course} />
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                className="w-[400px] p-0 border-none shadow-lg"
                side="right"
                sideOffset={10}
              >
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
                      <p className="text-gray-700 text-sm">
                        {course.instructor.name}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Image
                        src="/icons/Star.svg"
                        alt="star"
                        width={20}
                        height={20}
                      />
                      <p className="text-gray-900">
                        {course.rating.value.toFixed(1)}
                      </p>
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
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
        <Button
          type="button"
          className="w-fit mx-auto px-6 flex gap-3 py-5 cursor-pointer text-[#FF6636] bg-[#FFEEE8] hover:bg-[#FF6636] hover:text-[#FFEEE8]"
        >
          Browse All Course{" "}
          <Image
            src="/icons/ArrowRight.svg"
            alt="next"
            width={24}
            height={24}
            className=""
          />
        </Button>
      </div>
    </section>
  );
};

export default RecentCourses;
