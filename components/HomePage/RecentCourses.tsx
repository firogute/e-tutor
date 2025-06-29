import React from "react";
import CourseCard from "./CourseCard";

const Courses: TopCourse[] = [
  {
    name: "Machine Learning A-Z™, Hands-On Python & R in Data Science",
    category: "DESIGN",
    price: "57",
    noOfStudents: 265700,
    rating: 5.0,
    img: "/courses/Course_Images1.png",
  },
  {
    name: "The Complete 2021 Web Development Bootcamp",
    category: "DEVELOPMENTS",
    price: "57",
    noOfStudents: 265700,
    rating: 5.0,
    img: "/courses/Course_Images2.png",
  },
  {
    name: "Learn Python Programming Masterclass: From Basics to Advanced",
    category: "BUSINESS",
    price: "57",
    noOfStudents: 265700,
    rating: 5.0,
    img: "/courses/Course_Images3.png",
  },
  {
    name: "The Complete Digital Marketing Course - 12 Courses in 1 Bundle",
    category: "MARKETING",
    price: "57",
    noOfStudents: 265700,
    rating: 5.0,
    img: "/courses/Course_Images4.png",
  },
];

const RecentCourses = () => {
  return (
    <section className="">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-10 py-20">
        <h2 className="font-semibold text-[40px] text-center">
          Recently added courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Courses.map((course) => (
            <CourseCard key={course.name} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentCourses;
