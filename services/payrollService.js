import { httpService } from "./configUrl";

export const payrollService = {
  getAllPayroll: () => httpService.get("/payroll/getAllPayroll"),
  addPayroll: (data) => httpService.post("/payroll/addPayroll", data),
  paySalary: (data) => httpService.put("/payroll/paySalary", data),
  //
  getAllBonusFine: () => httpService.get("/payroll/getAllBonusFine"),
  addBonusFine: (data) => httpService.post("/payroll/addBonusFine", data),
  updateBonusFine: (id, data) =>
    httpService.put(`/payroll/updateBonusFine/${id}`, data),
  deleteBonusFine: (id) => httpService.delete(`/payroll/deleteBonusFine/${id}`),
};
