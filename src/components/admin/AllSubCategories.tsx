import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//local
import { useSubCategories } from "../../redux/subCategories/hooks";
import { useAppDispatch } from "../../redux/store";
import { BtnAdd, Containers, Modals, Tables } from "../ui";
import {
  addSubCategories,
  changeSubCategories,
  deleteSubCategories,
  getSubCategories,
} from "../../redux/subCategories/action";
import { AddCategory } from "../forms";
import { Th, Tr } from "@chakra-ui/react";
import { CategoriesCard } from "../cards";

const AllSubCategories: FC = () => {
  const { idCategory } = useParams<{ idCategory: string }>();
  const dispatch = useAppDispatch();

  const { isLoading, subCategories, error } = useSubCategories();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    !!idCategory && dispatch(getSubCategories(parseInt(idCategory)));
  }, [dispatch, idCategory]);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!!error.length) {
    return <>{error}</>;
  }

  return (
    <Containers>
      {idCategory && (
        <Modals
          isOpen={openModal}
          onClose={onClose}
          children={
            <AddCategory
              id={idCategory}
              addFunction={addSubCategories}
              onClose={onClose}
            />
          }
        />
      )}
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
        tbody={subCategories.map((el) => (
          <CategoriesCard
            key={el.id}
            elem={el}
            deleteFunc={deleteSubCategories}
            changeCategories={changeSubCategories}
            link="admin/courses"
            parentCategoryId={idCategory}
          />
        ))}
        tcaption={subCategories.length === 0 ? "Под категорий нет" : ""}
      />
    </Containers>
  );
};

export default AllSubCategories;
