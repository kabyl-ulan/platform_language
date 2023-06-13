import { Box } from "@chakra-ui/react";
import React from "react";
import LogoHome from "./LogoHome";
import SearchComponent from "./SearchComponent";
import MenuNav from "./MenuNav";

const UserHeader = () => {
  return (
    <>
      <Box
        py="10px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px"
      >
        <LogoHome />
        <Box display="flex" w={{ xs: "100%" }}>
          <Box display={{ base: "block", xs: "none" }} mr="10px">
            <SearchComponent />
          </Box>
          <MenuNav />
        </Box>
      </Box>
    </>
  );
};

export default UserHeader;
