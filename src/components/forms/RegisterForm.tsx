import React, { FC, useEffect, useState } from "react";
import {
  Box,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

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
import { emailPattern, phonePattern } from "../../utils/constans/pattern";
import { InputsRegister } from "../../utils/helpers/interfaces";
import { useNavigate } from "react-router-dom";

const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<InputsRegister>();

  const navigate = useNavigate();

  const [eye, setEye] = useState<boolean>(false);
  const [eyeConfirm, setEyeConfirm] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorPassword2, setErrorPassword2] = useState<boolean>(true);

  const onSubmit: SubmitHandler<InputsRegister> = async (user) => {
    try {
      setLoading(true);
      if (watch().password1 === watch().password2) {
        setErrorPassword2(false);
        const { data } = await PUBLIC_API.post("user/register", { ...user });
        console.log(data);
        data?.token && setLocalStorage(KEY_TOKEN, data?.token);
        data?.role === "USER" && navigate("/");
      } else {
        setErrorPassword2(true);
      }
      setLoading(false);
    } catch (e: any) {
      console.log(e);
      setLoading(false);
    }
  };

  const renderInputField = (
    name: string,
    fieldName: keyof InputsRegister,
    type: string,
    placeholder: string,
    required = true,
    pattern?: {
      value: any;
      message: string;
    }
  ) => (
    <FormLabel>
      {name}
      <Inputs
        register={register(fieldName, {
          required: required && "Это обязательное поле",
          pattern,
        })}
        type={type}
        placeholder={placeholder}
      />
      {errors[fieldName] && <TextError message={errors[fieldName]?.message} />}
    </FormLabel>
  );

  useEffect(() => {
    if (watch().password1 === watch().password2) {
      setErrorPassword2(false);
    } else {
      setErrorPassword2(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch().password1, watch().password2, watch]);

  return (
    <section>
      <Containers>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box maxW="500px" mx="auto" py="25px">
            <Text textAlign="center" fontSize="30px">
              Регистрация
            </Text>
            {renderInputField("Имя*", "name", "text", "name")}
            {renderInputField("Фамилия*", "surname", "text", "surname")}
            {renderInputField(
              "Электронная почта*",
              "email",
              "email",
              "xxx@gmail.com",
              true,
              { value: emailPattern, message: "Введите правильный адрес" }
            )}
            {renderInputField(
              "Телефон*",
              "phoneNumber",
              "text",
              "+996xxxxxxxxx",
              true,
              {
                value: phonePattern,
                message: "Введите в формате +996xxxxxxxxx",
              }
            )}
            <FormLabel>
              Пароль*
              <InputGroup>
                <Inputs
                  register={register("password1", {
                    required: "Это обязательное поле",
                    minLength: {
                      value: 6,
                      message: "Введите не более 6 символов",
                    },
                  })}
                  type={eye ? "text" : "password"}
                  placeholder="password"
                />
                <InputRightElement w="3rem">
                  <EyeInput eyeIsShow={eye} setEyeIsShow={setEye} />
                </InputRightElement>
              </InputGroup>
              {errors.password1 && (
                <TextError message={errors.password1?.message} />
              )}
            </FormLabel>
            <FormLabel>
              Подтвердить пароль*
              <InputGroup>
                <Inputs
                  register={register("password2", {
                    required: "Введите пароль повторно",
                  })}
                  type={eyeConfirm ? "text" : "password"}
                  placeholder="confirm password"
                />
                <InputRightElement w="3rem">
                  <EyeInput
                    eyeIsShow={eyeConfirm}
                    setEyeIsShow={setEyeConfirm}
                  />
                </InputRightElement>
              </InputGroup>
              <TextError
                message={
                  errors.password2
                    ? errors.password2.message
                    : errorPassword2
                    ? "Пароли не совпадают"
                    : ""
                }
              />
            </FormLabel>
            <Box display="flex" justifyContent="center">
              <Btn text="Регистрация" isLoading={loading} />
            </Box>
            <LoginOrRegister
              quation="У есть аккаунт?"
              text="Авторизоваться"
              navigate={"/login"}
            />
          </Box>
        </form>
      </Containers>
    </section>
  );
};

export default RegisterForm;
