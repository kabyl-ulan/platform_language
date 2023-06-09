import { Box, Text } from "@chakra-ui/react";
import React, { Component, ReactNode } from "react";
import { IoIosArrowDown } from "react-icons/io";

//local
import DropDownMenu from "./DropDownMenu";
import category from "./Category.json";

interface IHeaderCategory {
  isShown: boolean;
  isShownSub: boolean;
}

class CategoryDropDown extends Component<{}, IHeaderCategory> {
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
  render(): ReactNode {
    const _isShown = this.state.isShown;

    return (
      <Box
        display="flex"
        alignItems="center"
        mx="15px"
        position="relative"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Text
          position="relative"
          className="item"
          cursor="pointer"
          fontWeight="600"
        >
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
            fontWeight="500"
          >
            <DropDownMenu categories={category} />
          </Box>
        )}
      </Box>
    );
  }
}

export default CategoryDropDown;
