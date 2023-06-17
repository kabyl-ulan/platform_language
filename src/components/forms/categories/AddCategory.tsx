import { Box } from "@chakra-ui/react";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";

//local
import { ICategoryAdd } from "../../../redux/categories/interfaces";
import { AppDispatch, useAppDispatch } from "../../../redux/store";
import { BtnAdd, InputsType } from "../../ui";

type IAddCategory = {
  id: string;
  addFunction: (
    category: ICategoryAdd,
    parentCategoryId?: number
  ) => (dispatch: AppDispatch) => Promise<void>;
  onClose: () => void;
};

const AddCategory: FC<IAddCategory> = ({ id, addFunction, onClose }) => {
  const [category, setCategory] = useState<ICategoryAdd>({
    categoryName: "",
    parentCategoryId: id,
    file: null,
  });

  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addFunction(category, parseInt(id)));
    onClose();
  };

  return (
    <Box p="10px">
      <form onSubmit={handleSubmit}>
        <InputsType
          type="text"
          name="categoryName"
          placeholder="Наименование категории"
          defaultValue={category.categoryName}
          onChange={handleChange}
          required={true}
        />
        <Box display="flex" justifyContent="center" pt="10px">
          <BtnAdd />
        </Box>
      </form>
    </Box>
  );
};

export default AddCategory;
