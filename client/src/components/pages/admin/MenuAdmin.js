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
    "HomeAdmin",
    "ha",
    <Link to="/admin">
      <NumberOutlined />
    </Link>
  ),
  getItem(
    "General Information",
    "q",
    <Link to="/admin/question">
      <QuestionCircleOutlined />
    </Link>
  ),
  getItem(
    "Student Information",
    "dt",
    <Link to="/admin/detail-types">
      <AppstoreOutlined />
    </Link>
  ),

  getItem("Question", "sub1", <MailOutlined />, [
    getItem("Add", "1"),
    getItem("Edit", "2"),
    getItem("Delete", "3"),
  ]), 
  getItem("Detail", "sub4", <SettingOutlined />, [
    getItem("Add", "1"),
    getItem("Edit", "2"),
    getItem("Delete", "3"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
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
          paddingTop: "1rem", 
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
