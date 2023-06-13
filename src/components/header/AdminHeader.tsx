import { Box, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { IoMdExit } from "react-icons/io";
import LogoHome from "./LogoHome";
import { windowLocation } from "../../utils/helpers/navFunction";

//local

const AdminHeader: FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      py="15px"
      borderBottom="1px"
    >
      <LogoHome link="/admin/order" />
      <Text fontSize="26px">Админ панел</Text>
      <Box
        fontSize="16px"
        display="flex"
        alignItems="center"
        cursor="pointer"
        onClick={() => {
          localStorage.clear();
          windowLocation("/");
        }}
      >
        <Text mr="8px">Выйти</Text>
        <Box fontSize="24px">
          <IoMdExit />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminHeader;
