import Category from "@/components/HomePage/Category";
import FeaturedCourses from "@/components/HomePage/FeaturedCourses";
import HeroSection from "@/components/HomePage/HeroSection";
import RecentCourses from "@/components/HomePage/RecentCourses";
import TopCourses from "@/components/HomePage/TopCourses";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Category />
      <TopCourses />
      <FeaturedCourses />
      <RecentCourses />
    </div>
  );
}
