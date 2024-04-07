import React, { useState, useEffect } from "react";
import LogOut from "@/components/logOut";
import Modal from "@/components/modal";
import BookingForm from "@/components/homepage/popup/booking";
import ButtonCustom from "@/components/button";
import { roomService } from "@/services/roomService";
import SuccessNotification from "@/components/notification/success";

const SettingPage = () => {
  useEffect(() => {
    roomService
      .getAllRoom()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const [isModal, setIsModal] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  return (
    <>
      <Modal setIsModal={setIsModal} isModal={isModal} />
      <Modal setIsModal={setIsBooking} isModal={isBooking} />
      <ButtonCustom
        content="Log out"
        color="blue"
        onClick={() => setIsModal(true)}
      />
      <ButtonCustom
        content="Booking "
        color="blue"
        onClick={() => setIsBooking(true)}
      />
      <LogOut isModal={isModal} setIsModal={setIsModal} />
      <SuccessNotification />
      <BookingForm isModal={isBooking} setIsModal={setIsBooking} />
    </>
  );
};

export default SettingPage;
