import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { GoClock } from "react-icons/go";
import { MdLanguage } from "react-icons/md";

//local
import CourseImage from "../../assets/img/javaScript.png";
import { Btn, Images } from "../ui";
import { useNavigate } from "react-router-dom";

const CourseCard: FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/courseDetail/10`);
  };

  return (
    <Box
      border="1px"
      mb="15px"
      display="flex"
      flexDir={{ base: "column", xs: "row" }}
      onClick={onClick}
    >
      <Box overflow="hidden" w={{ base: "100%", xs: "350px" }}>
        <Images
          source={CourseImage}
          alt="course_image"
          maxWidth="100%"
          _hover={{ transform: "scale(1.1)" }}
          cursor="pointer"
        />
      </Box>
      <Box p="8px" display="flex" flexDir="column" w="100%">
        <Text
          fontSize={{ base: "24px", md: "26px" }}
          fontWeight="800"
          lineHeight="120%"
        >
          Полный курс по JavaScript
        </Text>
        <Text mt="10px" textAlign="justify">
          Полныи курс по JavaScript С нуля до результата Это ранняя версия
          курса. Курс готов на 70% и охватывает все основные темы JS.
        </Text>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Box display="flex" alignItems="center">
            <MdLanguage />
            <Text ml="5px">Русский</Text>
          </Box>
          <Box display="flex" alignItems="center" mx="10px">
            <GoClock />
            <Text ml="5px">05:39:50</Text>
          </Box>
          <Btn text="Посмотреть" onClick={onClick} />
        </Box>
      </Box>
    </Box>
  );
};

export default CourseCard;
