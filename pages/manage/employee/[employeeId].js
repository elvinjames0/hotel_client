import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { employeeService } from "@/services/employeeService";
import moment from "moment";
import Modal from "@/components/modal";
const UpdateFormDynamic = dynamic(
  () => import("@/components/manage/employee/formUpdateInfo"),
  {
    ssr: false,
  }
);
const DetailEmployee = ({ data }) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <div className="w-full h-full">
        <Modal setIsModal={setIsModal} isModal={isModal} />
        <UpdateFormDynamic
          setIsModal={setIsModal}
          isModal={isModal}
          data={data}
        />
        <h1 className="text-2xl font-bold font-serif mb-3">
          {data?.fullname}'s INFORMATION
        </h1>
        <div className="w-full h-full flex gap-2">
          <div className="w-1/4">
            <div className="w-full">
              <div className="h-64 w-56 relative">
                <Image
                  src="/img/avatar.jpg"
                  alt="Picture of the author"
                  layout="fill"
                  className="rounded"
                />
              </div>
              <h4 className="underline hover:text-blue-400 hover:underline hover:cursor-pointer mt-2 ">
                Change profile picture
              </h4>
            </div>
          </div>
          <div className="w-2/4 h-full border-2 border-gray-500 p-4 rounded-md">
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-xl font-bold font-serif ">
                Information Employee
              </h1>
              <h5
                onClick={() => setIsModal(true)}
                className="text-sm text-gray-500 font-bold font-serif  hover:cursor-pointer hover:underline hover:text-red-600"
              >
                Edit
              </h5>
            </div>
            <div className="grid grid-cols-2 gap-4 ">
              <div>
                <h3 className="font-bold text-blue-500">Full Name</h3>
                <h4 className="text-gray-500">{data?.fullname}</h4>
              </div>
              <div>
                <h3 className="font-bold text-blue-500">Username</h3>
                <h4 className="text-gray-500">{data?.username}</h4>
              </div>
              <div>
                <h3 className="font-bold text-blue-500">Gender</h3>
                <h4 className="text-gray-500">
                  {data?.gender ? "Male" : "Female"}
                </h4>
              </div>
              <div>
                <h3 className="font-bold text-blue-500">Birthday</h3>
                <h4 className="text-gray-500">{data?.date_of_birth}</h4>
              </div>
              <div>
                <h3 className="font-bold text-blue-500">Address</h3>
                <h4 className="text-gray-500">{data?.address}</h4>
              </div>
              <div>
                <h3 className="font-bold text-blue-500">ID/Passport</h3>
                <h4 className="text-gray-500">{data?.cccd}</h4>
              </div>
              <div>
                <h3 className="font-bold text-blue-500">Phone Number</h3>
                <h4 className="text-gray-500">{data?.phone}</h4>
              </div>
              <div>
                <h3 className="font-bold text-blue-500">Department</h3>
                <h4 className="text-gray-500">Receptionist</h4>
              </div>
              <div>
                <h3 className="font-bold text-blue-500">Gmail</h3>
                <h4 className="text-gray-500">{data?.gmail}</h4>
              </div>
              <div>
                <h3 className="font-bold text-blue-500">Nationality</h3>
                <h4 className="text-gray-500">
                  {data?.nationality == 1
                    ? "Vietnamese"
                    : data?.nationality == 2
                    ? "Chinese"
                    : "Other"}
                </h4>
              </div>
              <div>
                <h3 className="font-bold text-blue-500">Start Date</h3>
                <h4 className="text-gray-500">
                  {moment(`${data?.date_start}`).format("MM/DD/YYYY")}
                </h4>
              </div>
              <div>
                <h3 className="font-bold text-blue-500">End Date</h3>
                <h4 className="text-gray-500">{data?.date_end}</h4>
              </div>
            </div>
          </div>
          <div className="w-1/4 grid gap-5">
            <div className="w-full h-full border-2 border-gray-400 rounded-xl flex">
              <div className=" w-1/4 h-full bg-red-700 rounded-xl   flex justify-center items-center">
                <h1 className="text-2xl text-gray-300">23</h1>
              </div>
              <div className=" w-3/4 flex justify-center items-center">
                <h1 className="text-2xl font-semibold">FINED</h1>
              </div>
            </div>
            <div className="w-full h-full border-2 border-gray-400 rounded-xl flex">
              <div className=" w-1/4 h-full bg-green-700 rounded-xl   flex justify-center items-center">
                <h1 className="text-2xl text-gray-300">23</h1>
              </div>
              <div className=" w-3/4 flex justify-center items-center">
                <h1 className="text-2xl font-semibold">Bonus</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export async function getStaticProps(context) {
  const employeeId = context.params.employeeId;
  const data = await employeeService.getDetailEmployee(employeeId);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data.data.data,
    },
  };
}
export async function getStaticPaths() {
  const list = await employeeService.getEmployeeList();
  const pathWithParams = list.data.data.map((e) => {
    return {
      params: {
        employeeId: toString(e.employee_id),
      },
    };
  });

  return {
    paths: pathWithParams,
    fallback: true,
  };
}
export default DetailEmployee;
