import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

//local
import { accountNav } from "../../utils/helpers/navigate";
import { getLocalStorage } from "../../utils/helpers/localStorage";

const Account: FC = () => {
  return (
    <>
      {getLocalStorage("user") !== "USER" ? (
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          {accountNav.map((nav, idx) => (
            <Box
              ml={{ base: "0", xs: "15px", lg: "20px" }}
              mb={{ base: "2px" }}
              key={idx}
              bg={{ xs: "blue.800" }}
              rounded="lg"
              p={{ xs: "5px 10px" }}
              fontWeight="600"
            >
              <NavLink to={nav.link}>
                <Text cursor="pointer" position="relative" className="item">
                  {nav.text}
                </Text>
              </NavLink>
            </Box>
          ))}
        </Box>
      ) : (
        <NavLink to="/my-account">
          <Text
            position="relative"
            fontWeight="600"
            cursor="pointer"
            className="item"
          >
            Личный кабинет
          </Text>
        </NavLink>
      )}
    </>
  );
};

export default Account;
