import { Box, Text } from "@chakra-ui/react";
import React, { FC } from "react";

//local
import { CourseCard } from "../components/cards";
import { Containers } from "../components/ui";

const MyCoursesPage: FC = () => {
  return (
    <section>
      <Containers>
        <Box py="10px">
          <Text textAlign="center" fontSize="26px" fontWeight="600" mb="10px">
            Мои курсы
          </Text>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </Box>
      </Containers>
    </section>
  );
};

export default MyCoursesPage;
