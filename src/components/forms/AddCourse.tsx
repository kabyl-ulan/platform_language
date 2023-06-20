import React from "react";
import { Box, FormLabel, Textarea } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

//local
import { BtnAdd, Inputs, TextError } from "../ui";
import { InputsCourse } from "../../redux/course/interfaces";
import { useAppDispatch } from "../../redux/store";
import { addCourse } from "../../redux/course/action";

const AddCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsCourse>();

  const { idCategory } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<InputsCourse> = (dataCourse) => {
    dispatch(addCourse(dataCourse, navigate));
  };

  return (
    <>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("categoryId", { required: true })}
            type="hidden"
            defaultValue={idCategory}
          />
          <FormLabel>
            Наименование*
            <Inputs
              register={register("courseName", {
                required: "Это поле обязательное",
              })}
              type="text"
              placeholder="Наименование"
            />
            {errors.courseName && (
              <TextError message={errors.courseName.message} />
            )}
          </FormLabel>
          <FormLabel>
            Автор*
            <Inputs
              register={register("author", {
                required: "Это поле обязательное",
              })}
              type="text"
              placeholder="Автор"
            />
            {errors.author && <TextError message={errors.author.message} />}
          </FormLabel>
          <FormLabel>
            Цена*
            <Inputs
              register={register("price", {
                required: "Это поле обязательное",
              })}
              type="number"
              placeholder="Цена"
            />
            {errors.price && <TextError message={errors.price.message} />}
          </FormLabel>
          <FormLabel>
            Описание*
            <Textarea
              {...register("description", {
                required: "Это поле обязательное",
              })}
              placeholder="Описание"
            />
            {errors.description && (
              <TextError message={errors.description.message} />
            )}
          </FormLabel>
          <BtnAdd />
        </form>
      </Box>
    </>
  );
};

export default AddCourse;
