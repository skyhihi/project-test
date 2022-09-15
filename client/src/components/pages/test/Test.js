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

  //==============เก็บข้อมูล===================

  const [ansValues, setAnsValues] = useState({});

  const handleChangeName = (e) => {
    setAnsValues({ ...ansValues, [e.target.name]: e.target.value });
    console.log(ansValues);
  };
  const handleChangeUniversity = (value) => {
    setAnsValues({ ...ansValues, university_id: value });
    console.log(ansValues);
  };
  const handleChangeYear = (value) => {
    setAnsValues({ ...ansValues, year_id: value });
    console.log(ansValues);
  };
  const handleChangeStudentID = (e) => {
    setAnsValues({ ...ansValues, [e.target.name]: e.target.value });
    console.log(ansValues);
  };

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
                onChange={handleChangeUniversity}
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
                name="year"
                onChange={handleChangeYear}
              >
                {year.map((item, index) => (
                  <Option
                    value={item.id}
                    name="year"
                    key={index}
                    style={{ fontSize: "18px" }}
                  >
                    {item.year}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <br />
          <label> ชื่อ - นามสกุล</label>
          <Input
            type="text"
            size="large"
            placeholder="ชื่อ นามสกุล"
            name="name"
            prefix={<UserOutlined />}
            onChange={handleChangeName}
          />
          <br />
          <br />
          <label>รหัสนักศึกษา</label>
          <Input
            type="text"
            size="large"
            name="student_id"
            placeholder="รหัสนักศึกษา"
            prefix={<NumberOutlined />}
            onChange={handleChangeStudentID}
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
