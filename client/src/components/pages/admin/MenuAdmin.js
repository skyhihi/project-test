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
    "Question",
    "q",
    <Link to="/admin/question">
      <QuestionCircleOutlined />
    </Link>
  ),
  getItem(
    "Detail",
    "dt",
    <Link to="/admin/detail-types">
      <AppstoreOutlined />
    </Link>
  ),

  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
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
          marginTop: "-1rem",
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
