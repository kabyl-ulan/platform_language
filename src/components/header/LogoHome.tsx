import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

const LogoHome: FC = () => {
  return (
    <Box>
      <Link to="/">
        <Text mr="15px" fontWeight="600">
          Course
        </Text>
      </Link>
    </Box>
  );
};

export default LogoHome;
