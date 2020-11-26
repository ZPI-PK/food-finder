import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ADDRESS,
});

export const setBearerToken = (token: string) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeBearerToken = () => {
  delete instance.defaults.headers.common["Authorization"];
};

export default instance;
