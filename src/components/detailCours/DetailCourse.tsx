import { FC, useEffect } from "react";
import { Box, Text, Textarea } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { MdLanguage, MdOutlineCategory } from "react-icons/md";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { FaChalkboardTeacher } from "react-icons/fa";

//local
import "./youtube_video.scss";
import { Btn, Containers, Images } from "../ui";
import { windowOpen } from "../../utils/helpers/navFunction";
import {
  whatsappMessage,
  whatsappNumber,
} from "../../utils/constans/messengers";

const DetailCourse: FC = () => {
  const { idCourse } = useParams();

  useEffect(() => {
    console.log(idCourse);
  }, [idCourse]);
  return (
    <section>
      <Containers>
        <Text fontSize="28px">Название курса: English Language for IT</Text>
        <Box display="flex" flexDir={{ base: "column", xs: "row" }} my="10px">
          <Box overflow="hidden" w={{ base: "100%", xs: "350px" }}>
            <Images
              source="https://www.vec.ca/wp-content/uploads/2019/03/English-Language-Level-System-704x350.jpg"
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
                  <Text>Для IT-специалистов</Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <FaChalkboardTeacher style={{ fontSize: "28px" }} />
                <Box ml="5px">
                  <Text>Преподаватель</Text>
                  <Text>Болотов Т.Т.</Text>
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
              Курсы английского языка тщательно планируются и проводятся, чтобы
              исключить ненужное повторение. Обычно у них от 45 до 50 классов,
              разделенных на 15 уровней. Когда вы начнете учиться в школе
              английского языка, вам будет предложен устный и письменный
              экзамен.
            </Text>
          </Box>
        </Box>
        <Box>
          <Text textAlign="center">100 сом</Text>
        </Box>
        <Box my="10px" display="flex" flexDir={{ base: "column", xs: "row" }}>
          <Box>
            <Box
              className="youtube_video"
              bg="black"
              borderRadius="10px"
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box display="flex" flexDir="column" alignItems="center">
                <Text mb="10px">Этот курс будет доступен после оплаты!</Text>
                <Btn
                  text="Оформить подписку"
                  onClick={() => {
                    windowOpen(
                      `https://wa.me/${whatsappNumber}?text=${"Здравствуйте! Название курса: English Language for IT."}`
                    );
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box w={{ xs: "450px" }} h="415px" px="10px" overflowY="auto">
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 1</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>Welcome on Board</Text>
            </Box>
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 2</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>Блок о мышлении</Text>
            </Box>
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 3</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>Блок о мышлении</Text>
            </Box>
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 4</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>1.2 Pronunciation Technologies</Text>
            </Box>
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 5</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>1.3 Grammar Gerunds vs. Infinitives</Text>
            </Box>
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 6</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>
                1.5 Speaking & Writing Explaining Your Choice of a Tech Stac
              </Text>
            </Box>
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 7</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>2.2 Pronunciation Nouns vs. Verbs</Text>
            </Box>
            <Box borderBottom="1px" mb="10px">
              <Box display="flex" justifyContent="space-between">
                <Text>Урок 8</Text>
                <Text>00:09:10</Text>
              </Box>
              <Text>11.2 Grammar Storytelling</Text>
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
          {/* <Box my="10px" borderBottom="1px" pb="5px">
            <Textarea placeholder="Комментарии" mb="10px" />
            <Box display="flex" justifyContent="center">
              <Btn text="Отправить" />
            </Box>
          </Box> */}
          <Box mb="20px">
            <Box display="flex" justifyContent="space-between">
              <Text>Канат Асанбеков</Text>
              <Text>26.05.2023</Text>
            </Box>
            <Box border="1px" p="5px 10px">
              <Text>
                Курс поможет наработать теоретическую базу для дальнейшего
                изучения английского языка, и раз и навсегда побороть страх
                общения с иностранцами.
              </Text>
            </Box>
          </Box>
          <Box mb="20px">
            <Box display="flex" justifyContent="space-between">
              <Text>Айпери Джаныбекова</Text>
              <Text>27.05.2023</Text>
            </Box>
            <Box border="1px" p="5px 10px">
              <Text>
                Занятия для изучения английского языка на уровне Beginner. Здесь
                вы пополните свой словарный запас, изучите грамматические
                правила и научитесь воспринимать речь на слух. Ученики, которые
                прошли курс, уверенно общаются на бытовые темы и умеют писать и
                читать на английском языке.
              </Text>
            </Box>
          </Box>
        </Box>
      </Containers>
    </section>
  );
};

export default DetailCourse;
