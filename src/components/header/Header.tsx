import React, { Component } from "react";
import { Box } from "@chakra-ui/react";

//local
import { Containers } from "../ui";
import LogoHome from "./LogoHome";
import MenuNav from "./MenuNav";
import SearchComponent from "./SearchComponent";

class Header extends Component {
  render(): React.ReactNode {
    return (
      <header id="header">
        <Containers>
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
        </Containers>
      </header>
    );
  }
}
export default Header;
