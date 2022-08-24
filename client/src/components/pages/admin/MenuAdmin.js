import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  NumberOutlined,
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
    "General Information",
    "ha",
    <Link to="/admin">
      <NumberOutlined />
    </Link>
  ),
  getItem(
    "Student Information",
    "q",
    <Link to="/admin/question">
      <QuestionCircleOutlined />
    </Link>
  ),

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
]; // submenu keys of first level

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
          //paddingTop: "2rem",
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
