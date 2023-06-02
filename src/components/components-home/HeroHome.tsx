import { Component, ReactNode } from "react";
import { Box, Text } from "@chakra-ui/react";

import { Containers } from "../ui";

class HeroHome extends Component {
  render(): ReactNode {
    return (
      <section>
        <Containers>
          <Box py="20px">
            <Text fontSize="30px">Онлайн видео курсы</Text>
            <Text maxW={{ md: "70%", lg: "60%" }} mt="20px">
              Учите новые навыки, расширяйте знания и достигайте успеха с нашими
              онлайн курсами. Получите доступ к качественному обучению от
              ведущих экспертов в удобном формате.
            </Text>
          </Box>
        </Containers>
      </section>
    );
  }
}

export default HeroHome;
