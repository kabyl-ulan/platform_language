import React, { useEffect } from "react";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

//local
import { Containers, Images } from "../ui";
import { CourseCard } from "../cards";

const DetailTeacher = () => {
  const { idTeacher } = useParams();

  useEffect(() => {
    console.log(idTeacher);
  }, [idTeacher]);

  return (
    <section>
      <Containers>
        <Box display="flex" pt="10px" flexWrap={{ base: "wrap", xs: "nowrap" }}>
          <Box width="300px">
            <Images
              source="https://dpo.online/wp-content/uploads/2018/06/prepodavatel-spetsialnyh-distsiplin.jpg"
              alt="teacher_photo"
              maxWidth="100%"
              borderRadius="lg"
            />
          </Box>
          <Box w="100%" p={{ base: "0", xs: "0 10px" }}>
            <Stack my="2" px="5px" spacing="3">
              <Heading size="md">Каримбаев Турсунжан Турашевич</Heading>
              <Text>
                Опытный программист с глубокими знаниями и навыками разработки
                приложений.
              </Text>
              <Text>Телефон: +996500032640</Text>
              <Text>Электронная почта: kabylulanabdykalykuulu@gmail.com</Text>
            </Stack>
          </Box>
        </Box>
        <Box mt="10px">
          <CourseCard />
          <CourseCard />
        </Box>
      </Containers>
    </section>
  );
};

export default DetailTeacher;
