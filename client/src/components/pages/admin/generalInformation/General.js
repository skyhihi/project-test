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
    readAns()
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
  //console.log("dataAll", dataAns_all[0]);
  //console.log("data", data);
  //const dataF = Object.keys(dataAns_all);
  //console.log("dataF", dataF);

  const headers = [
    { label: "Student ID", key: "ans.student_id" },
    { label: "Name", key: "ans.name" },
    { label: "University", key: "ans.university" },
    { label: "Years", key: "ans.year" },
    {
      label: "q_1",
      key: "ans.qaId_1",
    },
    { label: "q_2", key: "ans.qaId_2" },
    {
      label: "q_3",
      key: "ans.qaId_3",
    },
    {
      label: "q_4",
      key: "ans.qaId_4",
    },
    { label: "q_5", key: "ans.qaId_5" },
    {
      label: "q_6",
      key: "ans.qaId_6",
    },
    { label: "q_7", key: "ans.qaId_7" },
    {
      label: "q_8",
      key: "ans.qaId_8",
    },
    {
      label: "q_9",
      key: "ans.qaId_9",
    },
    {
      label: "q_10",
      key: "ans.qaId_10",
    },
    { label: "q_11", key: "ans.qaId_11" },
    { label: "q_12", key: "ans.qaId_12" },
    { label: "q_13", key: "ans.qaId_13" },
    {
      label: "q_14",
      key: "ans.qaId_14",
    },
    { label: "q_15", key: "ans.qaId_15" },
    {
      label: "q_16",
      key: "ans.qaId_16",
    },
    {
      label: "q_17",
      key: "ans.qaId_17",
    },
    { label: "q_18", key: "ans.qaId_18" },
    { label: "q_19", key: "ans.qaId_19" },
    {
      label: "q_20",
      key: "ans.qaId_20",
    },
    {
      label: "q_21",
      key: "ans.qaId_21",
    },
    {
      label: "q_22",
      key: "ans.qaId_22",
    },
    {
      label: "q_23",
      key: "ans.qaId_23",
    },
    {
      label: "q_24",
      key: "ans.qaId_24",
    },
    {
      label: "q_25",
      key: "ans.qaId_25",
    },
    {
      label: "q_26",
      key: "ans.qaId_26",
    },
    {
      label: "q_27",
      key: "ans.qaId_27",
    },
    {
      label: "q_28",
      key: "ans.qaId_28",
    },
    {
      label: "q_29",
      key: "ans.qaId_29",
    },
    {
      label: "q_30",
      key: "ans.qaId_30",
    },
    { label: "e", key: "result.วิศวกร" },
    { label: "i", key: "result.นักเทคโนโลยีสารสนเทศ" },
    { label: "b", key: "result.นักการตลาดการจัดการ" },
    { label: "p", key: "result.นักสาธารณสุข" },
    { label: "t", key: "result.อาจารย์แพทย์" },
    { label: "d", key: "result.แพทย์" },
    /*{ label: "e", key: "result.sum1" },
    { label: "i", key: "result.sum2" },
    { label: "b", key: "result.sum3" },
    { label: "p", key: "result.sum4" },
    { label: "t", key: "result.sum5" },
    { label: "d", key: "result.sum6" },*/
  ];
  const header = [
    { label: "e", key: "result.วิศวกร" },
    { label: "i", key: "result.นักเทคโนโลยีสารสนเทศ" },
    { label: "b", key: "result.นักการตลาดการจัดการ" },
    { label: "p", key: "result.นักสาธารณสุข" },
    { label: "t", key: "result.อาจารย์แพทย์" },
    { label: "d", key: "result.แพทย์" },
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
                    //data={data}
                    data={dataAns_all}
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
