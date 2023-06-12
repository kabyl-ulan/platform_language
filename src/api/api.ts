import axios, { AxiosInstance } from "axios";

//local
import { getLocalStorage } from "../utils/helpers/localStorage";
import { KEY_TOKEN } from "../utils/constans/key";

export const API_ADDRESS: string | undefined = process.env.REACT_APP_API_URL;

export const PUBLIC_API: AxiosInstance = axios.create({
  baseURL: API_ADDRESS,
});

const PRIVATE_API: AxiosInstance = axios.create({
  baseURL: API_ADDRESS,
});

PRIVATE_API.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${getLocalStorage(KEY_TOKEN)}`;
  return config;
});

export default PRIVATE_API;
