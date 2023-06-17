import React from "react";
import { AdminComponent, AllSubCategories } from "../components";

const AdminSubCategoriesPage = () => {
  return (
    <>
      <AdminComponent children={<AllSubCategories />} />
    </>
  );
};

export default AdminSubCategoriesPage;
