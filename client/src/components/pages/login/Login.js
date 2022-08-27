import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

//import type { SizeType } from "antd/es/config-provider/SizeContext";
import {
  UserOutlined,
  InfoCircleOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockFilled,
  LoginOutlined,
} from "@ant-design/icons";
import { Input, Tooltip, Button } from "antd";

const Login = () => (
  <>
    <div className="login__bg"></div>
    <div className="login__content">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <h1 className="login__text">
            <span className="badge bg-secondary">LOGIN</span>
          </h1>

          <br />
          <Input
            size="large"
            placeholder=" Username"
            prefix={<UserOutlined />}
            suffix={
              <Tooltip title="Enter Username">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />

          <br />
          <br />

          <Input.Password
            size="large"
            placeholder=" Password"
            prefix={<LockFilled />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <br />
          <br />
          <Link to="/admin">
          <Button
            type="secondary"
            shape="round"
            //size="large"
            style={{ float: "right" }}
            icon={<LoginOutlined />}
          >
            Login
            <br />
          </Button>
          </Link>
        </div>
      </div>
      <div className="col-lg-4"></div>
    </div>
  </>
);

export default Login;
