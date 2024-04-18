import React, { useState, useEffect } from "react";
import LogOut from "@/components/logOut";
import Modal from "@/components/modal";
import BookingForm from "@/components/homepage/popup/booking";
import ButtonCustom from "@/components/button";
import { useRouter } from "next/router";

const SettingPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const router = useRouter();
  return (
    <>
      <Modal setIsModal={setIsModal} isModal={isModal} />
      <Modal setIsModal={setIsBooking} isModal={isBooking} />
      <ButtonCustom
        content="Log out"
        color="#1677fe"
        onClick={() => setIsModal(true)}
      />
      <ButtonCustom
        content="Booking "
        color="#1677fe"
        onClick={() => setIsBooking(true)}
      />
      <div>
        <h1 className=" text-xl font-bold">Edit Room</h1>
        <ButtonCustom
          content="Add Room"
          color="#1677fe"
          onClick={() => router.push("/setting/addRoom")}
        />
        <ButtonCustom
          content="Add Room Type"
          color="#1677fe"
          onClick={() => router.push("/setting/addRoomType")}
        />
        <ButtonCustom
          content="Edit & Delete Room"
          color="#1677fe"
          onClick={() => router.push("/setting/manageRoom")}
        />
      </div>
      <LogOut isModal={isModal} setIsModal={setIsModal} />
      <BookingForm isModal={isBooking} setIsModal={setIsBooking} />
    </>
  );
};
export default SettingPage;
