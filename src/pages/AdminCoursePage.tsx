import React from "react";
import { AdminComponent, AllAdminCourse } from "../components";

const AdminCoursePage = () => {
  return (
    <>
      <AdminComponent children={<AllAdminCourse />} />
    </>
  );
};

export default AdminCoursePage;
