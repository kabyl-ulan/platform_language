import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

//local
import { menuAdmin } from "../../utils/helpers/menuAdmin";

const AdminMenu: FC = () => {
  return (
    <Box
      position="fixed"
      display="flex"
      zIndex="9"
      top="70px"
      left="0"
      pt="10px"
      flexDirection="column"
      w="220px"
      h="100vh"
      bg="#ffffff"
      className="menu__admin"
    >
      {menuAdmin.map((el, idx) => (
        <NavLink to={el.link} key={idx}>
          <Box
            px="20px"
            py="15px"
            className="nav__menu"
            fontWeight="600"
            color="#000000"
            fontSize="16px"
            _hover={{ background: "#545799", color: "#ffffff" }}
          >
            <Text>{el.text}</Text>
          </Box>
        </NavLink>
      ))}
    </Box>
  );
};

export default AdminMenu;
