import React from "react";
import { AdminComponent, AllUsers } from "../components";

const AdminUsersPage = () => {
  return (
    <>
      <AdminComponent children={<AllUsers />} />
    </>
  );
};

export default AdminUsersPage;
