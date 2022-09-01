import axios from "axios";
import axiosClient from "./axiosClient";

const orderAPI = {
  createOrder: (fullName, email, phone, paymentMethod, room_Id, user_Id) => {
    const url = "/functions/addBill";
    return axiosClient.post(url, {
      fullName,
      email,
      phone,
      paymentMethod,
      room_Id,
      user_Id,
    });
  },

  //id of a house
  getOrder: (objectId) => {
    const url = `/functions/getBillById?room_Id=${objectId}`;
    // const url = `/classes/Bill/?include=room_Id.rentHouse_Id.category_Id/room_Id=${objectId}`;
    return axiosClient.post(url);
  },
  getOrdersMine: (user_Id) => {
    const url = `/classes/Bill?include=room_Id,user_Id.objectId=${user_Id}`;
    return axiosClient.get(url);
  },
};
export default orderAPI;
