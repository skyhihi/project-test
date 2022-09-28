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
  //console.log("dataAll", dataAns_all);
  //console.log("data", data);
  //const dataF = Object.keys(dataAns_all);
  //console.log("dataF", dataF);

  const headers = [
    { label: "Student ID", key: "result.student_id" },
    { label: "Name", key: "result.name" },
    { label: "University", key: "result.university" },
    { label: "Years", key: "result.year" },
    { label: "e", key: "result.วิศวกร" },
    { label: "i", key: "result.นักเทคโนโลยีสารสนเทศ" },
    { label: "b", key: "result.นักการตลาดการจัดการ" },
    { label: "p", key: "result.นักสาธารณสุข" },
    { label: "t", key: "result.อาจารย์แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
    { label: "d", key: "result.แพทย์" },
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
