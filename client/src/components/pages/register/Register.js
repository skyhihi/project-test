import React from "react";
//import type { SizeType } from "antd/es/config-provider/SizeContext";
import {
  UserOutlined,
  InfoCircleOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockFilled,
  UserAddOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Input, Tooltip, Space, Button } from "antd";

const Register = () => (
  <>
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <div style={{ margin: "0 20px" }}>
          <br />
          <h1>REGISTER</h1>
          <br />
          <Input
            size="large"
            placeholder=" Please Enter Your Name"
            prefix={<UserOutlined className="site-form-item-icon" />}
            suffix={
              <Tooltip title="Extra Information">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
          <br />
          <br />
          <Input
            size="large"
            placeholder=" Please Enter Your Username"
            prefix={<UserAddOutlined />}
            suffix={
              <Tooltip title="Extra Information">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
          <br />
          <br />
          <Space direction="vertical" style={{ width: "100%" }}>
            <Input.Password
              size="large"
              placeholder=" Please Input Your Password"
              prefix={<LockFilled />}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Space>
          <br />
          <br />
          <Space direction="vertical" style={{ width: "100%" }}>
            <Input.Password
              size="large"
              placeholder=" Please Confirm Your Password"
              prefix={<LockFilled />}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
            {/******************************************************** */}
            <br />
            <Button
              type="primary"
              style={{ float: "right" }}
              icon={<LoginOutlined />}
            >
              Register
            </Button>
          </Space>
        </div>
      </div>
      <div className="col-lg-4"></div>
    </div>
  </>
);

export default Register;
