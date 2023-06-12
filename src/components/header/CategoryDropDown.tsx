import { Box, Text } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

//local
import { useGetCategoryListQuery } from "../../redux/getAllCategoriesApi";
import DropDownMenu from "./DropDownMenu";

const CategoryDropDown: FC = () => {
  const [isShown, setIsShown] = useState(false);
  const { data } = useGetCategoryListQuery();

  const handleMouseEnter = () => {
    setIsShown(true);
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      mx="15px"
      position="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
      {!!isShown && (
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
          {!!data && <DropDownMenu categories={data} />}
        </Box>
      )}
    </Box>
  );
};

export default CategoryDropDown;
