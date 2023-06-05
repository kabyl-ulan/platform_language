import React from "react";

//local
import { Containers } from "../ui";
import { useParams } from "react-router-dom";

const DetailTeacher = () => {
  const { idTeacher } = useParams();
  console.log(idTeacher);
  return (
    <section>
      <Containers>{idTeacher}</Containers>
    </section>
  );
};

export default DetailTeacher;
