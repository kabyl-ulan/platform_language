import { Box } from "@chakra-ui/react";
import { Component, ReactNode } from "react";

//local
import SearchComponent from "./SearchComponent";
import Account from "./Account";
import CategoryDropDown from "./CategoryDropDown";
import NavAll from "./NavAll";

type IBurgerBtn = {
  openBurger: boolean;
};

class Navigation extends Component<IBurgerBtn> {
  render(): ReactNode {
    const { openBurger } = this.props;
    return (
      <Box
        display="flex"
        justifyContent="space-between"
        position={{ base: "fixed", xs: "static" }}
        top={{ base: "50px", xs: "0" }}
        py={{ base: "10px", xs: "0" }}
        left={openBurger ? "0" : "100vw"}
        transition="all 0.4s"
        alignItems="center"
        w="100%"
        bg={{ base: "#ffffff", xs: "transparent" }}
        color={{ base: "#000000", xs: "#ffffff" }}
        zIndex="35"
        flexDirection={{ base: "column-reverse", xs: "row" }}
      >
        <Box display="flex" alignItems="center">
          <Box display={{ base: "none", xs: "block" }}>
            <CategoryDropDown />
          </Box>
          <NavAll />
        </Box>
        <Box display="flex" alignItems="center">
          <Box display={{ base: "none", xs: "block" }}>
            <SearchComponent />
          </Box>
          <Account />
        </Box>
      </Box>
    );
  }
}

export default Navigation;