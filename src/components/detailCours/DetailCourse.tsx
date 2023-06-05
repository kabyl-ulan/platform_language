import React from "react";
import { Box, Text, Textarea } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

//local
import CourseImage from "../../assets/img/javaScript.png";
import { Btn, Containers, Images } from "../ui";
import { MdLanguage, MdOutlineCategory } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";

const DetailCourse = () => {
  const { idCourse } = useParams();
  console.log(idCourse);
  return (
    <section>
      <Containers>
        <Text fontSize="28px">
          Название курса: Интенсив JavaScript для всех!
        </Text>
        <Box display="flex" flexDir={{ base: "column", sm: "row" }} my="10px">
          <Box overflow="hidden">
            <Images
              source={CourseImage}
              alt="course_image"
              maxWidth={{ base: "100%", sm: "350px" }}
              _hover={{ transform: "scale(1.1)" }}
              cursor="pointer"
            />
          </Box>
          <Box maxW="800px" p="5px">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <GoClock />
                <Box ml="5px">
                  <Text>Продолжительность</Text>
                  <Text>05:39:50</Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <MdOutlineCategory />
                <Box ml="5px">
                  <Text>Категория</Text>
                  <Text>JavaScript</Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <AiOutlinePlayCircle />
                <Box ml="5px">
                  <Text>Количество уроков</Text>
                  <Text>10 видео</Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <CiCalendarDate />
                <Box ml="5px">
                  <Text>Дата добавления</Text>
                  <Text>25.05.2023</Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <MdLanguage />
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
        <Box my="10px" display="flex">
          <Box>
            <iframe
              width="760"
              height="415"
              src="https://www.youtube.com/embed/bMRosz1JZOA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Box>
          <Box w="450px" h="415px" px="10px" overflowY="auto">
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
