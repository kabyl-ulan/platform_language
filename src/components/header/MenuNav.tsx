import React, { FC, useState } from "react";

//local
import BurgerBtn from "./BurgerBtn";
import Navigation from "./Navigation";

const MenuNav: FC = () => {
  const [openBurger, setOpenBurger] = useState<boolean>(false);
  return (
    <>
      <BurgerBtn openBurger={openBurger} setOpenBurger={setOpenBurger} />
      <Navigation openBurger={openBurger} />
    </>
  );
};

export default MenuNav;
