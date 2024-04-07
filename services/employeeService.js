import { httpService } from "./configUrl";

export const employeeService = {
  getEmployeeList: () => httpService.get("/employee/getEmployeeList"),
  getDetailEmployee: (id) =>
    httpService.get(`/employee/getDetailEmployee/${id}`),
  loginEmployee: (data) => httpService.post("/employee/loginEmployee", data),
  addEmployee: (data) => httpService.post("/employee/addEmployee", data),
  deleteEmployee: (id) => httpService.delete(`/employee/deleteEmployee/${id}`),
  updateEmployee: (id, data) =>
    httpService.put(`/employee/updateEmployee/${id}`, data),
};
