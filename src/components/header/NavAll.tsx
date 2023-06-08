import { Box, Text } from "@chakra-ui/react";
import { Component, ReactNode } from "react";
import { NavLink } from "react-router-dom";

//local
import { allNav } from "../../utils/helpers/navigate";

class NavAll extends Component {
  render(): ReactNode {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: "column", xs: "row" }}
      >
        {allNav.map((nav, idx) => (
          <Box mx={{ base: "0", xs: "10px", lg: "15px" }} key={idx}>
            <NavLink to={nav.link}>
              <Text position="relative" className="item">
                {nav.text}
              </Text>
            </NavLink>
          </Box>
        ))}
      </Box>
    );
  }
}

export default NavAll;
