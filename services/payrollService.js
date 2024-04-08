import { httpService } from "./configUrl";

export const payrollService = {
  getAllPayroll: () => httpService.get("/payroll/getAllPayroll"),
  addPayroll: (data) => httpService.post("/payroll/addPayroll", data),
  paySalary: (data) => httpService.put("/payroll/paySalary", data),
  getAllBonusFine: () => httpService.get("/payroll/getAllBonusFine"), // done
  addBonusFine: (data) => httpService.post("/payroll/addBonusFine", data), // done
  updateBonusFine: (id, data) =>
    httpService.put(`/payroll/updateBonusFine/${id}`, data), // done
  deleteBonusFine: (id) => httpService.delete(`/payroll/deleteBonusFine/${id}`), // done
};
