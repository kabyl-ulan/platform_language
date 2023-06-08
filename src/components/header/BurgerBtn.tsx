import { Box } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";

type IBurgerBtn = {
  openBurger: boolean;
  setOpenBurger: Dispatch<SetStateAction<boolean>>;
};

const BurgerBtn: FC<IBurgerBtn> = ({ openBurger, setOpenBurger }) => {
  return (
    <button
      onClick={() => setOpenBurger(!openBurger)}
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
