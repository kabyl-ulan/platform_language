import { Td, Tr } from "@chakra-ui/react";
import React, { FC } from "react";

//local
import { ICourseContent } from "../../redux/course/interfaces";
import { BtnChange, BtnDelete, DefaultImage } from "../ui";
import { useAppDispatch } from "../../redux/store";
import { deleteCourse } from "../../redux/course/action";

type ICourseTableCard = {
  course: ICourseContent;
};

const CourseTableCard: FC<ICourseTableCard> = ({ course }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Tr>
        <Td>{course.id}</Td>
        <Td>{course.imageDto ? "Yes" : <DefaultImage w="40px" />}</Td>
        <Td>{course.courseName}</Td>
        <Td>{course.price + " сом"}</Td>
        <Td>
          <BtnChange />
        </Td>
        <Td>
          <BtnDelete onClick={() => dispatch(deleteCourse(course.id))} />
        </Td>
      </Tr>
    </>
  );
};

export default CourseTableCard;
