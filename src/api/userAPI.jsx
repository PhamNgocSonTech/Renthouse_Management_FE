import axiosClient from "./axiosClient";

const userAPI = {
  create: (username, password, email) => {
    const url = "/functions/signup";
    return axiosClient.post(url, { username, password, email });
  },
  login: (email, password) => {
    const url = "/functions/loginWithMail";
    return axiosClient.post(url, { email, password });
  },
  createOrder: (fullName, phone, room_Id) => {
    const url = "/functions/addBill";
    return axiosClient.post(url, { fullName, phone, room_Id });
  },
  updateUser: (objectId, username, email, password) => {
    const url = "/functions/changeUsername";
    return axiosClient.post(url, { objectId, username, email, password });
  },
};

export default userAPI;
