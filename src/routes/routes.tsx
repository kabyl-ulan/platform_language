import { RouteProps } from "react-router-dom";

//pages
import {
  AdminPage,
  AllCoursePage,
  AllTeachersPage,
  CoursesInByIdPage,
  DetailCoursePage,
  HomePage,
  LoginPage,
  NotFound,
  RegisterPage,
  SearchPage,
  TeachersDetailPage,
} from "../pages";

export const routes: RouteProps[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/search-result/:search",
    element: <SearchPage />,
  },
  {
    path: "/all-course",
    element: <AllCoursePage />,
  },
  {
    path: "/courses/:idCategory",
    element: <CoursesInByIdPage />,
  },
  {
    path: "/courseDetail/:idCourse",
    element: <DetailCoursePage />,
  },
  {
    path: "/all-teachers",
    element: <AllTeachersPage />,
  },
  {
    path: "/teachers/:idTeacher",
    element: <TeachersDetailPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
