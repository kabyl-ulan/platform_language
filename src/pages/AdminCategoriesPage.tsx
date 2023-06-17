import React, { FC } from "react";

import { AdminComponent, AllCategories } from "../components";

const AdminCategoriesPage: FC = () => {
  return (
    <>
      <AdminComponent children={<AllCategories />} />
    </>
  );
};

export default AdminCategoriesPage;
