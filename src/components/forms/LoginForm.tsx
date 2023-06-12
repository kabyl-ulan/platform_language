import React, { useState } from "react";

import {
  Box,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//local
import { setLocalStorage } from "../../utils/helpers/localStorage";
import { KEY_TOKEN } from "../../utils/constans/key";
import { PUBLIC_API } from "../../api/api";
import {
  Btn,
  Containers,
  EyeInput,
  Inputs,
  LoginOrRegister,
  TextError,
} from "../ui";
import GoogleAuth from "../google-auth/GoogleAuth";
import { emailPattern } from "../../utils/constans/pattern";
import { InputsLogin } from "../../utils/helpers/interfaces";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsLogin>();

  const navigate = useNavigate();

  const [eye, setEye] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<InputsLogin> = async (user) => {
    try {
      setLoading(true);
      const { data } = await PUBLIC_API.post("user/login", { ...user });
      data?.token && setLocalStorage(KEY_TOKEN, data?.token);
      data?.role === "USER"
        ? navigate("/")
        : data?.role === "SUPER_ADMIN" && navigate("/admin");
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
    }
  };
  return (
    <section>
      <Containers>
        <Box
          maxW="500px"
          mx="auto"
          h="70vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Text textAlign="center" fontSize="30px">
              Авторизация
            </Text>
            <Box py="10px">
              <GoogleAuth />
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormLabel>
                Электронная почта*
                <Inputs
                  register={register("email", {
                    required: "Это поле обязательное",
                    pattern: {
                      value: emailPattern,
                      message: "Введите правильный адрес",
                    },
                  })}
                  type="email"
                  placeholder="email"
                />
                {errors.email && <TextError message={errors.email.message} />}
              </FormLabel>
              <FormLabel>
                Пароль*
                <InputGroup>
                  <Inputs
                    register={register("password", {
                      required: "Это поле обязательное",
                    })}
                    type={eye ? "text" : "password"}
                    placeholder="password"
                  />
                  <InputRightElement w="3rem">
                    <EyeInput eyeIsShow={eye} setEyeIsShow={setEye} />
                  </InputRightElement>
                </InputGroup>
                {errors.password && (
                  <TextError message={errors.password.message} />
                )}
              </FormLabel>
              <Box display="flex" justifyContent="center">
                <Btn text="Войти" isLoading={loading} p="10px 20px" />
              </Box>
            </form>
            <LoginOrRegister
              quation="У вас нет аккаунта?"
              text="Зарегистрироваться"
              navigate={"/register"}
            />
          </Box>
        </Box>
      </Containers>
    </section>
  );
};

export default LoginForm;
