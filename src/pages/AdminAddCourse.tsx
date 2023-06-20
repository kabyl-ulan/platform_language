import React from "react";
import { AdminComponent } from "../components";
import { AddCourse } from "../components/forms";

const AdminAddCourse = () => {
  return (
    <>
      <AdminComponent children={<AddCourse />} />
    </>
  );
};

export default AdminAddCourse;
