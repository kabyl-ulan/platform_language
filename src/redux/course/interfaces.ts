export interface ICourseContent {
  id: number;
  courseName: string;
  price: number;
  imageDto: {} | undefined;
}

export interface ICourses {
  content: ICourseContent[];
  totalElements: number;
  totalPages: number;
}

export interface ICourseState {
  isLoading: boolean;
  courses: ICourses;
  error: string | any;
}

export type InputsCourse = {
  categoryId: number;
  courseName: string;
  description: string;
  price: number;
  author: string;
};
