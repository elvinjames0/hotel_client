import React from "react";
import { Form, Input, Select, message } from "antd";
import ButtonCustom from "@/components/button";
import { payrollService } from "@/services/payrollService";
import { useRouter } from "next/router";

const onFinishFailed = (errorInfo) => {
  message.error(errorInfo);
};
const BonusFineForm = ({ isModal, setIsModal, data, fetch }) => {
  const router = useRouter();
  const onFinish = async (values) => {
    try {
      if (router.pathname == "/manage/employee/[employeeId]") {
        await payrollService.addBonusFine({
          ...values,
          employee_id: data?.employee_id,
          money: values.money * 1,
          bf_type: values.bf_type == "true" ? true : false,
        });
        message.success("Create successfully!");
      } else {
        await payrollService.updateBonusFine(data?.bf_id, {
          ...values,
          money: values.money * 1,
          bf_type: values.bf_type == "true" ? true : false,
        });
        message.success("Update successfully!");
        fetch();
      }
      setIsModal(false);
    } catch (error) {
      message.error("Fail");
    }
  };
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
            label={<p className="text-white">Money</p>}
            name="money"
            rules={[
              {
                required: true,
                message: "Please input your money!",
              },
            ]}
          >
            <Input placeholder="50.000đ" />
          </Form.Item>
          <Form.Item
            label={<p className="text-white">Description</p>}
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your description",
              },
            ]}
          >
            <Input placeholder="description..." />
          </Form.Item>

          <Form.Item
            initialValue="true"
            label={<p className="text-white">Type</p>}
            name="bf_type"
            required
          >
            <Select>
              <Select.Option value="true">Bonus</Select.Option>
              <Select.Option value="false">Fined</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div className=" flex justify-end">
          <ButtonCustom color="blue" content="Add to payroll" />
        </div>
      </Form>
    </div>
  );
};

export default BonusFineForm;
