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
  originalPrice: string;
  discountedPrice: string;
  title: string;
  instructor: string;
  rating: {
    value: number;
    count: number;
  };
  students: number;
  level: string;
  duration: string;
  imageCover: string;
}
