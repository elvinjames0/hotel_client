import { httpService } from "./configUrl";

export const stockService = {
  addStockIn: (data) => httpService.post("/stock/addStockIn", data),
  getAllStockIn: () => httpService.get("/stock/getAllStockIn"),
  addStockInDetail: (data) => httpService.post("/stock/addStockInDetail", data),
  getDetailStockIn: (id) => httpService.get(`/stock/getDetailStockIn/${id}`),
  //
  getAllProduct: () => httpService.get("/stock/getAllProduct"),
  addProduct: (data) => httpService.post("/stock/addProduct", data),
  deleteProduct: (id) => httpService.delete(`/stock/deleteProduct/${id}`),
};
