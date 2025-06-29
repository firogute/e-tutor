import Category from "@/components/HomePage/Category";
import HeroSection from "@/components/HomePage/HeroSection";
import TopCourses from "@/components/HomePage/TopCourses";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Category />
      <TopCourses />
    </div>
  );
}
