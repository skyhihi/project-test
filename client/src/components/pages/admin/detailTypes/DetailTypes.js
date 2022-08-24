import React from "react";
import MenuAdmin from "../MenuAdmin";
const DetailTypes = () => {
  return (
    <>
      <MenuAdmin />
      <div style={{ paddingLeft: "200px" }}>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="card">
              <h5 className="card-header">ข้อมูลหมวดหมู่</h5>
              <div className="card-body">
                <div className="ques__body">
                  <button className="btn btn-success">เพิ่มหมวดหมู่</button>
                  <br />
                  <br />
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">no.</th>
                        <th scope="col">ชื่อหมวด</th>

                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>วิศวกร</td>

                        <td>
                          <button className="btn btn-warning btn-sm me-3">
                            แก้ไข
                          </button>
                          <button className="btn btn-danger btn-sm">ลบ</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>หมอ</td>

                        <td>
                          <button className="btn btn-warning btn-sm me-3">
                            แก้ไข
                          </button>
                          <button className="btn btn-danger btn-sm">ลบ</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>นักเทคโนโลยี</td>

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

export default DetailTypes;
