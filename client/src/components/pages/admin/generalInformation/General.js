import React, { /*useRef ,*/ useState, useEffect } from "react";
import { Select /*Input, Tabl*/ } from "antd";
import MenuAdmin from "../MenuAdmin";
//import Highlighter from "react-highlight-words";
import { readAns } from "../../../functions/ans_all";
import { readAnsRS } from "../../../functions/ans_result";
import { CSVLink } from "react-csv";

const { Option } = Select;

const General = () => {
  const [dataAns_all, setDataAns_all] = useState([]);
  const [data, setData] = useState([]);

  const loadData = () => {
    readAns(data)
      .then((res) => {
        setDataAns_all(res.data);

        //setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    readAnsRS()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);
  console.log("dataAll", dataAns_all[0]);
  //console.log("data", data);
  //const dataF = Object.keys(dataAns_all);
  //console.log("dataF", dataF);

  const headers = [
    { label: "Student ID", key: "result.student_id" },
    { label: "Name", key: "result.name" },
    { label: "University", key: "result.university" },
    { label: "Years", key: "result.year" },
    {
      label: "ฉันเรียนหมอและเก่งวิชาคณิตศาสตร์",
      key: "",
    },
    { label: "ฉันชอบเขียนคำสั่งโปรแกรมคอมพิวเตอร์", key: "result.แพทย์" },
    {
      label: "ฉันเรียนแพทย์แต่เล่นหุ้น ลงทุนทองคำ เลือกซื้อกองทุนเป็น",
      key: "result.แพทย์",
    },
    {
      label: "ฉันเรียนหมอและชอบลงพื้นที่ไปพูดคุยกับชาวบ้าน",
      key: "result.แพทย์",
    },
    { label: "ฉันฝันอยากเป็นหมอและครูสอนหมอ", key: "result.แพทย์" },
    {
      label: "ฉันสนใจเรียนหมอเพื่อดูแลรักษาคนไข้ที่โรงพยาบาล",
      key: "result.แพทย์",
    },
    { label: "ฉันสนใจกลไกทำงานข้างในอุปกรณ์การแพทย์", key: "result.แพทย์" },
    {
      label: "ฉันสนใจระบบรักษาความปลอดภัยของข้อมูลในคอมพิวเตอร์",
      key: "result.แพทย์",
    },
    {
      label:
        "ฉันชอบดูโฆษณา รายการส่งเสริมการค้าใหม่ๆ เพื่อจำวิธีนำเสนอที่ติดหูติดใจ",
      key: "result.แพทย์",
    },
    {
      label: "ฉันเชื่อว่าหมอให้ความรู้ป้องกันโรคสำคัญกว่าหมอรักษาโรค",
      key: "result.แพทย์",
    },
    { label: "ฉันชอบงานสอนและอธิบายความรู้ให้คนอื่น", key: "result.แพทย์" },
    { label: "ความสุขของฉันคือเป็นหมอช่วยชีวิตคนป่วย", key: "result.แพทย์" },
    { label: "ฉันจะลงมือซ่อมมือถือเองก่อนส่งให้ช่าง", key: "result.แพทย์" },
    {
      label: "ฉันจัดประเภทไฟล์ข้อมูล สร้างเป็นแฟ้มงานต่างๆ ในคอมพิวเตอร์",
      key: "result.แพทย์",
    },
    { label: "ฉันฝันอยากเป็นหมอและนักธุรกิจไปพร้อมๆ กัน", key: "result.แพทย์" },
    {
      label: "ฉันชอบทำงานที่ได้พบปะพูดคุยกับผู้คนที่หลากหลาย",
      key: "result.แพทย์",
    },
    {
      label: "ฉันคิดว่าหมอที่ดีต้องสามารถถ่ายทอดความรู้ได้",
      key: "result.แพทย์",
    },
    { label: "ฉันอยากเรียนจบเร็วๆ เพื่อไปดูแลผู้ป่วย", key: "result.แพทย์" },
    { label: "ฉันอยากสร้างเครื่องมือทางการแพทย์", key: "result.แพทย์" },
    {
      label: "ฉันอยากสร้างโปรแกรมซอฟต์แวร์เพื่อการวินิจฉัยโรค",
      key: "result.แพทย์",
    },
    {
      label: "ฉันยินดีเป็นคนกลางช่วยเจรจาเมื่อเพื่อนในกลุ่มทะเลาะกัน",
      key: "result.แพทย์",
    },
    {
      label: "ฉันคิดว่าหมอกับคนในชุมชนต้องทำงานดูแลสุขภาพร่วมกัน",
      key: "result.แพทย์",
    },
    {
      label: "ฉันมีอาจารย์แพทย์ในดวงใจที่ตั้งใจสอนลูกศิษย์",
      key: "result.แพทย์",
    },
    {
      label: "ฉันเชื่อว่าแพทย์เป็นอาชีพที่มั่นคง ไม่ตกงาน",
      key: "result.แพทย์",
    },
    {
      label:
        "ฉันใช้เครื่องวัดความดันหลายทีต่อครั้งเพื่อเช็คว่าตัวเลขใกล้เคียงกัน",
      key: "result.แพทย์",
    },
    {
      label: "ฉันเขียนข้อเสนอแนะเพื่อพัฒนาโปรแกรมเป็นประจำ",
      key: "result.แพทย์",
    },
    {
      label: "ฉันชอบวิเคราะห์แนวโน้มเศรษฐกิจที่จะเกิดขึ้นในอนาคต",
      key: "result.แพทย์",
    },
    {
      label: "ฉันว่าคนเป็นหมอต้องจูงใจเก่งให้ผู้ป่วยเปลี่ยนพฤติกรรม",
      key: "result.แพทย์",
    },
    {
      label: "ฉันรู้ว่าอาจารย์แพทย์เป็นงานที่หนักแต่มีความสุข",
      key: "result.แพทย์",
    },
    { label: "ฉันคิดว่าจะทำอาชีพแพทย์ไปตลอดชีวิต", key: "result.แพทย์" },
    /*{ label: "e", key: "result.วิศวกร" },
    { label: "i", key: "result.นักเทคโนโลยีสารสนเทศ" },
    { label: "b", key: "result.นักการตลาดการจัดการ" },
    { label: "p", key: "result.นักสาธารณสุข" },
    { label: "t", key: "result.อาจารย์แพทย์" },
    { label: "d", key: "result.แพทย์" },*/
    { label: "e", key: "result.sum1" },
    { label: "i", key: "result.sum2" },
    { label: "b", key: "result.sum3" },
    { label: "p", key: "result.sum4" },
    { label: "t", key: "result.sum5" },
    { label: "d", key: "result.sum6" },
  ];

  return (
    <>
      <MenuAdmin />

      <div style={{ paddingLeft: "200px" }}>
        <div className="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div className="row">
                {/*<div className="col-lg-2"></div>*/}
                {/*<div className="col-lg-8">*/}
                <h5>ข้อมูลทั้งหมด</h5>
                <br />
                <br />
                <div className="col-sm-5" style={{ marginBottom: "1rem" }}>
                  <Select
                    defaultValue="มหาวิทยาลัย"
                    style={{
                      fontSize: "18px",
                      width: "100%",
                    }}
                    // onChange={handleChange}
                  >
                    <Option value="jack" style={{ fontSize: "18px" }}>
                      มหาวิทยาลัยมหิดล
                    </Option>
                    <Option value="lucy" style={{ fontSize: "18px" }}>
                      มหาวิทยาลัย...
                    </Option>
                  </Select>
                </div>
                <div className="col-sm-5">
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
                <div className="col-lg-2">
                  <CSVLink
                    data={data}
                    headers={headers}
                    filename="sixEvaluate.csv"
                  >
                    <button className="btn btn-success btn-sm">
                      <i class="bi bi-file-earmark-arrow-down"></i>
                      ดาวน์โหลดเอกสาร
                    </button>
                  </CSVLink>
                </div>
                {/** code here */}
                <br />
                <div className="card-body">
                  <div className="ques__body">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">no.</th>
                          <th scope="col">Student ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">University</th>
                          <th scope="col">Years</th>
                          <th scope="col">e</th>
                          <th scope="col">i</th>
                          <th scope="col">b</th>
                          <th scope="col">p</th>
                          <th scope="col">t</th>
                          <th scope="col">d</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index}>
                            <>
                              <th scope="row">{index + 1}</th>
                              <td>{item.result.student_id}</td>
                              <td>{item.result.name}</td>
                              <td>{item.result.university}</td>
                              <td>{item.result.year}</td>
                              <td>{item.result.วิศวกร}</td>
                              <td>{item.result.นักเทคโนโลยีสารสนเทศ}</td>
                              <td>{item.result.นักการตลาดการจัดการ}</td>
                              <td>{item.result.นักสาธารณสุข}</td>
                              <td>{item.result.อาจารย์แพทย์}</td>
                              <td>{item.result.แพทย์}</td>
                            </>
                          </tr>
                        ))}
                        {/** 
                        {dataAns_all.map((item, index) => (
                          <>
                            <p>{item.ans}</p>
                          </>
                        ))}*/}
                      </tbody>
                    </table>
                  </div>
                </div>

                {dataAns_all.map((item, index) => (
                  <></>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default General;
