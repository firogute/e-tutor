import React from "react";
import CategoryCard from "./CategoryCard";

const categories: Category[] = [
  {
    name: "Label",
    icon: "/category/Cpu.svg",
    noOfCourses: 63476,
    bg: "#EBEBFF",
  },

  {
    name: "Business",
    icon: "/category/Handshake.svg",
    noOfCourses: 52822,
    bg: "#E1F7E3",
  },
  {
    name: "Finance & Accounting",
    icon: "/category/CreditCard.svg",
    noOfCourses: 33841,
    bg: "#FFF2E5",
  },
  {
    name: "IT & Software",
    icon: "/category/ChartBarHorizontal.svg",
    noOfCourses: 22649,
    bg: "#FFF0F0",
  },
  {
    name: "Personal Development",
    icon: "/category/BugDroid.svg",
    noOfCourses: 20126,
    bg: "#FFFFFF",
  },
  {
    name: "Office Productivity",
    icon: "/category/Receipt.svg",
    noOfCourses: 13932,
    bg: "#F5F7FA",
  },
  {
    name: "Marketing",
    icon: "/category/MegaphoneSimple.svg",
    noOfCourses: 12068,
    bg: "#EBEBFF",
  },
  {
    name: "Photography & Video",
    icon: "/category/Camera.svg",
    noOfCourses: 6296,
    bg: "#F5F7FA",
  },
  {
    name: "Lifestyle",
    icon: "/category/Package.svg",
    noOfCourses: 2736,
    bg: "#FFF2E5",
  },
  {
    name: "Design",
    icon: "/category/PenNib.svg",
    noOfCourses: 2600,
    bg: "#FFEEE8",
  },
  {
    name: "Health & Fitness",
    icon: "/category/FirstAidKit.svg",
    noOfCourses: 1678,
    bg: "#E1F7E3",
  },
  {
    name: "Music",
    icon: "/category/Headphones.svg",
    noOfCourses: 956,
    bg: "#FFF2E5",
  },
];

const Category = () => {
  return (
    <section className="py-20 text-center flex flex-col gap-10 max-w-[1320px] mx-auto">
      <h2 className="font-semibold text-[40px]">Browse top category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Category;
