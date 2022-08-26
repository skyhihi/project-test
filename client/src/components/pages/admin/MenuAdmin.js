import {
  // AppstoreOutlined,
  //MailOutlined,
  //SettingOutlined,
  QuestionCircleOutlined,
  NumberOutlined,
  DatabaseOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function getItem(label, key, icon, children, type, link) {
  return {
    key,
    icon,
    children,
    label,
    type,
    link,
  };
}
const items = [
  getItem(
    "หน้าหลัก",
    "ha",
    <Link to="/admin">
      <NumberOutlined />
    </Link>
  ),
  getItem(
    "ข้อมูลคำถาม",
    "q",
    <Link to="/admin/question">
      <QuestionCircleOutlined />
    </Link>
  ),
  getItem(
    "รายละเอียด",
    "dt",
    <Link to="/admin/detail-types">
      <DatabaseOutlined />
    </Link>
  ),
  getItem(
    "ข้อมูลทั้งหมด",
    "ga",
    <Link to="/admin/genral">
      <ProfileOutlined />
    </Link>
  ),

  getItem(
    "ข้อมูลนักศึกษา",
    "qi",
    <Link to="/admin/student-i">
      <UserOutlined />
    </Link>
  ) /** 
  {
    
  getItem("Question", "sub1", <MailOutlined />, [
    getItem("ADD", "1"),
    getItem("EDIT", "2"),
    getItem("DELETE", "3"),
  ]),
  getItem("Detail", "sub2", <AppstoreOutlined />, [
    getItem("ADD", "1"),
    getItem("EDIT", "2"),
    getItem("DELETE", "3"),
  ]),
  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  },*/,
];

const MenuAdmin = () => {
  return (
    <>
      <Menu
        mode="inline"
        //theme="dark"
        style={{
          width: 200,
          marginLeft: "-2rem",
          marginTop: "-2rem",
          //backgroundColor: "brown",
          height: "100vh",
          position: "fixed",
          //paddingTop: "1rem",
        }}
        items={items}
      >
        {/** 
        <Menu.Item>
          <Link to="/admin/question">question</Link>
        </Menu.Item>
        */}
      </Menu>
    </>
  );
};

export default MenuAdmin;
