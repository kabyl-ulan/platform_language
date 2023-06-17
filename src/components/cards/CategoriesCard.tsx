import { Link, Td, Tr } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

//local
import { ICategory } from "../../redux/categories/interfaces";
import { AppDispatch, useAppDispatch } from "../../redux/store";
import { BtnChange, BtnDelete, Modals } from "../ui";
import { ChangeCategory } from "../forms";

type ICategoryCard = {
  elem: ICategory;
  deleteFunc: (
    id: number,
    parentCategoryId?: string
  ) => (dispatch: AppDispatch) => Promise<void>;
  changeCategories: (
    elem: ICategory,
    parentCategoryId?: string
  ) => (dispatch: AppDispatch) => Promise<void>;
  link: string;
  parentCategoryId?: string;
};

const CategoriesCard: FC<ICategoryCard> = ({
  elem,
  deleteFunc,
  changeCategories,
  link,
  parentCategoryId,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => setIsOpen(false);
  return (
    <Tr>
      <Td>{elem.id}</Td>
      <Td onClick={() => navigate(`/${link}/${elem.id}`)} cursor="pointer">
        <Link>{elem.categoryName}</Link>
      </Td>
      <Td>
        <Modals
          isOpen={isOpen}
          onClose={onClose}
          children={
            <ChangeCategory
              elem={elem}
              changeFunction={changeCategories}
              onClose={onClose}
              parentCategoryId={parentCategoryId}
            />
          }
        />
        <BtnChange onClick={() => setIsOpen(true)} />
      </Td>
      <Td>
        <BtnDelete
          onClick={() => {
            dispatch(deleteFunc(elem.id, parentCategoryId));
          }}
        />
      </Td>
    </Tr>
  );
};

export default CategoriesCard;
