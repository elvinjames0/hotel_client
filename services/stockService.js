import { httpService } from "./configUrl";

export const stockService = {
  addStockIn: (data) => httpService.post("/stock/addStockIn", data),
  addStockInDetail: (data) => httpService.post("/stock/addStockInDetail", data),
  addProduct: (data) => httpService.post("/stock/addProduct", data),
  getAllStockIn: () => httpService.get("/stock/getAllStockIn"),
  getDetailStockIn: (id) => httpService.get(`/stock/getDetailStockIn/${id}`), // chưa xong
  getAllProduct: () => httpService.get("/stock/getAllProduct"),
  deleteProduct: (id) => httpService.delete(`/stock/deleteProduct/${id}`),
};
