import React from "react";
import SubDropDown from "./SubDropDownMenu";
import { ICategory } from "../../redux/getAllCategoriesApi";

const DropDownMenu = ({ categories }: { categories: ICategory[] }) => {
  return (
    <div>
      {categories.map((el) => (
        <SubDropDown key={el.id} elem={el} />
      ))}
    </div>
  );
};

export default DropDownMenu;
