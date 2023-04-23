import axios from "axios";

const API_ADDRESS = process.env.REACT_APP_API_URL;

export const PUBLIC_API = axios.create({
  baseURL: API_ADDRESS,
});
