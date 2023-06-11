import { Box } from "@chakra-ui/react";
import { FC } from "react";

//local
import { openOrClose } from "../../redux/burger-menu/action";
import { useAppDispatch } from "../../redux/store";

type IBurgerBtn = {
  openBurger: boolean;
};

const BurgerBtn: FC<IBurgerBtn> = ({ openBurger }) => {
  const dispatch = useAppDispatch();
  const openBurgerAction = openOrClose({ isOpen: !openBurger });

  const handleClick = () => {
    dispatch(openBurgerAction);
  };

  return (
    <button
      onClick={handleClick}
      className={`burger-btn ${openBurger ? "active-burger" : ""}`}
    >
      <Box
        w="26px"
        rounded="15px"
        m={{ l: "auto" }}
        h="3px"
        bg="#ffffff"
        className="burger-btn--top"
      ></Box>
      <Box
        w="26px"
        rounded="15px"
        m={{ l: "auto" }}
        h="3px"
        bg="#ffffff"
        className="burger-btn--center"
      ></Box>
      <Box
        w="26px"
        rounded="15px"
        h="3px"
        bg="#ffffff"
        className="burger-btn--bottom"
      ></Box>
    </button>
  );
};

export default BurgerBtn;
