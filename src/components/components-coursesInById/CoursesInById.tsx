import React, { FC, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

//local
import { Containers } from "../ui";
import { CourseCard } from "../cards";
import { Pagination } from "../pagination";

const CoursesInById: FC = () => {
  const { idCategory } = useParams();
  const size = 1;
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <section>
      <Containers>
        <p>{idCategory}</p>
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

export default CoursesInById;
