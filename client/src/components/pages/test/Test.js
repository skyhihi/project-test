import { Select, Input } from "antd";
import { UserOutlined, NumberOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RadioBtn from "./RadioBtn";
import { listQuestions } from "../../functions/question";
import { listUniversity } from "../../functions/university";
import { listYears } from "../../functions/year";

const { Option } = Select;

const Test = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [questions, setQuestions] = useState([]);
  const [university, setUniversity] = useState([]);
  const [year, setYears] = useState([]);
  const loadData = () => {
    listQuestions()
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    listUniversity()
      .then((res) => {
        setUniversity(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    listYears()
      .then((res) => {
        setYears(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

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
                {university.map((item, index) => (
                  <Option
                    value={item.id}
                    key={index}
                    style={{ fontSize: "18px" }}
                  >
                    {item.university}
                  </Option>
                ))}
                {/** 
                <Option value="jack" style={{ fontSize: "18px" }}>
                  มหาวิทยาลัยมหิดล
                </Option>
                <Option value="lucy" style={{ fontSize: "18px" }}>
                  มหาวิทยาลัย...
                </Option>
                */}
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
                {year.map((item, index) => (
                  <Option
                    value={item.id}
                    key={index}
                    style={{ fontSize: "18px" }}
                  >
                    {item.year}
                  </Option>
                ))}
                {/** 
                <Option value="lucy" style={{ fontSize: "18px" }}>
                  2565
                </Option>
                <Option value="lucy" style={{ fontSize: "18px" }}>
                  2564
                </Option>
                <Option value="lucy" style={{ fontSize: "18px" }}>
                  2563
                </Option>
                */}
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

          {questions.map((item, index) => (
            <>
              <div className="test__qu">
                <br />
                <center>
                  <label>{index + 1}. </label>
                  <h5>{item.detail}</h5>
                  <RadioBtn />
                </center>
              </div>
            </>
          ))}

          <Link to="/result">
            <button
              type="button"
              className="btn btn-secondary"
              style={{
                float: "right",
                marginTop: "1rem",
                marginBottom: "5rem",
              }}
            >
              คำนวณผลลัพธ์ <i className="bi bi-arrow-right"></i>
            </button>
          </Link>
        </div>

        <div className="col-lg-2"></div>
      </div>
    </>
  );
};

export default Test;
