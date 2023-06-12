import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { MdLanguage } from "react-icons/md";

//local
import CourseImage from "../../assets/img/javaScript.png";
import { Btn, Images } from "../ui";
import { useNavigate } from "react-router-dom";

interface ICourseCard {
  title?: string;
  description?: string;
  image?: string;
}

const CourseCard: FC<ICourseCard> = ({ title, description, image }) => {
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
    >
      <Box overflow="hidden" w={{ base: "100%", xs: "350px" }}>
        <Images
          source={image ? image : CourseImage}
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
          {title ? title : "Полный курс по JavaScript"}
        </Text>
        <Text mt="10px" textAlign="justify">
          {description
            ? description
            : "Полныи курс по JavaScript С нуля до результата Это ранняя версия курса. Курс готов на 70% и охватывает все основные темы JS."}
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
          <Text ml="5px">100 сом</Text>
          <Btn text="Посмотреть" onClick={onClick} />
        </Box>
      </Box>
    </Box>
  );
};

export default CourseCard;
