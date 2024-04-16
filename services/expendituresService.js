import { httpService } from "./configUrl";

export const expendituresService = {
  getAllExpenditures: () => httpService.get("/expenditures/getAllExpenditures"),
  addExpenditures: (data) =>
    httpService.post("/expenditures/addExpenditures", data),
  deleteExpenditures: (id) =>
    httpService.delete(`/expenditures/deleteExpenditures/${id}`),
};
