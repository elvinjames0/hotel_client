import { httpService } from "./configUrl";

export const billService = {
  addBill: (data) => httpService.post("/bill/addBill", data),
  getAllBill: () => httpService.get("/bill/getAllBill"),
  updateBill: (data) => httpService.put("/bill/updateBill", data),
};
