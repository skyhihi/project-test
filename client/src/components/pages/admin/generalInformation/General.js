import React, { /*useRef ,*/ useState, useEffect } from "react";
import { Select /*Input, Tabl*/ } from "antd";
import MenuAdmin from "../MenuAdmin";
//import Highlighter from "react-highlight-words";
import { readAns } from "../../../functions/ans_all";
import { readAnsRS } from "../../../functions/ans_result";
import { CSVLink } from "react-csv";

const headers = [
  { label: "Student ID", key: "result.student_id" },
  { label: "Name", key: "result.name" },
  { label: "University", key: "result.university" },
  { label: "Years", key: "result.year" },
  { label: "q1", key: "ans.name" },
  { label: "e", key: "result.sum1" },
  { label: "i", key: "result.sum2" },
  { label: "b", key: "result.sum3" },
  { label: "p", key: "result.sum4" },
  { label: "t", key: "result.sum5" },
  { label: "d", key: "result.sum6" },
];

const { Option } = Select;

const General = () => {
  const [dataAns_all, setDataAns_all] = useState([]);
  const [data, setData] = useState([]);

  const loadData = () => {
    readAns()
      .then((res) => {
        setDataAns_all(res.data);
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
  console.log(dataAns_all);

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
                      <i class="bi bi-file-earmark-arrow-down"></i>{" "}
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
                          <th scope="col">Years</th>
                          <th scope="col">University</th>
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
                              <th scope="row">{index + 1}</th>{" "}
                              <td>{item.result.student_id}</td>
                              <td>{item.result.name}</td>
                              <td>{item.result.university}</td>
                              <td>{item.result.year}</td>
                              <td>{item.result.sum1}</td>
                              <td>{item.result.sum2}</td>
                              <td>{item.result.sum3}</td>
                              <td>{item.result.sum4}</td>
                              <td>{item.result.sum5}</td>
                              <td>{item.result.sum6}</td>
                            </>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default General;
