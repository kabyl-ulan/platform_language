import React, { FC, ReactNode } from "react";

//local
import AdminMenu from "./AdminMenu";
import { Box } from "@chakra-ui/react";

type IAdminComponent = {
  children: ReactNode;
};

const AdminComponent: FC<IAdminComponent> = ({ children }) => {
  return (
    <Box pt="10px">
      <AdminMenu />
      <Box pl="250px">{children}</Box>
    </Box>
  );
};

export default AdminComponent;
