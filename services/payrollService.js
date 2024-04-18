import { httpService } from "./configUrl";

export const payrollService = {
  addPayroll: (data) => httpService.post("/payroll/addPayroll", data),
  paySalary: (data, id) => httpService.put(`/payroll/paySalary/${id}`, data),
  getAllPayroll: () => httpService.get("/payroll/getAllPayroll"),
  getAllBonusFine: () => httpService.get("/payroll/getAllBonusFine"),
  addBonusFine: (data) => httpService.post("/payroll/addBonusFine", data),
  updateBonusFine: (id, data) =>
    httpService.put(`/payroll/updateBonusFine/${id}`, data),
  deleteBonusFine: (id) => httpService.delete(`/payroll/deleteBonusFine/${id}`),
};
