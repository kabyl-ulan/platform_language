import { Box } from "@chakra-ui/react";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";

//local
import { ICategory } from "../../../redux/categories/interfaces";
import { AppDispatch, useAppDispatch } from "../../../redux/store";
import { BtnChange, InputsType } from "../../ui";

type IAddCategory = {
  elem: ICategory;
  changeFunction: (
    elem: ICategory,
    parentCategoryId?: string
  ) => (dispatch: AppDispatch) => Promise<void>;
  onClose: () => void;
  parentCategoryId?: string;
};

const ChangeCategory: FC<IAddCategory> = ({
  elem,
  changeFunction,
  onClose,
  parentCategoryId,
}) => {
  const [category, setCategory] = useState<ICategory>({
    categoryName: elem.categoryName,
    id: elem.id,
  });

  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (elem.categoryName !== category.categoryName) {
      dispatch(changeFunction(category, parentCategoryId));
      onClose();
    }
  };

  return (
    <Box p="10px">
      <form onSubmit={handleSubmit}>
        <InputsType
          type="text"
          name="categoryName"
          placeholder="Наименование категории"
          defaultValue={elem.categoryName}
          onChange={handleChange}
          required={true}
        />
        <Box display="flex" justifyContent="center" pt="10px">
          <BtnChange />
        </Box>
      </form>
    </Box>
  );
};

export default ChangeCategory;
