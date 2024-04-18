import { convertToVnd } from "@/controller/convertToVnd";
import Room from "./room";

const TypeRoom = ({ type, price, roomList, setIsModal, setIsStatus }) => {
  return (
    <div>
      <h1 className="text-xl font-bold font-sans">
        {type} ( {convertToVnd(price)} )
      </h1>
      <div className=" grid grid-cols-10 gap-5 mt-3">
        {roomList.map((e) => {
          return (
            <Room
              key={e.room_id}
              setIsModal={setIsModal}
              setIsStatus={setIsStatus}
              number={e.room_number}
              status={e.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TypeRoom;
