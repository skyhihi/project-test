import React from "react";
import Image2 from "../../assets/blob-haikei.svg"
import "./login.css"
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
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <div style={{ margin: "0 20px" }}>
        <img src={Image2} alt="" className="login__bg" />
          <br />
          <div className="login__content">
          <h1>LOGIN</h1>
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
              <Button
              type="primary"
              style={{ float: "right" }}
              icon={<LoginOutlined />}
            >
              Login
              <br />
            </Button>
            </div>
        </div>
      </div>
      <div className="col-lg-4"></div>
    </div>
  </>
);

export default Login;
