import Image from "next/image";
import React from "react";

const CategoryCard = ({ name, icon, noOfCourses, bg }: Category) => {
  return (
    <div className="p-5 shadow-sm flex gap-5" style={{ backgroundColor: bg }}>
      <div className="p-4 bg-white">
        <Image src={icon} alt={name} width={32} height={32} />
      </div>
      <div className="flex flex-col gap-2 text-left">
        <p className="font-medium">{name}</p>
        <p className="text-gray-600">{noOfCourses.toLocaleString()} Courses</p>
      </div>
    </div>
  );
};

export default CategoryCard;
