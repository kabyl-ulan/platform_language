import React from "react";
import { Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

//local
import { Containers } from "../ui";
import { CourseCard } from "../cards";
import { SearchInput } from "../forms";

const ResultAfterSearch = () => {
  const { search } = useParams();

  return (
    <section>
      <Containers>
        <SearchInput />
        <Text fontSize="28px">Найдено курсов: 2</Text>
        <Text fontSize="28px">Вы искали: {search}</Text>
        <CourseCard />
        <CourseCard />
      </Containers>
    </section>
  );
};

export default ResultAfterSearch;
