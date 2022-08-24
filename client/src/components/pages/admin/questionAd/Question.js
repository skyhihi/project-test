import React from "react";
import MenuAdmin from "../MenuAdmin";
import { Select } from "antd";
const { Option } = Select;

const Question = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <MenuAdmin />
      <div style={{ paddingLeft: "200px" }}>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="card">
              <h5 className="card-header">Question</h5>
              <div className="card-body">
                <div className="ques__layout-head">
                  <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                      <Select
                        defaultValue="หมวดหมู่"
                        style={{
                          width: "100%",
                        }}
                        onChange={handleChange}
                      >
                        <Option value="jack">หมวด1</Option>
                        <Option value="lucy">หมวด2</Option>
                        <Option value="jack2">หมวด3</Option>
                        <Option value="lucy2">หมวด4</Option>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="ques__body">
                  <button className="btn btn-success">เพิ่มคำถาม</button>
                  <br />
                  <br />
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">no.</th>
                        <th scope="col">คำถาม</th>
                        <th scope="col">หมวดหมู่</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>ฉันเรียนหมอและเก่งวิชาคณิตศาสตร์</td>
                        <td>หมวด1</td>
                        <td>
                          <button className="btn btn-warning btn-sm me-3">
                            แก้ไข
                          </button>
                          <button className="btn btn-danger btn-sm">ลบ</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>
                          ฉันเรียนแพทย์แต่เล่นหุ้น ลงทุนทองคำ
                          เลือกซื้อกองทุนเป็น
                        </td>
                        <td>หมวด1</td>
                        <td>
                          <button className="btn btn-warning btn-sm me-3">
                            แก้ไข
                          </button>
                          <button className="btn btn-danger btn-sm">ลบ</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>ฉันชอบเขียนคำสั่งโปรแกรมคอมพิวเตอร์</td>
                        <td>หมวด2</td>
                        <td>
                          <button className="btn btn-warning btn-sm me-3">
                            แก้ไข
                          </button>
                          <button className="btn btn-danger btn-sm">ลบ</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </>
  );
};

export default Question;
