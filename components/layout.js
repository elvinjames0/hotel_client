import React, { useState } from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  ShopOutlined,
  UserOutlined,
  CalendarOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { Layout, Menu } from "antd";
import { localStorageService } from "@/controller/localStorage";
import SignIn from "@/pages/signin";
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const pages = [
  getItem(
    "Home",
    "1",
    <Link href="/">
      <DesktopOutlined />
    </Link>
  ),
  getItem(
    "Statistical",
    "2",
    <Link href="/statistical">
      <PieChartOutlined />
    </Link>
  ),
  getItem("Manage", "sub1", <UserOutlined />, [
    getItem("", "3", <Link href="/manage/employee">Employee</Link>),
    getItem("", "9", <Link href="/manage/expenditures">Expenditures</Link>),
    getItem("", "4", <Link href="/manage/signup">Sign Up</Link>),
    getItem("", "5", <Link href="/manage/bonusFined">Bonus & Fined</Link>),
    getItem("", "13", <Link href="/manage/payroll">Payroll</Link>),
  ]),
  getItem("Storage", "sub2", <ShopOutlined />, [
    getItem("", "10", <Link href="/storage">Storage</Link>),
    getItem("", "11", <Link href="/storage/addToStorage">Import</Link>),
    getItem("", "12", <Link href="/storage/historyStorage">History</Link>),
  ]),
  getItem(
    "Calendar",
    "7",
    <Link href="/calendar">
      <CalendarOutlined />
    </Link>
  ),
  getItem(
    "Setting",
    "8",
    <Link href="/setting">
      <SettingOutlined />
    </Link>
  ),
];
const LayoutTheme = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const isLogin = localStorageService.getUserInfo() !== null;
  return isLogin ? (
    <div className="relative">
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={pages}
          />
        </Sider>
        <div className="w-full h-full relative z-0">
          <div
            className=" w-full h-14 text-white px-10 flex items-center justify-center"
            style={{ backgroundColor: "#001529" }}
          >
            <h1 className="text-2xl font-bold font-serif">Huy Thành Hotel</h1>
          </div>
          <div className="w-full px-10 py-5">{props.children}</div>
        </div>
      </Layout>
    </div>
  ) : (
    <SignIn />
  );
};
export default LayoutTheme;
