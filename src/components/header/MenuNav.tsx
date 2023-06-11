import React, { FC } from "react";

//local
import BurgerBtn from "./BurgerBtn";
import Navigation from "./Navigation";
import { useBurgerMenu } from "../../redux/burger-menu/hook";

const MenuNav: FC = () => {
  const { isOpen } = useBurgerMenu();
  return (
    <>
      <BurgerBtn openBurger={isOpen} />
      <Navigation openBurger={isOpen} />
    </>
  );
};

export default MenuNav;
