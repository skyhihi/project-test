import { Select, Input, Radio } from "antd";
import { UserOutlined, NumberOutlined } from "@ant-design/icons";
import React, { useState } from "react";
const { Option } = Select;

const Test = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
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
          <Input size="large" placeholder="ชื่อ นามสกุล" prefix={<UserOutlined />} />
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
          

          
          <label >ฉันเรียนหมอและเก่งวิชาคณิตศาสตร์</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;

          
          
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันชอบเขียนคำสั่งโปรแกรมคอมพิวเตอร์</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันเรียนแพทย์แต่เล่นหุ้น ลงทุนทองคำ เลือกซื้อกองทุนเป็น</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันเรียนหมอและชอบลงพื้นที่ไปพูดคุยกับชาวบ้าน</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันฝันอยากเป็นหมอและครูสอนหมอ</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันสนใจเรียนหมอเพื่อดูแลรักษาคนไข้ที่โรงพยาบาล</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันสนใจกลไกทำงานข้างในอุปกรณ์การแพทย์</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันสนใจระบบรักษาความปลอดภัยของข้อมูลในคอมพิวเตอร์</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันชอบดูโฆษณา รายการส่งเสริมการค้าใหม่ๆ เพื่อจำวิธีนำเสนอที่ติดหูติดใจ</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันเชื่อว่าหมอให้ความรู้ป้องกันโรคสำคัญกว่าหมอรักษาโรค</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันชอบงานสอนและอธิบายความรู้ให้คนอื่น</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ความสุขของฉันคือเป็นหมอช่วยชีวิตคนป่วย</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันจะลงมือซ่อมมือถือเองก่อนส่งให้ช่าง</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันจัดประเภทไฟล์ข้อมูล สร้างเป็นแฟ้มงานต่างๆ ในคอมพิวเตอร์</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันฝันอยากเป็นหมอและนักธุรกิจไปพร้อมๆ กัน</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันชอบทำงานที่ได้พบปะพูดคุยกับผู้คนที่หลากหลาย</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันคิดว่าหมอที่ดีต้องสามารถถ่ายทอดความรู้ได้</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันอยากเรียนจบเร็วๆ เพื่อไปดูแลผู้ป่วย</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันอยากสร้างเครื่องมือทางการแพทย์</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันอยากสร้างโปรแกรมซอฟต์แวร์เพื่อการวินิจฉัยโรค</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันยินดีเป็นคนกลางช่วยเจรจาเมื่อเพื่อนในกลุ่มทะเลาะกัน</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันคิดว่าหมอกับคนในชุมชนต้องทำงานดูแลสุขภาพร่วมกัน</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันมีอาจารย์แพทย์ในดวงใจที่ตั้งใจสอนลูกศิษย์</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันเชื่อว่าแพทย์เป็นอาชีพที่มั่นคง ไม่ตกงาน</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันใช้เครื่องวัดความดันหลายทีต่อครั้งเพื่อเช็คว่าตัวเลขใกล้เคียงกัน</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันเขียนข้อเสนอแนะเพื่อพัฒนาโปรแกรมเป็นประจำ</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันชอบวิเคราะห์แนวโน้มเศรษฐกิจที่จะเกิดขึ้นในอนาคต</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันว่าคนเป็นหมอต้องจูงใจเก่งให้ผู้ป่วยเปลี่ยนพฤติกรรม</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันรู้ว่าอาจารย์แพทย์เป็นงานที่หนักแต่มีความสุข</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />
          <label >ฉันคิดว่าจะทำอาชีพแพทย์ไปตลอดชีวิต</label><br /><br />
          <label >น้อยที่สุด</label >&nbsp;&nbsp;
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
            <Radio value={5}>D</Radio>
          </Radio.Group><label >มากที่สุด</label>
          <br /><br /><hr />

          
        </div>

        <div className="col-lg-2"></div>
      </div>
    </>
  );
};

export default Test;
