import { httpService } from "./configUrl";

export const shiftService = {
  updateShift: (data) => httpService.put("/shift/updateShift", data),
  getAllShift: () => httpService.get("/shift/getAllShift"),
};
