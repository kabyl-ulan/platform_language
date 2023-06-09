import React, { Component, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

//local
import { Containers } from "../ui";
import { TeacherCard } from "../cards";
import { Pagination } from "../pagination";

type IAllCourseHeroComponent = {
  currentPage: number;
};

class AllTeachersHero extends Component<{}, IAllCourseHeroComponent> {
  constructor(props: IAllCourseHeroComponent) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }
  render(): ReactNode {
    const size = 1;

    return (
      <section>
        <Containers>
          <Box
            display="flex"
            justifyContent={{ base: "space-around", xs: "space-between" }}
            flexWrap="wrap"
          >
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
          </Box>
          <Box display="flex" justifyContent="center" py="20px">
            <Pagination
              className="pagination-bar"
              currentPage={this.state.currentPage}
              totalCount={15}
              pageSize={size}
              onPageChange={(page: number) => {
                this.setState({ currentPage: page });
              }}
            />
          </Box>
        </Containers>
      </section>
    );
  }
}

export default AllTeachersHero;
