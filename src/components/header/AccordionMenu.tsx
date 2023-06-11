import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

//local
import { useGetCategoryListQuery } from "../../redux/api";

const AccordionMenu: FC = () => {
  const { data } = useGetCategoryListQuery();

  return (
    <Accordion>
      {data?.map((el) => (
        <AccordionItem key={el.id}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {el.categoryName}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {!!el.subCategoryResponses.length &&
              el.subCategoryResponses.map((item) => (
                <Box ml={{ base: "0", xs: "15px", lg: "20px" }} key={item.id}>
                  <NavLink to={`/courses/${item.id}`}>
                    <Text cursor="pointer" position="relative" className="item">
                      {item.categoryName}
                    </Text>
                  </NavLink>
                </Box>
              ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionMenu;
