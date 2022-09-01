import axiosClient from "./axiosClient";

// api/productApi.js
const houseApi = {
  // getAll: (params) => {
  //   const url = "/classes/RentHouse?include=CategoryId";
  //   return axiosClient.get(url, { params });
  // },
  getAll: () => {
    const url = "/classes/RentHouse?include=category_Id";
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  getRoomById: (objectId) => {
    const url = `/classes/Room/${objectId}/?include=renthouse_Id.category_Id`;

    return axiosClient.get(url);
  },
  getAllRoom: () => {
    const url = "/classes/Room?include=renthouse_Id.category_Id";
    return axiosClient.get(url);
  },
  getCate: () => {
    const url = "/classes/Categories";
    return axiosClient.get(url);
  },
  getRoomByCate: (category_Id) => {

    const url = `/functions/getRentHouseByCategory/?category_Id=${category_Id}`;
    return axiosClient.post(url);
  },
};

export default houseApi;
