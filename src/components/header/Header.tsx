import React, { Component } from "react";
import { Box, Text } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

import category from "./Category.json";
import { Containers } from "../ui";
import SearchComponent from "./SearchComponent";
import { Link, NavLink } from "react-router-dom";
import Account from "./Account";
import DropDownMenu from "./DropDownMenu";

interface IHeaderCategory {
  isShown: boolean;
  isShownSub: boolean;
}

class Header extends Component<{}, IHeaderCategory> {
  constructor(props: IHeaderCategory) {
    super(props);
    this.state = {
      isShown: false,
      isShownSub: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isShown: true });
  };

  handleMouseLeave = () => {
    this.setState({ isShown: false });
  };

  render(): React.ReactNode {
    const _isShown = this.state.isShown;

    return (
      <header id="header">
        <Containers>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            py="10px"
          >
            <Box display="flex" alignItems="center">
              <Box>
                <Link to="/">
                  <Text mr="15px">Course</Text>
                </Link>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                mx="15px"
                position="relative"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              >
                <Text position="relative" className="item" cursor="pointer">
                  Категории
                </Text>
                <IoIosArrowDown />
                {!!_isShown && (
                  <Box
                    position="absolute"
                    top="25px"
                    left="0"
                    pt="5px"
                    zIndex="35"
                    width="150px"
                    bg="white"
                    color="black"
                  >
                    <DropDownMenu categories={category} />
                  </Box>
                )}
              </Box>
              <Box mx="15px">
                <NavLink to="/all-course">
                  <Text position="relative" className="item">
                    Все курсы
                  </Text>
                </NavLink>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <SearchComponent />
              <Account />
            </Box>
          </Box>
        </Containers>
      </header>
    );
  }
}
export default Header;
