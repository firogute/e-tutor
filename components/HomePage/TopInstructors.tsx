import React from "react";
import InstructorCard from "./InstructorCard";

const instructors: Instructor[] = [
  {
    name: "Devon Lane",
    title: "Senior Developer",
    img: "/instructors/Image1.png",
    rating: 4.6,
    students: 854,
  },
  {
    name: "Darrell Steward",
    title: "Digital Product Designer",
    img: "/instructors/Image2.png",
    rating: 4.9,
    students: 451444,
  },
  {
    name: "Jane Cooper",
    title: "UI/UX Designer",
    img: "/instructors/Image3.png",
    rating: 4.8,
    students: 435671,
  },
  {
    name: "Albert Flores",
    title: "Adobe Instructor",
    img: "/instructors/Image4.png",
    rating: 4.7,
    students: 511123,
  },
  {
    name: "Kathryn Murphy",
    title: "Lead Developer",
    img: "/instructors/Image5.png",
    rating: 4.2,
    students: 2711,
  },
];

const TopInstructors = () => {
  return (
    <section className="py-20 -mt-[270px]">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-10">
        <h2 className="font-semibold text-[40px] text-center">
          Top instructors of the month
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.name} {...instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
