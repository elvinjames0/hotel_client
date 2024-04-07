import { httpService } from "./configUrl";

export const serviceDetail = {
  getServiceDetail: (id) =>
    httpService.get(`serviceDetail/getServiceDetail/${id}`),
  addServiceDetail: (data) =>
    httpService.post("/serviceDetail/addServiceDetail", data),
  deleteServiceDetail: (id) =>
    httpService.delete(`serviceDetail/deleteServiceDetail/${id}`),
};
