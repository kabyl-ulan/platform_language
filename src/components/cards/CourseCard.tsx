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
      mb="10px"
      display="flex"
      flexDir={{ base: "column", sm: "row" }}
      onClick={onClick}
    >
      <Box overflow="hidden">
        <Images
          source={CourseImage}
          alt="course_image"
          maxWidth={{ base: "100%", sm: "350px" }}
          _hover={{ transform: "scale(1.1)" }}
          cursor="pointer"
        />
      </Box>
      <Box p="5px" display="flex" flexDir="column">
        <Text fontSize="26px">Полный курс по JavaScript</Text>
        <Text mt="10px">
          Полныи курс по JavaScript С нуля до результата Это ранняя версия
          курса. Курс готов на 70% и охватывает все основные темы JS.
        </Text>
        <Box display="flex" alignItems="center" justifyContent="space-around">
          <Box display="flex" alignItems="center">
            <MdLanguage />
            <Text ml="5px">Русский</Text>
          </Box>
          <Box display="flex" alignItems="center">
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
