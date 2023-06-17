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
          <Box pb="10px" pt="15px">
            <CourseCard
              image="https://cdn.coursehunter.net/courses/268x160/angliyskiy-dlya-nachinayushchih-intensivnyy-razgovornyy-kurs.webp"
              title="Английский для начинающих: интенсивный разговорный курс"
              description="66 часов разговорного английского языка, практика прослушивания английского языка. 1000 английских слов. Представляем LOGUS. Ваш самый мощный и интенсивный онлайн курс английского языка."
            />
            <CourseCard
              title="English Language for IT"
              description="В процессе обучения вы научитесь понимать иностранную речь на слух, грамотно писать и бегло поддерживать беседу на бытовые темы. "
              image="https://www.vec.ca/wp-content/uploads/2019/03/English-Language-Level-System.jpg"
            />
            <CourseCard
              title="Essay On Importance of English Language"
              description="Английский язык занимает прочное место в лингвистике и общении во всем мире. Можно получить представление о важности изучения английского языка из того факта, что независимо от того, путешествуете ли вы, работаете или учитесь, английский язык используется повсюду."
              image="data:image/jpeg;base64,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"
            />
            <Box display="flex" justifyContent="center" py="20px">
              <Pagination
                className="pagination-bar"
                currentPage={this.state.currentPage}
                totalCount={8}
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
