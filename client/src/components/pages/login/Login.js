import React, { useState } from "react";
import "./login.css";

//fuctions
import { login } from "../../functions/auth";

//redux
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//toastify
import { toast } from "react-toastify";

import {
  UserOutlined,
  InfoCircleOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockFilled,
  LoginOutlined,
} from "@ant-design/icons";
import { Input, Tooltip, Button } from "antd";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const roleBaseRedirect = (role) => {
    console.log(role);
    if (role === "a") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  const handleChange = (e) => {
    //e = event
    console.log(e.target.name);
    console.log(e.target.value);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  //ตอนกดsubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);

    login(value)
      .then((res) => {
        //console.log(res.data);
        toast.success(res.data.payload.user.username + " Login Success");

        dispatch({
          type: "LOGIN",
          payload: {
            token: res.data.token,
            username: res.data.payload.user.username,
            role: res.data.payload.user.role,
          },
        });

        //เก็บเข้าคลังของเว็บ
        localStorage.setItem("token", res.data.token);
        roleBaseRedirect(res.data.payload.user.role);
      })
      .catch((err) => {
        console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  };

  return (
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
              type="text"
              size="large"
              placeholder=" Username"
              prefix={<UserOutlined />}
              suffix={
                <Tooltip title="Enter Username">
                  <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                </Tooltip>
              }
              name="username"
              onChange={handleChange}
            />

            <br />
            <br />

            <Input.Password
              type="password"
              size="large"
              placeholder="Password"
              prefix={<LockFilled />}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              name="password"
              onChange={handleChange}
            />
            <br />
            <br />
            <Button
              shape="round"
              //size="large"
              style={{ float: "right" }}
              icon={<LoginOutlined />}
              onClick={handleSubmit}
            >
              Login
              <br />
            </Button>

            {/* 

            <input className="btn btn-primary" type="submit"></input>

            <Button
              type="secondary"
              shape="round"
              //size="large"
              style={{ float: "right" }}
              icon={<LoginOutlined />}
              onSubmit={handleSubmit}
            >
              Login
              <br />
            </Button>
            */}
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>

      {/* 
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>username </label>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>password </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <br />
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      
*/}
    </>
  );
};

export default Login;
