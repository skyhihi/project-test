import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { Button, Drawer } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import "./header.css";

const HeaderApp = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  //const [toggle, showMenu] = useState(false);
  return (
    <>
      <Menu
        theme="dark"
        style={{
          backgroundColor: "#fff",
          padding: "0 2rem",
          boxShadow: "0px 3px 8px 0px rgb(69 67 96 / 8%)",
          height: "100%",
          width: "100%",
        }}
        mode="horizontal"
      >
        <h2 style={{ margin: "auto 0", paddingRight: "3rem" }}>
          <b>LOGO</b>
        </h2>

        <Menu.Item className="menu-items">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item className="menu-items">
          <Link to="/types">Types</Link>
        </Menu.Item>
        <Menu.Item className="menu-items">
          <Link to="/test">Test</Link>
        </Menu.Item>
        <Menu.Item className="menu-items">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item className="menu-items">
          <Link to="/result">Result</Link>
        </Menu.Item>
        <Menu.Item className="menu-items">
          <Link to="/register">Register</Link>
        </Menu.Item>
        <Menu.Item className="menu-items">
          <Link to="/admin">Admin</Link>
        </Menu.Item>

        <Button
          type="primary"
          onClick={showDrawer}
          style={{
            order: "20",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "auto",
          }}
          icon={<MenuFoldOutlined />}
          className="mobile-menu"
        ></Button>
      </Menu>
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Menu mode="inline">
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/types">Types</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/test">Test</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/result">Result</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/register">Register</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/admin">Admin</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default HeaderApp;
