import { httpService } from "./configUrl";

export const employeeService = {
  getEmployeeList: () => httpService.get("/employee/getEmployeeList"), // done
  getDetailEmployee: (id) =>
    httpService.get(`/employee/getDetailEmployee/${id}`), //done
  loginEmployee: (data) => httpService.post("/employee/loginEmployee", data), // done
  addEmployee: (data) => httpService.post("/employee/addEmployee", data), // next
  deleteEmployee: (id) => httpService.delete(`/employee/deleteEmployee/${id}`), // next
  updateEmployee: (id, data) =>
    httpService.put(`/employee/updateEmployee/${id}`, data), // next
};
