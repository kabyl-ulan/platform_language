import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

//local
import { Containers } from "../ui";
import { CourseCard } from "../cards";
import { SearchInput } from "../forms";
import { Pagination } from "../pagination";

const ResultAfterSearch = () => {
  const { search } = useParams();
  const size = 1;
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <section>
      <Containers>
        <SearchInput />
        <Text fontSize="28px">Найдено курсов: 2</Text>
        <Text fontSize="28px">Вы искали: {search}</Text>
        <CourseCard />
        <CourseCard />
        <Box display="flex" justifyContent="center" py="20px">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={15}
            pageSize={size}
            onPageChange={(page: number) => {
              setCurrentPage(page);
            }}
          />
        </Box>
      </Containers>
    </section>
  );
};

export default ResultAfterSearch;
