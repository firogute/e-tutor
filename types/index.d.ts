declare interface Category {
  name: string;
  icon: string;
  noOfCourses: number;
  bg: string;
}

declare interface TopCourse {
  img: string;
  category: string;
  price: string;
  name: string;
  noOfStudents: number;
  rating: number;
}

declare interface Course {
  category: string;
  originalPrice: number;
  discountedPrice: number;
  title: string;
  instructor: {
    name: string;
    img: string;
  };
  rating: {
    value: number;
    count: number;
  };
  students: number;
  level: string;
  duration: string;
  imageCover: string;
}

interface RecentCourse extends Course {
  learningOutcome: string[];
}

declare interface Instructor {
  name: string;
  title: string;
  img: string;
  rating: number;
  students: number;
}
