import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  quation: string;
  text: string;
  navigate: string;
};

const LoginOrRegister: FC<Props> = ({ quation, text, navigate }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      pt="10px"
      fontSize="15px"
      flexDir={{ base: "column", sm: "row" }}
    >
      <Text mr="5px">{quation}</Text>
      <Link to={navigate}>
        <Text color="blue.400">{text}</Text>
      </Link>
    </Box>
  );
};

export default LoginOrRegister;
