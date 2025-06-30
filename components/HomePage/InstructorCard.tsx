import Image from "next/image";
import React from "react";

const InstructorCard = ({ name, title, rating, img, students }: Instructor) => {
  return (
    <div className="flex flex-col gap-4">
      <Image src={img} alt={name} width={244} height={244} />

      <div className="text-center">
        <p className="font-medium">{name}</p>
        <p className="text-gray-500 text-sm">{title}</p>
      </div>
      <hr className="border border-[#E9EAF0]" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image src="/icons/Star.svg" alt="rating" width={24} height={24} />{" "}
          {rating.toFixed(1)}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700">
            {students.toLocaleString()}
          </span>
          <span className="text-gray-500 text-sm">students</span>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
