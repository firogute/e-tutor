import Category from "@/components/HomePage/Category";
import Companies from "@/components/HomePage/Companies";
import FeaturedCourses from "@/components/HomePage/FeaturedCourses";
import HeroSection from "@/components/HomePage/HeroSection";
import RecentCourses from "@/components/HomePage/RecentCourses";
import TopCourses from "@/components/HomePage/TopCourses";
import TopInstructors from "@/components/HomePage/TopInstructors";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Category />
      <TopCourses />
      <FeaturedCourses />
      <RecentCourses />
      <section className="bg-[#F5F7FA] pt-20 pb-[320px]">
        <div className="max-w-[1320px] mx-auto px-6 flex flex-col md:flex-row items-stretch gap-8">
          <div className="relative flex-1 bg-gradient-to-r from-[#CC522B] to-[#FF6636] rounded-xl overflow-hidden flex items-center">
            <div className="p-10 text-white z-10 max-w-md space-y-6">
              <h2 className="text-4xl font-bold">Become an instructor</h2>
              <p className="text-base">
                Instructors from around the world teach millions of students on
                Udemy. We provide the tools and skills to teach what you love.
              </p>
              <Button className="bg-white text-[#FF6636] px-6 py-4 font-semibold rounded-md shadow hover:shadow-lg hover:scale-[1.03] transition-all duration-300 flex items-center gap-3 w-fit">
                Start Teaching
                <Image
                  src="/icons/ArrowRight.svg"
                  alt="next"
                  width={20}
                  height={20}
                />
              </Button>
            </div>

            <div className="absolute bottom-0 right-0 md:right-4 translate-y-1/4 z-0">
              <Image
                src="/Instructor.png"
                alt="instructor"
                width={230}
                height={230}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-6 bg-white p-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Your teaching & earning steps
            </h3>
            <ul className="text-gray-900 text-base grid grid-cols-2 gap-4">
              <li className="flex items-center space-x-3">
                <div className="w-[52px] h-[52px] rounded-full bg-[#EBEBFF] text-[#564FFD] flex items-center justify-center text-xl font-semibold">
                  <span>1</span>
                </div>
                <span className="pt-2">Apply to become instructor</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-[52px] h-[52px] rounded-full bg-[#FFF0F0] text-[#FF6636] flex items-center justify-center text-xl font-semibold">
                  <span>2</span>
                </div>
                <span>Build & edit your profile</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-[52px] h-[52px] rounded-full bg-[#FFF0F0] text-[#E34444] flex items-center justify-center text-xl font-semibold">
                  <span>3</span>
                </div>
                <span>Create your new course</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-[52px] h-[52px] rounded-full bg-[#E1F7E3] text-[#23BD33] flex items-center justify-center text-xl font-semibold">
                  <span>3</span>
                </div>
                <span>Start teaching & earning</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <TopInstructors />
      <Companies />
    </main>
  );
}
