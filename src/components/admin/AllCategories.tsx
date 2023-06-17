import React, { FC, useEffect, useState } from "react";
import { Th, Tr } from "@chakra-ui/react";

//local
import { useAppDispatch } from "../../redux/store";
import {
  getCategories,
  deleteCategories,
  addCategories,
  changeCategories,
} from "../../redux/categories/action";
import { useCategories } from "../../redux/categories/hooks";
import { CategoriesCard } from "../cards";
import { BtnAdd, Containers, Modals, Tables } from "../ui";
import { AddCategory } from "../forms";

const AllCategories: FC = () => {
  const dispatch = useAppDispatch();

  const { isLoading, categories, error } = useCategories();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!!error.length) {
    return <>{error}</>;
  }

  return (
    <Containers>
      <Modals
        isOpen={openModal}
        onClose={onClose}
        children={
          <AddCategory id="0" addFunction={addCategories} onClose={onClose} />
        }
      />
      <Tables
        thead={
          <Tr>
            <Th>№(id)</Th>
            <Th colSpan={2}>Название</Th>
            <Th>
              <BtnAdd onClick={() => setOpenModal(true)} />
            </Th>
          </Tr>
        }
        tbody={categories.map((el) => (
          <CategoriesCard
            key={el.id}
            elem={el}
            deleteFunc={deleteCategories}
            changeCategories={changeCategories}
            link="admin/subCategories"
          />
        ))}
        tcaption={categories.length === 0 ? "Категорий нет" : ""}
      />
    </Containers>
  );
};

export default AllCategories;
