import { Select, Input, Radio, Form, Button } from "antd";
import { UserOutlined, NumberOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
//import RadioBtn from "./RadioBtn";
import "./radioBtn.css";
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

  //=======เก็บคำตอบ==========
  const onChange = (e) => {
    //console.log(e.target.name, "checked" + e.target.value);
    setAnsValues({ ...ansValues, [e.target.name]: e.target.value });
    console.log(ansValues);
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const [value, setValue] = useState({});

  return (
    <>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <Form>
            <div className="row">
              <div
                className="col-sm-6 input-text"
                style={{ marginBottom: "1rem" }}
              >
                <label>มหาวิทยาลัย</label>
                <Form.Item
                  name="university"
                  rules={[
                    {
                      required: true,
                      message: "กรุณาเลือกมหาลัย",
                    },
                  ]}
                >
                  <Select
                    defaultValue="มหาวิทยาลัย"
                    style={{
                      //   fontSize: "18px",
                      width: "100%",
                    }}
                    onChange={handleChangeUniversity}
                  >
                    {university.map((item, index) => (
                      <Option
                        value={item.id}
                        key={index}
                        //  style={{ fontSize: "18px" }}
                      >
                        {item.university}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
              <div className="col-sm-6">
                <label>ปีการศึกษา</label>
                <Form.Item
                  name="year"
                  rules={[
                    {
                      required: true,
                      message: "กรุณาเลือกปีการศึกษา",
                    },
                  ]}
                >
                  <Select
                    defaultValue="ปีการศึกษา"
                    style={{
                      //   fontSize: "18px",
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
                </Form.Item>
              </div>
            </div>

            <label> ชื่อ - นามสกุล</label>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอกชื่อ - นามสกุล",
                },
              ]}
            >
              <Input
                type="text"
                //size="large"
                placeholder="ชื่อ นามสกุล"
                name="name"
                prefix={<UserOutlined />}
                onChange={handleChangeName}
              />
            </Form.Item>

            <label>รหัสนักศึกษา</label>
            <Form.Item
              name="student_id"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอกรหัสนักศึกษา",
                },
              ]}
            >
              <Input
                type="text"
                //size="large"
                name="student_id"
                placeholder="รหัสนักศึกษา"
                prefix={<NumberOutlined />}
                onChange={handleChangeStudentID}
              />
            </Form.Item>
            <br />

            <hr />

            {questions.map((item, index) => (
              <>
                <div className="test__qu">
                  <br />
                  <center>
                    <label>{index + 1}. </label>
                    <h5>{item.detail}</h5>
                    {/*<h1>{item.type_id}</h1>*/}

                    {/**
                     * <RadioBtn onClick={onChange} name={item.id} value={value} />
                     *
                     */}

                    <Form.Item
                      name={index}
                      rules={[
                        {
                          required: true,
                          message: "กรุณาเลือก",
                        },
                      ]}
                      className="normal"
                    >
                      <Radio.Group
                        buttonStyle="solid"
                        size="large"
                        //   className="normal"
                        name={"qaId_" + item.id}
                        style={{
                          marginTop: 16,
                        }}
                        onChange={onChange}
                      >
                        <Radio.Button value={1}>น้อยที่สุด</Radio.Button>
                        <Radio.Button value={2}>น้อย</Radio.Button>
                        <Radio.Button value={3}>ปานกลาง</Radio.Button>
                        <Radio.Button value={4}>มาก</Radio.Button>
                        <Radio.Button value={5}>มากที่สุด</Radio.Button>
                        {item.type_id === 1 ? (
                          <h1>{"value " + item.id}</h1>
                        ) : (
                          <></>
                        )}
                      </Radio.Group>
                    </Form.Item>

                    <Form.Item
                      name={index}
                      rules={[
                        {
                          required: true,
                          message: "กรุณาเลือก",
                        },
                      ]}
                      className="mobile-btn"
                    >
                      <Radio.Group
                        key={index}
                        buttonStyle="solid"
                        size="small"
                        style={{
                          marginTop: 16,
                        }}
                        //   className="mobile-btn"
                        name={"qaId_" + item.id}
                        onChange={onChange}
                      >
                        <Radio.Button value={1}>น้อยที่สุด</Radio.Button>
                        <Radio.Button value={2}>น้อย</Radio.Button>
                        <Radio.Button value={3}>ปานกลาง</Radio.Button>
                        <Radio.Button value={4}>มาก</Radio.Button>
                        <Radio.Button value={5}>มากที่สุด</Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                  </center>
                  <br />

                  <hr />
                </div>
              </>
            ))}
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              style={{
                float: "right",
                marginTop: "1rem",
                marginBottom: "5rem",
                background: "#6c757d",
                border: "none",
              }}
            >
              คำนวณผลลัพธ์
            </Button>
          </Form>
        </div>

        <div className="col-lg-2"></div>
      </div>
    </>
  );
};

export default Test;
