import { localStorageService } from "@/controller/localStorage";
import React from "react";
import { useRouter } from "next/router";
import ButtonCustom from "./button";

const LogOut = ({ isModal, setIsModal }) => {
  const router = useRouter();
  const handleLogOut = () => {
    localStorageService.removeUserInfo();
    setIsModal(false);
    router.push("/signin");
  };
  return (
    <div className={isModal ? "absolute-center" : "hidden"}>
      <div className=" p-4 w-full max-w-md max-h-full z-20">
        <div className=" bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-4 md:p-5 text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to logout?
            </h3>
            <div className="flex gap-5 justify-center items-center">
              <ButtonCustom
                content="Yes, I'm sure"
                color="red"
                onClick={handleLogOut}
              />
              <ButtonCustom
                content="No, cancel"
                color="blue"
                onClick={() => {
                  setIsModal(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
