import React, { FC } from "react";

import { AdminComponent } from "../components";

const AdminPage: FC = () => {
  return (
    <>
      <AdminComponent children="order" />
    </>
  );
};

export default AdminPage;
