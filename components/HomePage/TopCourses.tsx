import React from "react";
import CourseCard from "./CourseCard";
const Courses: Course[] = [
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
  {
    name: "Reiki Level I, II and Master/Teacher Program Certification",
    category: "IT & SOFTWARE",
    price: "57",
    noOfStudents: 265700,
    rating: 5.0,
    img: "/courses/Course_Images5.png",
  },
  {
    name: "The Complete Foundation Stock Trading Course for Beginners",
    category: "MUSIC",
    price: "57",
    noOfStudents: 2657000,
    rating: 5.0,
    img: "/courses/Course_Images6.png",
  },
  {
    name: "Beginner to Pro in Excel: Financial Modeling and Valuation Techniques",
    category: "MARKETING",
    price: "57",
    noOfStudents: 265700,
    rating: 5.0,
    img: "/courses/Course_Images7.png",
  },
  {
    name: "The Python Mega Course: Build 10 Real World Applications",
    category: "HEALTH & ETHICS",
    price: "57",
    noOfStudents: 265700,
    rating: 5.0,
    img: "/courses/Course_Images8.png",
  },
  {
    name: "Copywriting - Become a Freelance Copywriter, Your Own Boss",
    category: "DESIGN",
    price: "57",
    noOfStudents: 265700,
    rating: 5.0,
    img: "/courses/Course_Images9.png",
  },
  {
    name: "Google Analytics Certification - Learn How To Pass The Exam in 2024",
    category: "LIFESTYLE",
    price: "57",
    noOfStudents: 265700,
    rating: 5.0,
    img: "/courses/Course_Images10.png",
  },
];

const TopCourses = () => {
  return (
    <section className="bg-[#F5F7FA]">
      <div className="max-w-[1320px] flex flex-col gap-10 pt-20 pb-[300px] text-center mx-auto">
        <h2 className="font-semibold text-[40px]">Browse top category</h2>
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-5 gap-6">
          {Courses.map((course) => (
            <CourseCard key={course.name} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
