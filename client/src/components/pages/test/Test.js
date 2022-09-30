import { Select, Input, Radio, Form, Button } from "antd";
import { UserOutlined, NumberOutlined } from "@ant-design/icons";
import React, { useState, useEffect, useRef } from "react";
//import { Link } from "react-router-dom";
//import RadioBtn from "./RadioBtn";
import "./radioBtn.css";
import { listQuestions } from "../../functions/question";
import { listUniversity } from "../../functions/university";
import { listYears } from "../../functions/year";
import { listFaculty } from "../../functions/faculty";
import { submitAns } from "../../functions/ans_all";
import { submitAnsRs } from "../../functions/ans_result";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { type } from "../../functions/type";
import emailjs from "@emailjs/browser";
const { Option } = Select;

const Test = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [university, setUniversity] = useState([]);
  const [year, setYears] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const form = useRef();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

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
    listFaculty()
      .then((res) => {
        setFaculty(res.data);
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
  const [ansResult, setAnsResult] = useState({});

  const handleChangeName = (e) => {
    setAnsValues({ ...ansValues, [e.target.name]: e.target.value });
    setAnsResult({ ...ansValues, [e.target.name]: e.target.value });
    //console.log(ansValues);
    setUserName(e.target.value);
  };
  const handleChangeUniversity = (value) => {
    setAnsValues({ ...ansValues, university: value });
    setAnsResult({ ...ansValues, university: value });
    //console.log(ansValues);
  };
  const handleChangeYear = (value) => {
    setAnsValues({ ...ansValues, year: value });
    setAnsResult({ ...ansValues, year: value });
    //console.log(ansValues);
  };
  const handleChangeStudentID = (e) => {
    setAnsValues({ ...ansValues, [e.target.name]: e.target.value });
    setAnsResult({ ...ansValues, [e.target.name]: e.target.value });
    //console.log(ansValues);
  };
  const handleChangeFaculty = (value) => {
    setAnsValues({ ...ansValues, faculty: value });
    setAnsResult({ ...ansValues, university: value });
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChange = (e) => {
    setAnsValues({ ...ansValues, [e.target.name]: e.target.value });
  };

  //=======กดบันทึก=========

  function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }

  const handleSubmitAns = async (values) => {
    let engineer = [];
    let tech = [];
    let business = [];
    let ph = [];
    let teacher = [];
    let doc = [];

    for (let i = 0; i < questions.length; i++) {
      if (questions[i].type_id === 1) {
        engineer.push(values[`${i}`]);
      } else if (questions[i].type_id === 2) {
        tech.push(values[`${i}`]);
      } else if (questions[i].type_id === 3) {
        business.push(values[`${i}`]);
      } else if (questions[i].type_id === 4) {
        ph.push(values[`${i}`]);
      } else if (questions[i].type_id === 5) {
        teacher.push(values[`${i}`]);
      } else {
        doc.push(values[`${i}`]);
      }
    }
    let maxName = "";

    let sumEn = sumArray(engineer);
    let sumTec = sumArray(tech);
    let sumBu = sumArray(business);
    let sumPh = sumArray(ph);
    let sumTea = sumArray(teacher);
    let sumDoc = sumArray(doc);

    let sum = [sumEn, sumTec, sumBu, sumPh, sumTea, sumDoc];

    const max = Math.max(...sum);
    const index = sum.indexOf(max);

    if (index === 0) {
      maxName = "วิศวกร";
    } else if (index === 1) {
      maxName = "นักเทคโนโลยีสารสนเทศ";
    } else if (index === 2) {
      maxName = "นักการตลาดการจัดการ";
    } else if (index === 3) {
      maxName = "นักสาธารณสุข";
    } else if (index === 4) {
      maxName = "อาจารย์แพทย์";
    } else {
      maxName = "แพทย์";
    }

    //console.log(values)
    const request = {
      faculty: values.faculty,
      name: values.name,
      year: values.year,
      student_id: values.student_id,
      university: values.university,
      วิศวกร: sumEn,
      นักเทคโนโลยีสารสนเทศ: sumTec,
      นักการตลาดการจัดการ: sumBu,
      นักสาธารณสุข: sumPh,
      อาจารย์แพทย์: sumTea,
      แพทย์: sumDoc,
      result: maxName,
    };

    console.log(request);
    console.log(ansValues);

    var templateParams = {
      user_name: userName,
      user_email: email,
      engineering: sumEn,
      it: sumTec,
      business: sumBu,
      ph: sumPh,
      teacher: sumTea,
      doctor: sumDoc,
    };
    /*
    emailjs
      .send(
        "service_hnph8ya",
        "template_n53n8mf",
        templateParams,
        "OJYC73mol6Kizu0PC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    
    submitAnsRs(request)
      .then((res) => {
        //console.log(res.data.status);
        //toast.success(res.data.status);
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });

    submitAns(ansValues)
      .then((res) => {
        //console.log(res.data.status);
        //toast.success(res.data.status);
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
*/
    let data = {
      วิศวกร: sumEn,
      นักเทคโนโลยีสารสนเทศ: sumTec,
      นักการตลาดการจัดการ: sumBu,
      นักสาธารณสุข: sumPh,
      อาจารย์แพทย์: sumTea,
      แพทย์: sumDoc,
    };
    navigate("/result", { state: { data: data, sum: sum } });
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
                className="col-sm-4 input-text"
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
              {/** --------------------faculty----------------- */}
              <div
                className="col-sm-4 input-text"
                style={{ marginBottom: "1rem" }}
              >
                <label>คณะ</label>
                <Form.Item
                  name="faculty"
                  rules={[
                    {
                      required: true,
                      message: "กรุณาเลือกคณะ",
                    },
                  ]}
                >
                  <Select
                    defaultValue="คณะ"
                    style={{
                      //   fontSize: "18px",
                      width: "100%",
                    }}
                    onChange={handleChangeFaculty}
                  >
                    {faculty.map((item, index) => (
                      <Option
                        value={item.faculty}
                        key={index}
                        //  style={{ fontSize: "18px" }}
                      >
                        {item.faculty}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>

              <div className="col-sm-4">
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
            <label>email</label>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอกรหัสนักศึกษา",
                },
              ]}
            >
              <Input
                type="email"
                //size="large"

                name="email"
                placeholder="กรอกอีเมล"
                prefix={<NumberOutlined />}
                onChange={handleChangeEmail}
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
                      onChange={onChange}
                    >
                      <Radio.Group
                        buttonStyle="solid"
                        size="large"
                        //   className="normal"
                        name={"qaId_" + item.id}
                        style={{
                          marginTop: 16,
                        }}
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
                      onChange={onChange}
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
