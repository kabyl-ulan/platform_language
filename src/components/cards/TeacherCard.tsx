import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

//local
import { Images } from "../ui";

const TeacherCard: FC = () => {
  const navigate = useNavigate();
  return (
    <Card
      maxW="250px"
      mb="15px"
      cursor="pointer"
      onClick={() => navigate(`/teachers/10`)}
    >
      <CardBody p="1px">
        <Images
          source="https://dpo.online/wp-content/uploads/2018/06/prepodavatel-spetsialnyh-distsiplin.jpg"
          alt="no;kioppk"
          borderRadius="lg"
        />
        <Stack my="2" px="5px" spacing="3">
          <Heading size="md">Каримбаев Турсунжан Турашевич</Heading>
          <Text>
            Опытный программист с глубокими знаниями и навыками разработки
            приложений.
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default TeacherCard;
