import { RouteProps } from "react-router-dom";

//pages
import {
  AdminPage,
  AllCoursePage,
  CoursesInByIdPage,
  DetailCoursePage,
  HomePage,
  LoginPage,
  NotFound,
  RegisterPage,
  SearchPage,
  AdminCategoriesPage,
} from "../pages";
import AdminCoursePage from "../pages/AdminCoursePage";
import AdminUsersPage from "../pages/AdminUsersPage";
import MyAccountPage from "../pages/MyAccountPage";
import MyCoursesPage from "../pages/MyCoursesPage";

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
    path: "/admin/users",
    element: <AdminUsersPage />,
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
    path: "/admin/categories",
    element: <AdminCategoriesPage />,
  },
  {
    path: "/admin/courses",
    element: <AdminCoursePage />,
  },
  {
    path: "/admin/order",
    element: <AdminPage />,
  },
  {
    path: "/my-account",
    element: <MyAccountPage />,
  },
  {
    path: "/my-courses",
    element: <MyCoursesPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
