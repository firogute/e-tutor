import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import RecentCourseCard from "./RecentCourseCard";
import CoursePreview from "./CoursePreview";

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
                <CoursePreview course={course} />
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
