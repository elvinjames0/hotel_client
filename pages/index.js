import FilterRoom from "@/components/homepage/fillterRoom.js/fillterRoom";
import ChangeStatus from "@/components/homepage/popup/changeStatus";
import ConfirmPayBill from "@/components/homepage/popup/confirmPayBill";
import RoomInformation from "@/components/homepage/roomInfomation/roomInfomation";
import StatusRoom from "@/components/homepage/statusRoom";
import TypeRoom from "@/components/homepage/typeRoom";
import Modal from "@/components/modal";
import { useState } from "react";
const HomePage = () => {
  const [isModal, setIsModal] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isStatus, setIsStatus] = useState(false);

  return (
    <>
      <Modal setIsModal={setIsModal} isModal={isModal} />
      <Modal setIsModal={setIsStatus} isModal={isStatus} />
      <ChangeStatus isStatus={isStatus} setIsStatus={setIsStatus} />
      <RoomInformation
        isModal={isModal}
        setIsModal={setIsModal}
        setIsConfirm={setIsConfirm}
      />
      <ConfirmPayBill
        isConfirm={isConfirm}
        setIsConfirm={setIsConfirm}
        setIsModal={setIsModal}
      />
      <div className="w-full h-full">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-bold font-serif mb-3">Room Status</h1>
            <div className=" grid grid-cols-4 ">
              <StatusRoom color="#FEFBF6" content="Empty" />
              <StatusRoom color="#1677fe" content="Using" />
              <StatusRoom color="#FCDC2A" content="Cleaning" />
              <StatusRoom color="#D80032" content="Not use" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold font-serif mb-3">Filter room</h1>
            <FilterRoom />
          </div>
          <div>
            <div className=" flex flex-col gap-3">
              <TypeRoom
                type="1.Standard"
                price="300.000đ"
                quantity={15}
                setIsModal={setIsModal}
                setIsStatus={setIsStatus}
              />
              <TypeRoom
                type="2.Superior"
                price="350.000đ"
                quantity={20}
                setIsModal={setIsModal}
                setIsStatus={setIsStatus}
              />
              <TypeRoom
                type="3.Deluxe"
                price="450.000đ"
                quantity={18}
                setIsModal={setIsModal}
                setIsStatus={setIsStatus}
              />
              <TypeRoom
                type="4.Suite"
                price="600.000đ"
                quantity={10}
                setIsModal={setIsModal}
                setIsStatus={setIsStatus}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
