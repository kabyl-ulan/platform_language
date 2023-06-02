import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Account: FC = () => {
  return (
    <>
      <Box display="flex">
        <Box mx="15px">
          <NavLink to="/login">
            <Text cursor="pointer" position="relative" className="item">
              Авторизация
            </Text>
          </NavLink>
        </Box>
        <Box mx="15px">
          <NavLink to="/register">
            <Text cursor="pointer" position="relative" className="item">
              Регистрация
            </Text>
          </NavLink>
        </Box>
      </Box>
    </>
  );
};

export default Account;
