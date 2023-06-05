import React from "react";
import { useParams } from "react-router-dom";

//local
import { Containers } from "../ui";
import { CourseCard } from "../cards";

const CoursesInById = () => {
  const { idCategory } = useParams();
  return (
    <section>
      <Containers>
        <p>{idCategory}</p>
        <CourseCard />
      </Containers>
    </section>
  );
};

export default CoursesInById;
