import { Component } from "react";
import { ReactNode } from "react";

//local
import { Containers } from "../ui";
import { CourseCard } from "../cards";
import { Box } from "@chakra-ui/react";

class AllCourseHero extends Component {
  render(): ReactNode {
    return (
      <section>
        <Containers>
          <Box py="10px">
            <CourseCard />
            <CourseCard />
          </Box>
        </Containers>
      </section>
    );
  }
}

export default AllCourseHero;
