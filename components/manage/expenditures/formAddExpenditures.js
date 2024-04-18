import React from "react";
import { Form, Input, message } from "antd";
import ButtonCustom from "@/components/button";
import { expendituresService } from "@/services/expendituresService";
const FormAddExpenditures = ({ isModal, setIsModal, fetch }) => {
  const onFinish = async (values) => {
    try {
      await expendituresService.addExpenditures({
        ...values,
        money: values.money * 1,
      });
      message.success("Add successfully!");
      setIsModal(false);
      fetch();
    } catch (error) {
      message.error("Fail");
    }
  };
  const onFinishFailed = () => {};
  return (
    <div
      className={
        isModal
          ? "absolute-center w-1/2 border-2 shadow-2xl rounded-lg p-6 text-white"
          : "hidden"
      }
      style={{ backgroundColor: "#001529" }}
    >
      <Form
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="grid grid-cols-2 gap-3">
          <Form.Item
            label={<p className="text-white">Description</p>}
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your description!",
              },
            ]}
          >
            <Input placeholder="Describe something ..." />
          </Form.Item>
          <Form.Item
            label={<p className="text-white">Money</p>}
            name="money"
            rules={[
              {
                required: true,
                message: "Please input money!",
              },
            ]}
          >
            <Input placeholder="100" />
          </Form.Item>
        </div>
        <div className=" flex justify-end">
          <ButtonCustom color="blue" content="Add Expenditures" />
        </div>
      </Form>
    </div>
  );
};
export default FormAddExpenditures;
