import { httpService } from "./configUrl";

export const roomService = {
  getAllRoom: () => httpService.get("/room/getAllRoom"), // done
  getAllRoomType: () => httpService.get("/room/getAllRoomType"), // done
  getAllRoomTable: () => httpService.get("/room/getAllRoomTable"), // done
  getDetailRoom: (id) => httpService.get(`/room/getDetailRoom/${id}`), // done
  addRoom: (data) => httpService.post("/room/addRoom", data), // done
  addRoomType: (data) => httpService.post("/room/addRoomType", data), // done
  updateRoom: (data) => httpService.put("/room/updateRoom", data), // done
  deleteRoom: (id) => httpService.delete(`/room/deleteRoom/${id}`), // done
  deleteRoomType: (id) => httpService.delete(`/room/deleteRoomType/${id}`),
};
