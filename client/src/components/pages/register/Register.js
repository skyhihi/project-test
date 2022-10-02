import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { toast } from "react-toastify";
//import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { register } from "../../functions/auth";
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
import "./register.css";

const Register = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    name: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const onClick = (e) => {
    e.preventDefault(); //
    console.log(value);
    if (value.password !== value.confirm_password) {
      toast.error("Password not match");
    } else {
      register(value)
        .then((res) => {
          console.log(res.data);
          toast.success(res.data.message);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err.response.data.error);
          toast.error(err.response.data.error);
        });
    }
  };

  const onChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
      [e.target.username]: e.target.value,
    });
  };
  return (
    <>
      <div className="register__bg"></div>
      <div className="register__content">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <h1 className="register__text">
              <span className="badge bg-secondary">REGISTER</span>
            </h1>
            <br />
            <Input
              type="text"
              name="name"
              size="large"
              placeholder=" Please Enter Your Name"
              onChange={onChange}
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
              type="text"
              name="username"
              size="large"
              placeholder=" Please Enter Your Username"
              onChange={onChange}
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
                name="password"
                size="large"
                placeholder=" Please Input Your Password"
                onChange={onChange}
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
                name="confirm_password"
                size="large"
                placeholder=" Please Confirm Your Password"
                onChange={onChange}
                prefix={<LockFilled />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              {/******************************************************** */}
              <br />

              <Button
                type="submit"
                shape="round"
                onClick={onClick}
                //size="large"
                style={{ float: "right" }}
                icon={<LoginOutlined />}
              >
                Register
              </Button>
            </Space>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </>
  );
};

export default Register;
