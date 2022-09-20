import { Select, Input, Radio, Form, Button } from "antd";
import { UserOutlined, NumberOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
//import RadioBtn from "./RadioBtn";
import "./radioBtn.css";
import { listQuestions } from "../../functions/question";
import { listUniversity } from "../../functions/university";
import { listYears } from "../../functions/year";
import { submitAns } from "../../functions/ans_all";
import { toast } from "react-toastify";

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

  //=============นับคำถาม===================

  /*
  const [count, setCount] = useState(0);
  console.log(questions);
  */

  //==============เก็บข้อมูล===================

  const [ansValues, setAnsValues] = useState({});

  const handleChangeName = (e) => {
    setAnsValues({ ...ansValues, [e.target.name]: e.target.value });
    //console.log(ansValues);
  };
  const handleChangeUniversity = (value) => {
    setAnsValues({ ...ansValues, university: value });
    //console.log(ansValues);
  };
  const handleChangeYear = (value) => {
    setAnsValues({ ...ansValues, year: value });
    //console.log(ansValues);
  };
  const handleChangeStudentID = (e) => {
    setAnsValues({ ...ansValues, [e.target.name]: e.target.value });
    //console.log(ansValues);
  };

  //=======เก็บคำตอบ==========
  //const [ansResult, setAnsResult] = useState({});
  const [sumType1, setSumType1] = useState(0);
  const [sumType2, setSumType2] = useState(0);
  const [sumType3, setSumType3] = useState(0);
  const [sumType4, setSumType4] = useState(0);
  const [sumType5, setSumType5] = useState(0);
  const [sumType6, setSumType6] = useState(0);
  const onChange = (e, value) => {
    //console.log(e.target.name, "checked" + e.target.value);
    setAnsValues({ ...ansValues, [e.target.name]: e.target.value });
    //console.log(ansValues);
    //console.log(value);
    // console.log(e.target.name + ":" + e.target.value + " type:" + value);
    if ((value = 1)) {
      setSumType1(sumType1 + e.target.value);
    } else if ((value = 2)) {
      setSumType2(sumType2 + e.target.value);
    } else if ((value = 3)) {
      setSumType3(sumType3 + e.target.value);
    } else if ((value = 4)) {
      setSumType4(sumType4 + e.target.value);
    } else if ((value = 5)) {
      setSumType5(sumType5 + e.target.value);
    } else if ((value = 6)) {
      setSumType6(sumType6 + e.target.value);
    }
  };
  console.log("sum T1 = " + sumType1);
  console.log("sum T2 = " + sumType2);
  console.log("sum T3 = " + sumType3);
  console.log("sum T4 = " + sumType4);
  console.log("sum T5 = " + sumType5);
  console.log("sum T6 = " + sumType6);

  //=======กดบันทึก=========

  const handleSubmitAns = () => {
    //console.log(editDetail);
    toast.success("ok ค่า ลงแล้ว");
    /*
    submitAns(ansValues)
      .then((res) => {
        //console.log(res.data.status);
        toast.success(res.data.status);
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
      */
  };
  const onFinishFailed = (errorInfo) => {
    toast.error("กรุณากรอกข้อมูลหรือคำถามให้ครบ");
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <Form
            onFinish={handleSubmitAns}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
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
                        value={item.university}
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
                        value={item.year}
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
                type="number"
                //size="large"
                min={0}
                name="student_id"
                placeholder="รหัสนักศึกษา (ตัวเลข)"
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

                    {/**
                     *
                     * {console.log(item.type_id)}
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
                        onChange={(e) => onChange(e, item.type_id)}
                      >
                        <Radio.Button value={1}>น้อยที่สุด</Radio.Button>
                        <Radio.Button value={2}>น้อย</Radio.Button>
                        <Radio.Button value={3}>ปานกลาง</Radio.Button>
                        <Radio.Button value={4}>มาก</Radio.Button>
                        <Radio.Button value={5}>มากที่สุด</Radio.Button>
                      </Radio.Group>
                    </Form.Item>

                    {/**=================== mobile =================================== */}

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
                        onChange={() => onChange(item.type_id)}
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
              คำนวนคำตอบ
            </Button>
          </Form>
        </div>

        <div className="col-lg-2"></div>
      </div>
    </>
  );
};

export default Test;
