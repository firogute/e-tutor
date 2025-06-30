import React from "react";
import FeaturedCourseCard from "./FeaturedCourseCard";
const featuredCourses: Course[] = [
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
  },
];

const FeaturedCourses = () => {
  return (
    <section className="mx-auto -mt-[250px]">
      <div className="flex flex-col w-full gap-10 max-w-[1320px] bg-white p-20 mx-auto">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-semibold text-[40px]">Our feature courses</h2>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
            inventore!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredCourses.map((course) => (
            <FeaturedCourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
