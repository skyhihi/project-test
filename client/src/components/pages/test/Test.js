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
import { submitAnsRs } from "../../functions/ans_result";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const Test = () => {
  const navigate = useNavigate();

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
  const [ansResult, setAnsResult] = useState({});

  const handleChangeName = (e) => {
    setAnsValues({ ...ansValues, [e.target.name]: e.target.value });
    setAnsResult({ ...ansValues, [e.target.name]: e.target.value });
    //console.log(ansValues);
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

  //=======เก็บคำตอบ==========
  //const [ansResult, setAnsResult] = useState({});

  const [type1, setType1] = useState([]);
  const [type2, setType2] = useState([]);
  const [type3, setType3] = useState([]);
  const [type4, setType4] = useState([]);
  const [type5, setType5] = useState([]);
  const [type6, setType6] = useState([]);

  let sum1, sum2, sum3, sum4, sum5, sum6;
  sum1 = type1.reduce((n, { value }) => n + value, 0) / type1.length;
  console.log("วิดวะ", sum1);
  sum2 = type2.reduce((n, { value }) => n + value, 0) / type2.length;
  console.log("เทคโน", sum2);
  sum3 = type3.reduce((n, { value }) => n + value, 0) / type3.length;
  console.log("ตลาด", sum3);
  sum4 = type4.reduce((n, { value }) => n + value, 0) / type4.length;
  console.log("สาธารณะ", sum4);
  sum5 = type5.reduce((n, { value }) => n + value, 0) / type5.length;
  console.log("ครู", sum5);
  sum6 = type6.reduce((n, { value }) => n + value, 0) / type6.length;
  console.log("หมอ", sum6);

  const onChange = (e, type_id, id) => {
    const idf = id;

    setAnsValues({ ...ansValues, [e.target.name]: e.target.value });
    setAnsResult({
      ...ansResult,
      sum1,
      sum2,
      sum3,
      sum4,
      sum5,
      sum6,
    });
    //========แต่ละหมวด==========

    if (type_id === 1) {
      const find = type1.find(({ id }) => id === idf);
      if (find === undefined) {
        setType1([...type1, { id: id, value: e.target.value }]);
        //setAnsResult([...ansResult,{}])
      } else {
        for (const obj of type1) {
          if (obj.id === idf) {
            obj.value = e.target.value;

            break;
          }
        }
      }
      /*
      console.log(
        "typq1: ",
        type1.reduce((n, { value }) => n + value, 0)
      );
      */
    } else if (type_id === 2) {
      const find = type2.find(({ id }) => id === idf);
      if (find === undefined) {
        setType2([...type2, { id: id, value: e.target.value }]);
      } else {
        for (const obj of type2) {
          if (obj.id === idf) {
            obj.value = e.target.value;

            break;
          }
        }
      }
      /*
      console.log(
        "typq2: ",
        type2.reduce((n, { value }) => n + value, 0)
      );
      */
    } else if (type_id === 3) {
      const find = type3.find(({ id }) => id === idf);
      if (find === undefined) {
        setType3([...type3, { id: id, value: e.target.value }]);
      } else {
        for (const obj of type3) {
          if (obj.id === idf) {
            obj.value = e.target.value;

            break;
          }
        }
      }
      /*
      console.log(
        "typq3: ",
        type3.reduce((n, { value }) => n + value, 0)
      );
      */
    } else if (type_id === 4) {
      const find = type4.find(({ id }) => id === idf);
      if (find === undefined) {
        setType4([...type4, { id: id, value: e.target.value }]);
      } else {
        for (const obj of type4) {
          if (obj.id === idf) {
            obj.value = e.target.value;

            break;
          }
        }
      }
      /*
      console.log(
        "typq4: ",
        type4.reduce((n, { value }) => n + value, 0)
      );
      */
    } else if (type_id === 5) {
      const find = type5.find(({ id }) => id === idf);
      if (find === undefined) {
        setType5([...type5, { id: id, value: e.target.value }]);
      } else {
        for (const obj of type5) {
          if (obj.id === idf) {
            obj.value = e.target.value;

            break;
          }
        }
      }
      /*
      console.log(
        "typq5: ",
        type5.reduce((n, { value }) => n + value, 0)
      );
      */
    } else if (type_id === 6) {
      const find = type6.find(({ id }) => id === idf);
      if (find === undefined) {
        setType6([...type6, { id: id, value: e.target.value }]);
      } else {
        for (const obj of type6) {
          if (obj.id === idf) {
            obj.value = e.target.value;
            break;
          }
        }
      }
      /*
      console.log(
        "typq6: ",
        type6.reduce((n, { value }) => n + value, 0)
      );
      */
    }
  };
  /*
  console.log("type1:", type1);
  
  console.log("type2:", type2);
  console.log("type3:", type3);
  console.log("type4:", type4);
  console.log("type5:", type5);
  console.log("type6:", type6);
  */

  /*console.log(
    "typq1: ",
    type1.reduce((n, { value }) => n + value, 0) / type1.length
  );
  //console.log(type1.length);
  console.log(
    "typq2: ",
    type2.reduce((n, { value }) => n + value, 0) / type2.length
  );
  console.log(
    "typq3: ",
    type3.reduce((n, { value }) => n + value, 0) / type3.length
  );
  console.log(
    "typq4: ",
    type4.reduce((n, { value }) => n + value, 0) / type4.length
  );
  console.log(
    "typq5: ",
    type5.reduce((n, { value }) => n + value, 0) / type5.length
  );
  console.log(
    "typq6: ",
    type6.reduce((n, { value }) => n + value, 0) / type6.length
  );*/

  /*
  const sum = type1.reduce((accumulator, object) => {
    return accumulator + object;
  }, 0);
  console.log(sum);
  */
  //=======กดบันทึก=========

  const handleSubmitAns = () => {
    //console.log(editDetail);
    toast.success("ok ค่า ลงแล้ว");
    //console.log(ansValues);
    //console.log(ansResult);
    /*
    submitAns(ansValues)
      .then((res) => {
        //console.log(res.data.status);
        //toast.success(res.data.status);
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });

    submitAnsRs(ansResult)
      .then((res) => {
        //console.log(res.data.status);
        //toast.success(res.data.status);
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
      */
    navigate("/result", { state: { data: data } });
  };

  const onFinishFailed = (errorInfo) => {
    toast.error("กรุณากรอกข้อมูลหรือคำถามให้ครบ");
  };

  const data = [sum1, sum2, sum3, sum4, sum5, sum6];

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
                        onChange={(e) => onChange(e, item.type_id, item.id)}
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
                        onChange={(e) => onChange(e, item.type_id, item.id)}
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
