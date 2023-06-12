import { FC, useEffect } from "react";
import { Box, Text, Textarea } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

//local
import "./youtube_video.scss";
import CourseImage from "../../assets/img/javaScript.png";
import { Btn, Containers, Images } from "../ui";
import { MdLanguage, MdOutlineCategory } from "react-icons/md";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { FaChalkboardTeacher } from "react-icons/fa";

const DetailCourse: FC = () => {
  const { idCourse } = useParams();

  useEffect(() => {
    console.log(idCourse);
  }, [idCourse]);
  return (
    <section>
      <Containers>
        <Text fontSize="28px">
          Название курса: Интенсив JavaScript для всех!
        </Text>
        <Box display="flex" flexDir={{ base: "column", xs: "row" }} my="10px">
          <Box overflow="hidden" w={{ base: "100%", xs: "350px" }}>
            <Images
              source={CourseImage}
              alt="course_image"
              width="100%"
              _hover={{ transform: "scale(1.1)" }}
              cursor="pointer"
            />
          </Box>
          <Box w="100%" p={{ base: "8px 0", xs: "0 8px" }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ base: "space-around", lg: "space-between" }}
              flexWrap="wrap"
            >
              <Box display="flex" alignItems="center">
                <MdOutlineCategory style={{ fontSize: "28px" }} />
                <Box ml="5px">
                  <Text>Категория</Text>
                  <Text>JavaScript</Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <FaChalkboardTeacher style={{ fontSize: "28px" }} />
                <Box ml="5px">
                  <Text>Преподаватель</Text>
                  <Text>Каримбаев Т.Т.</Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <AiOutlinePlayCircle style={{ fontSize: "28px" }} />
                <Box ml="5px">
                  <Text>Количество уроков</Text>
                  <Text>10 видео</Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <CiCalendarDate style={{ fontSize: "28px" }} />
                <Box ml="5px">
                  <Text>Дата добавления</Text>
                  <Text>25.05.2023</Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <MdLanguage style={{ fontSize: "28px" }} />
                <Box ml="5px">
                  <Text>Язык</Text>
                  <Text>Русский</Text>
                </Box>
              </Box>
            </Box>
            <Text mt="10px">
              По прохождению интенсива JavaScript для всех!, ты сможешь начать
              создавать свои первые проекты с использованием изученных знаний.
              Ты полностью освоишь процесс разработки и получишь первую работу в
              своё портфолио. По окончанию обучения ты получишь сертификат,
              который пригодится при поступлении на работу или просто в
              портфолио.
            </Text>
          </Box>
        </Box>
        <Box my="10px" display="flex" flexDir={{ base: "column", xs: "row" }}>
          <Box>
            <iframe
              src="https://www.youtube.com/embed/bMRosz1JZOA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="youtube_video"
            ></iframe>
          </Box>
          <Box w={{ xs: "450px" }} h="415px" px="10px" overflowY="auto">
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 1</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>Что такое JavaScript?</Text>
            </Box>
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 2</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>Что такое JavaScript?</Text>
            </Box>
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 3</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>Что такое JavaScript?</Text>
            </Box>
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 4</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>Что такое JavaScript?</Text>
            </Box>
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 5</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>Что такое JavaScript?</Text>
            </Box>
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 6</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>Что такое JavaScript?</Text>
            </Box>
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 7</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>Что такое JavaScript?</Text>
            </Box>
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 8</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>Что такое JavaScript?</Text>
            </Box>
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 9</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>Что такое JavaScript?</Text>
            </Box>
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 10</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>Что такое JavaScript?</Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Text textAlign="center" fontSize="30px">
            Комментарии
          </Text>
          <Box my="10px" borderBottom="1px" pb="5px">
            <Textarea placeholder="Комментарии" mb="10px" />
            <Box display="flex" justifyContent="center">
              <Btn text="Отправить" />
            </Box>
          </Box>
          <Box mb="20px">
            <Box display="flex" justifyContent="space-between">
              <Text>Kabyl-Ulan Abdykalyk uulu</Text>
              <Text>26.05.2023</Text>
            </Box>
            <Box border="1px" p="5px 10px">
              <Text>
                Ролики перестали тормозить и появилась возможность оценить курс.
                Очень слабый. Классическая мешанина. Курс, который называется
                "интенсив по JS" всего 9 уроков рассказывает про сам JS. При
                этом это происходит максимально поверхностно.
              </Text>
            </Box>
          </Box>
          <Box mb="20px">
            <Box display="flex" justifyContent="space-between">
              <Text>Kabyl-Ulan Abdykalyk uulu</Text>
              <Text>27.05.2023</Text>
            </Box>
            <Box border="1px" p="5px 10px">
              <Text>
                Таргетный зритель данного курса не выявлен. Смотреть можно
                только ради того, чтобы словить пару лулзов и фейспалмов.
              </Text>
            </Box>
          </Box>
        </Box>
      </Containers>
    </section>
  );
};

export default DetailCourse;
