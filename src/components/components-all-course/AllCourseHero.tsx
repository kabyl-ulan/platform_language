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
              title="Java Spring & Apache Kafka Bootcamp - От начала до конца"
              description="Сегодня мы работаем с множеством систем и данными, которые пересекаются между ними. Часто одна система запускает процесс в другой системе(ах), или данные должны передаваться между системами."
              image="https://cdn.coursehunter.net/courses/268x160/java-spring-apache-kafka-bootcamp-ot-nachala-do-konca.webp"
            />
            <CourseCard
              title="Python - Полный Курс по Python"
              description="Python - это самый простой язык программирования в мире. Является мощным инструментом, с помощью которого можно решать огромный спектр различных задач, начиная от обработки файлов, и заканчивая МО, созданием игр и др."
              image="https://cdn.coursehunter.net/courses/268x160/python-polnyy-kurs-po-python.webp"
            />
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
