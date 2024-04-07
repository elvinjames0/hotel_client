import { httpService } from "./configUrl";

export const roomService = {
  getAllRoom: () => httpService.get("/room/getAllRoom"),
  addRoom: (data) => httpService.post("/room/addRoom", data),
  addRoomType: (data) => httpService.post("/room/addRoomType", data),
  updateRoom: (data) => httpService.put("/room/updateRoom", data),
  deleteRoom: (id) => httpService.delete(`/room/deleteRoom/${id}`),
  deleteRoomType: (id) => httpService.delete(`/room/deleteRoomType/${id}`),
};
