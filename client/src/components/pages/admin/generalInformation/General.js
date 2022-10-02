import React, { useState, useEffect } from "react";

import MenuAdmin from "../MenuAdmin";
//import { listUniversity } from "../../../functions/university";
//import { listYears } from "../../../functions/year";
//import { listFaculty } from "../../../functions/faculty";
import { readAnsRS } from "../../../functions/ans_result";
import { readAll } from "../../../functions/ans";
import { CSVLink } from "react-csv";

const General = () => {
  const [dataA, setDataA] = useState([]);
  const [data, setData] = useState([]);
  //const [selected, setSelected] = useState("มหาวิทยาลัย");
  /*
  const [university, setUniversity] = useState([]);
  const [year, setYears] = useState([]);
  const [faculty, setFaculty] = useState([]);
*/
  /*
  const handleChangeU = (value) => {
    setSelectedU(value);
    //console.log(`selected ${value}`);
  };

  const [selectedY, setSelectedY] = useState("ปีการศึกษา");
  const handleChangeY = (value) => {
    setSelectedY(value);
    //console.log(`selected ${value}`);
  };

  const [selectedF, setSelectedF] = useState("คณะ");
  const handleChangeF = (value) => {
    setSelectedF(value);
    //console.log(`selected ${value}`);
  };
*/
  //-------Search----------//
  // const onSearch = (value) => console.log(value);
  //const { Search } = Input;

  //-------loadData---------//
  const loadData = () => {
    readAnsRS()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    readAll(dataA)
      .then((res) => {
        setDataA(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    /*listUniversity()
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
      });*/
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  const headers = [
    { label: "Student ID", key: "all_ans.ansValues.student_id" },
    { label: "Name", key: "all_ans.ansValues.name" },
    { label: "University", key: "all_ans.ansValues.university" },
    { label: "Faculty", key: "all_ans.ansValues.faculty" },
    { label: "Years", key: "all_ans.ansValues.year" },
    { label: "Email", key: "all_ans.ansValues.email" },
    {
      label: "q_1",
      key: "all_ans.ansValues.qaId_1",
    },
    { label: "q_2", key: "all_ans.ansValues.qaId_2" },
    {
      label: "q_3",
      key: "all_ans.ansValues.qaId_3",
    },
    {
      label: "q_4",
      key: "all_ans.ansValues.qaId_4",
    },
    { label: "q_5", key: "all_ans.ansValues.qaId_5" },
    {
      label: "q_6",
      key: "all_ans.ansValues.qaId_6",
    },
    { label: "q_7", key: "all_ans.ansValues.qaId_7" },
    {
      label: "q_8",
      key: "all_ans.ansValues.qaId_8",
    },
    {
      label: "q_9",
      key: "all_ans.ansValues.qaId_9",
    },
    {
      label: "q_10",
      key: "all_ans.ansValues.qaId_10",
    },
    { label: "q_11", key: "all_ans.ansValues.qaId_11" },
    { label: "q_12", key: "all_ans.ansValues.qaId_12" },
    { label: "q_13", key: "all_ans.ansValues.qaId_13" },
    {
      label: "q_14",
      key: "all_ans.ansValues.qaId_14",
    },
    { label: "q_15", key: "all_ans.ansValues.qaId_15" },
    {
      label: "q_16",
      key: "all_ans.ansValues.qaId_16",
    },
    {
      label: "q_17",
      key: "all_ans.ansValues.qaId_17",
    },
    { label: "q_18", key: "all_ans.ansValues.qaId_18" },
    { label: "q_19", key: "all_ans.ansValues.qaId_19" },
    {
      label: "q_20",
      key: "all_ans.ansValues.qaId_20",
    },
    {
      label: "q_21",
      key: "all_ans.ansValues.qaId_21",
    },
    {
      label: "q_22",
      key: "all_ans.ansValues.qaId_22",
    },
    {
      label: "q_23",
      key: "all_ans.ansValues.qaId_23",
    },
    {
      label: "q_24",
      key: "all_ans.ansValues.qaId_24",
    },
    {
      label: "q_25",
      key: "all_ans.ansValues.qaId_25",
    },
    {
      label: "q_26",
      key: "all_ans.ansValues.qaId_26",
    },
    {
      label: "q_27",
      key: "all_ans.ansValues.qaId_27",
    },
    {
      label: "q_28",
      key: "all_ans.ansValues.qaId_28",
    },
    {
      label: "q_29",
      key: "all_ans.ansValues.qaId_29",
    },
    {
      label: "q_30",
      key: "all_ans.ansValues.qaId_30",
    },

    { label: "e", key: "all_ans.result.วิศวกร" },
    { label: "i", key: "all_ans.result.นักเทคโนโลยีสารสนเทศ" },
    { label: "b", key: "all_ans.result.นักการตลาดการจัดการ" },
    { label: "p", key: "all_ans.result.นักสาธารณสุข" },
    { label: "t", key: "all_ans.result.อาจารย์แพทย์" },
    { label: "d", key: "all_ans.result.แพทย์" },
    { label: "Result", key: "all_ans.result.result" },

    /*{ label: "e", key: "result.sum1" },
    { label: "i", key: "result.sum2" },
    { label: "b", key: "result.sum3" },
    { label: "p", key: "result.sum4" },
    { label: "t", key: "result.sum5" },
    { label: "d", key: "result.sum6" },*/
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

                <div className="col-lg-2">
                  <CSVLink
                    //data={data}
                    data={dataA}
                    headers={headers}
                    filename="sixEvaluate.csv"
                  >
                    <button className="btn btn-success btn-sm">
                      <i class="bi bi-file-earmark-arrow-down"></i>{" "}
                      ดาวน์โหลดเอกสาร
                    </button>
                  </CSVLink>
                </div>
                {/*<div className="col-sm-3" style={{ marginBottom: "1rem" }}>
                  <Select
                    defaultValue="มหาวิทยาลัย"
                    style={{
                      fontSize: "18px",
                      width: "100%",
                    }}
                    onChange={(value) => handleChangeU(value)}
                    value={selectedU}
                  >
                    {university.map((item, index) => (
                      <Option value={item.university} key={index}>
                        {item.university}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div className="col-sm-3">
                  <Select
                    defaultValue="ปีการศึกษา"
                    style={{
                      fontSize: "18px",
                      width: "100%",
                    }}
                    onChange={(value) => handleChangeY(value)}
                    value={selectedY}
                  >
                    {year.map((item, index) => (
                      <Option value={item.year} key={index}>
                        {item.year}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div className="col-sm-3">
                  <Select
                    defaultValue="ปีการศึกษา"
                    style={{
                      fontSize: "18px",
                      width: "100%",
                    }}
                    onChange={(value) => handleChangeF(value)}
                    value={selectedF}
                  >
                    {faculty.map((item, index) => (
                      <Option value={item.faculty} key={index}>
                        {item.faculty}
                      </Option>
                    ))}
                  </Select>
                </div>
*/}
                {/** code here */}
                <br />
                <div className="card-body">
                  <div className="ques__body">
                    <div className="table-responsive">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">no.</th>
                            <th scope="col">Student ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">University</th>
                            <th scope="col">Faculty</th>
                            <th scope="col">Years</th>
                            <th scope="col">e</th>
                            <th scope="col">i</th>
                            <th scope="col">b</th>
                            <th scope="col">p</th>
                            <th scope="col">t</th>
                            <th scope="col">d</th>
                            <th scope="col">Result</th>
                            <th scope="col">Email</th>
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
                                <td>{item.result.faculty}</td>
                                <td>{item.result.year}</td>
                                <td>{item.result.วิศวกร}</td>
                                <td>{item.result.นักเทคโนโลยีสารสนเทศ}</td>
                                <td>{item.result.นักการตลาดการจัดการ}</td>
                                <td>{item.result.นักสาธารณสุข}</td>
                                <td>{item.result.อาจารย์แพทย์}</td>
                                <td>{item.result.แพทย์}</td>
                                <td>{item.result.result}</td>
                                <td>{item.result.email}</td>
                              </>
                            </tr>
                          ))}
                          {data.map((item, index) => (
                            <></>
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
      </div>
    </>
  );
};

export default General;
