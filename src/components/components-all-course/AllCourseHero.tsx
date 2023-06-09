import { Component } from "react";
import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

//local
import { Containers } from "../ui";
import { CourseCard } from "../cards";
import { Pagination } from "../pagination";

type IAllCourseHeroComponent = {
  currentPage: number;
};

class AllCourseHero extends Component<{}, IAllCourseHeroComponent> {
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
          <Box py="10px">
            <CourseCard />
            <CourseCard />
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
          </Box>
        </Containers>
      </section>
    );
  }
}

export default AllCourseHero;
