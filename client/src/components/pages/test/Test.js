import { Select, Input } from "antd";
import { UserOutlined, NumberOutlined } from "@ant-design/icons";
import React from "react";
import RadioBtn from "./RadioBtn";
//import Data from "./Data";

const { Option } = Select;

const Test = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  //Data.map(item, index);

  return (
    <>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-sm-6" style={{ marginBottom: "1rem" }}>
              <label>มหาวิทยาลัย</label>
              <Select
                defaultValue="มหาวิทยาลัย"
                style={{
                  fontSize: "18px",
                  width: "100%",
                }}
                onChange={handleChange}
              >
                <Option value="jack" style={{ fontSize: "18px" }}>
                  มหาวิทยาลัยมหิดล
                </Option>
                <Option value="lucy" style={{ fontSize: "18px" }}>
                  มหาวิทยาลัย...
                </Option>
              </Select>
            </div>
            <div className="col-sm-6">
              <label>ปีการศึกษา</label>
              <Select
                defaultValue="ปีการศึกษา"
                style={{
                  fontSize: "18px",
                  width: "100%",
                }}
              >
                <Option value="lucy" style={{ fontSize: "18px" }}>
                  2565
                </Option>
                <Option value="lucy" style={{ fontSize: "18px" }}>
                  2564
                </Option>
                <Option value="lucy" style={{ fontSize: "18px" }}>
                  2563
                </Option>
              </Select>
            </div>
          </div>
          <br />
          <label> ชื่อ - นามสกุล</label>
          <Input
            size="large"
            placeholder="ชื่อ นามสกุล"
            prefix={<UserOutlined />}
          />
          <br />
          <br />
          <label>รหัสนักศึกษา</label>
          <Input
            size="large"
            placeholder="รหัสนักศึกษา"
            prefix={<NumberOutlined />}
          />
          <br />
          <br />
          <hr />
          <div className="test__qu">
            <center>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              </h6>
              <RadioBtn />
            </center>
          </div>
        </div>

        <div className="col-lg-2"></div>
      </div>
    </>
  );
};

export default Test;
