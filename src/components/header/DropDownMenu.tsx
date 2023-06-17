import React from "react";
import SubDropDown from "./SubDropDownMenu";
import { ICategoryAll } from "../../redux/getAllCategoriesApi";

const DropDownMenu = ({ categories }: { categories: ICategoryAll[] }) => {
  return (
    <div>
      {categories.map((el) => (
        <SubDropDown key={el.id} elem={el} />
      ))}
    </div>
  );
};

export default DropDownMenu;
