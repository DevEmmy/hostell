import axios from "axios";


// const result = JSON.parse(localStorage.getItem("user"));
// // console.log(result)
//   const token = result.payload.token
//   // console.log(token)

const axiosConfig = axios.create({
  baseURL: "https://hostell.onrender.com",
});

export const login = async(email, password) => {
  const response = await axiosConfig.post("/users/sign-in", { email, password });
  localStorage.setItem('user', JSON.stringify(response.data))
  return response.data
};

export const signup = async(firstName, lastName, email, password, userType) => {
   const response = await axiosConfig.post("/users/sign-up", {
    firstName,
    lastName,
    email,
    password,
    userType
  }, {});
  localStorage.setItem('user', JSON.stringify(response.data))
  return response.data
};

export const recommendedHostel = async () => {
  const response = await axiosConfig.get("/hostels/type/recommended");
  return response.data;
};

export const popularHostel = async () => {
  const response = await axiosConfig.get("/hostels/type/popular");
  return response.data;
};

export const addHostel = async(title,images,location,description,price,features,available,availableRooms) => {
  const result = JSON.parse(localStorage.getItem("user"));
// console.log(result)
  const token = result.payload.token
  // console.log(token)
  const response = await axiosConfig.post('/hostels/', {
    title,
    images,
    location,
    description,
    price,
    features,
    available,
    availableRooms
  }, { headers: { Authorization: `Bearer ${token}` } })
  return response
}