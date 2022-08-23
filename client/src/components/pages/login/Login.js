import React from "react";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockFilled,
  InfoCircleOutlined,LoginOutlined,
} from "@ant-design/icons";
import { Input, Tooltip, Button } from "antd";

const Login = () => {
  return (
    <>
      <div className="container">
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <div>
              <br />
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
              <div class="col-lg-4"></div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
