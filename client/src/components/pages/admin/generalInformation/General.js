import React, { /*useRef ,*/ useState, useEffect } from "react";
import { Select /*Input, Tabl*/ } from "antd";
import MenuAdmin from "../MenuAdmin";
//import Highlighter from "react-highlight-words";
import { readAns } from "../../../functions/ans_all";

const { Option } = Select;

const General = () => {
  const [dataAns_all, setdataAns_all] = useState([]);

  const loadData = () => {
    readAns()
      .then((res) => {
        setdataAns_all(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <MenuAdmin />

      <div style={{ paddingLeft: "200px" }}>
        <div class="card">
          <div class="card-body">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <div className="row"></div>
              </div>
              <h5>ข้อมูลทั้งหมด</h5>
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
                <button className="btn btn-outline-success btn-sm">
                  <i class="bi bi-file-earmark-arrow-down"></i> ดาวน์โหลดเอกสาร
                </button>
              </div>
            </div>
            {/** code here */}
            {dataAns_all.map((item, index) => (
              <>
                <p>{item.ans.name}</p>
                <p>{item.ans.student_id}</p>
                <p>{item.ans.university}</p>
                <p>{item.ans.year}</p>
              </>
            ))}
          </div>
        </div>

        {/** ============= v ของเก่า ================*/}

        {/** 
        <div class="card">
          <div class="card-body">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <div className="row"></div>
              </div>
              <h5>ข้อมูลทั้งหมด</h5>
              <div className="col-sm-5" style={{ marginBottom: "1rem" }}>
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
                <button className="btn btn-outline-success btn-sm">
                  <i class="bi bi-file-earmark-arrow-down"></i> ดาวน์โหลดเอกสาร
                </button>
              </div>
            </div>

            <Table
              columns={columns}
              dataSource={data}
              scroll={{
                x: 1300,
              }}
            />
          </div>
        </div>
        */}
      </div>
    </>
  );
};

export default General;
