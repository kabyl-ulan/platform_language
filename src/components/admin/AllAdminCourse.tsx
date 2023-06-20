import { Box, Th, Tr } from "@chakra-ui/react";
import React, { ChangeEvent, FC, useEffect, useMemo, useState } from "react";

//local
import { useAppDispatch } from "../../redux/store";
import { BtnAdd, Selects, Tables } from "../ui";
import { getAllCourseById } from "../../redux/course/action";
import { useCourses } from "../../redux/course/hook";
import { CourseTableCard } from "../cards";
import { useCategories } from "../../redux/categories/hooks";
import { useSubCategories } from "../../redux/subCategories/hooks";
import { getCategories } from "../../redux/categories/action";
import { useHelpLocal } from "../../redux/helpLocal/hook";
import { setIdCategory, setIdSubCategory } from "../../redux/helpLocal/action";
import { getSubCategories } from "../../redux/subCategories/action";
import { Pagination } from "../pagination";
import { useNavigate } from "react-router-dom";

const AllAdminCourse: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading, courses, error } = useCourses();
  const { categories } = useCategories();
  const { subCategories } = useSubCategories();
  const { idCategory, idPodCategory } = useHelpLocal();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setIdCategory(parseInt(value)));
  };

  const subCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setIdSubCategory(parseInt(value)));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    idCategory > 0 && dispatch(getSubCategories(idCategory));
  }, [dispatch, idCategory]);

  useEffect(() => {
    idPodCategory > 0 && dispatch(getAllCourseById(idPodCategory, page, size));
  }, [dispatch, idPodCategory, page, size]);

  const currentTableDate = useMemo(() => {
    return courses.content;
  }, [courses.content]);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!!error.length) {
    return <>{error}</>;
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap"
        alignItems="center"
      >
        <Selects
          arr={categories}
          placeholder="Категория"
          defaultValue={idCategory}
          onChange={handleChange}
        />
        <Selects
          arr={subCategories}
          placeholder="Под категория"
          defaultValue={idPodCategory}
          onChange={subCategoryChange}
        />
        <BtnAdd onClick={() => navigate(`/admin/addCourse/${idPodCategory}`)} />
      </Box>
      <Tables
        thead={
          <Tr>
            <Th>№(id)</Th>
            <Th>Картинка</Th>
            <Th>Наименование</Th>
            <Th colSpan={3}>Цена</Th>
          </Tr>
        }
        tbody={currentTableDate.map((el, idx) => (
          <CourseTableCard key={idx} course={el} />
        ))}
        tcaption={currentTableDate.length === 0 ? "Курсов нет" : ""}
      />
      <Box py="10px" display="flex" justifyContent="center">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={courses.totalElements}
          pageSize={size}
          onPageChange={(page) => {
            setCurrentPage(page);
            setPage(page - 1);
          }}
        />
      </Box>
    </>
  );
};

export default AllAdminCourse;
