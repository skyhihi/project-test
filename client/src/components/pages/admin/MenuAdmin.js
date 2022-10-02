import {
  // AppstoreOutlined,
  //MailOutlined,
  //SettingOutlined,
  QuestionCircleOutlined,
  NumberOutlined,
  DatabaseOutlined,
  ProfileOutlined,
  FormOutlined,
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
    <Link to="/admin/">
      <NumberOutlined />
    </Link>
  ),
  getItem(
    "จัดการฟอร์ม",
    "mf",
    <Link to="/admin/manage-form">
      <FormOutlined />
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
    <Link to="/admin/general">
      <ProfileOutlined />
    </Link>
  ),
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
      ></Menu>
    </>
  );
};

export default MenuAdmin;
