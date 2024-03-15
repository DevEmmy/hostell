import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://192.168.0.152:3030",
});

export const login = (email, password) => {
  axiosConfig.post("/users/sign-in", { email, password });
};

export const signup = (firstname, lastname, email, password, student) => {
  axiosConfig.post("/users/sign-up", {
    firstname,
    lastname,
    email,
    password,
    student,
  });
};

export const recommendedHostel = async () => {
  const response = await axiosConfig.get("/hostels/type/recommended");
  return response.data;
};

export const popularHostel = () => {
  axiosConfig.get("/hostels/popular");
};
