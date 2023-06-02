import React from "react";
import SubDropDown from "./SubDropDownMenu";

const DropDownMenu = ({ categories }: { categories: any }) => {
  return (
    <div>
      {categories.map((el: any, idx: any) => (
        <SubDropDown key={idx} elem={el} />
      ))}
    </div>
  );
};

export default DropDownMenu;
