import { Box } from "@chakra-ui/react";
import { Component, ReactNode } from "react";

//local
import SearchComponent from "./SearchComponent";
import Account from "./Account";
import CategoryDropDown from "./CategoryDropDown";
import NavAll from "./NavAll";
import AccordionMenu from "./AccordionMenu";

type IBurgerBtn = {
  openBurger: boolean;
};

class Navigation extends Component<IBurgerBtn> {
  render(): ReactNode {
    const { openBurger } = this.props;
    return (
      <Box
        display="flex"
        justifyContent={{ base: "space-around", xs: "space-between" }}
        position={{ base: "fixed", xs: "static" }}
        top={{ base: "50px", xs: "0" }}
        bottom="0"
        py={{ base: "10px", xs: "0" }}
        left={openBurger ? "0" : "110vw"}
        transition="all 0.4s"
        alignItems="center"
        w="100%"
        bg="#303146"
        color="#ffffff"
        zIndex="35"
        flexDirection={{ base: "column-reverse", xs: "row" }}
      >
        <Box display="flex" alignItems="center">
          <Box display={{ base: "none", xs: "block" }}>
            <CategoryDropDown />
          </Box>
          <NavAll />
        </Box>
        <Box display={{ base: "block", xs: "none" }}>
          <AccordionMenu />
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
