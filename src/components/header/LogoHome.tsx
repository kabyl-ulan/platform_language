import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

type ILogoLink = {
  link?: string;
};

const LogoHome: FC<ILogoLink> = ({ link }) => {
  return (
    <Box>
      <Link to={link ? link : "/"}>
        <Text mr="15px" fontWeight="600">
          Course
        </Text>
      </Link>
    </Box>
  );
};

export default LogoHome;
