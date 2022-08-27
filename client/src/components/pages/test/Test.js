import { Select, Input,} from "antd";
import { UserOutlined, NumberOutlined,} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
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
            <br />
            <center>
              <h5>ฉันเรียนหมอและเก่งวิชาคณิตศาสตร์</h5>
              <RadioBtn />
            </center>
          </div>

          <div className="test__qu">
            <br />
            <center>
              <h5>ฉันชอบเขียนคำสั่งโปรแกรมคอมพิวเตอร์</h5>
              <RadioBtn />
            </center>
          </div>
          <div className="test__qu">
            <br />
            <center>
              <h5>ฉันเรียนแพทย์แต่เล่นหุ้น ลงทุนทองคำ เลือกซื้อกองทุนเป็น</h5>
              <RadioBtn />
            </center>
          </div>
          <div className="test__qu">
            <br />
            <center>
              <h5>ฉันเรียนหมอและชอบลงพื้นที่ไปพูดคุยกับชาวบ้าน</h5>
              <RadioBtn />
            </center>
          </div>
          <div className="test__qu">
            <br />
            <center>
              <h5>ฉันฝันอยากเป็นหมอและครูสอนหมอ</h5>
              <RadioBtn />
            </center>
          </div>
          <div className="test__qu">
            <br />
            <center>
              <h5>ฉันสนใจเรียนหมอเพื่อดูแลรักษาคนไข้ที่โรงพยาบาล</h5>
              <RadioBtn />
            </center>
          </div>
          <div className="test__qu">
            <br />
            <center>
              <h5>ฉันสนใจกลไกทำงานข้างในอุปกรณ์การแพทย์</h5>
              <RadioBtn />
            </center>
          </div>
          <div className="test__qu">
            <br />
            <center>
              <h5>ฉันสนใจระบบรักษาความปลอดภัยของข้อมูลในคอมพิวเตอร์</h5>
              <RadioBtn />
            </center>
          </div>
          <div className="test__qu">
            <br />
            <center>
              <h5>
                ฉันชอบดูโฆษณา รายการส่งเสริมการค้าใหม่ๆ
                เพื่อจำวิธีนำเสนอที่ติดหูติดใจ
              </h5>
              <RadioBtn />
            </center>
          </div>
          <div className="test__qu">
            <br />
            <center>
              <h5>ฉันเชื่อว่าหมอให้ความรู้ป้องกันโรคสำคัญกว่าหมอรักษาโรค</h5>
              <RadioBtn />
            </center>
          </div>
          
         
            <Link to="/result">
            <button type="button" className="btn btn-secondary" style={{float:"right",marginTop:"1rem",marginBottom:"5rem"}} >คำนวณผลลัพธ์  <i className="bi bi-arrow-right"></i></button>
            </Link>
        
         
        </div>

        <div className="col-lg-2"></div>
      </div>
    </>
  );
};

export default Test;
