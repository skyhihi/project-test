import React, { useState, useEffect } from "react";
import MenuAdmin from "../MenuAdmin";

//import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";

import {
  type,
  create_type,
  delete_type,
  edit_typeName,
  edit_typeSym,
} from "../../../functions/type.js";

import { toast } from "react-toastify";

const DetailTypes = () => {
  //const [value, setValue] = useState({
    //type_id: "",
    //name: "",
   // type_sym: "",
  //});

  const [ListType, setListType] = useState([]);
  const loadData = () => {
    type()     
      .then((res) => {
        setListType(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  
  const handleRemove = (id) => {
    if (window.confirm("Are You Sure Delete")) {
      delete_type(id)
        .then((res) => {
          console.log(res.data.status);
          toast.success(res.data.status);
          loadData();
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };

  //useEffect(() => {
  //loadData();
  //}, []);

  return (
    <>
      <MenuAdmin />
      <div style={{ paddingLeft: "200px" }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <br />
              <tr>
                <td>
                  <h5 style={{ paddingLeft: "1rem" }}>ข้อมูลหมวดหมู่</h5>
                </td>
                <td>
                  <button
                    className="btn btn-outline-success btn-sm"
                    type="text"
                    style={{ marginLeft: "1rem" }}
                  >
                    <i class="bi bi-plus-circle"></i> เพิ่มหมวดหมู่
                  </button>
                </td>
              </tr>

              <div className="card-body">
                <div className="ques__body">
                  <br />

                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">no.</th>
                        <th scope="col">symbol</th>
                        <th scope="col">ชื่อหมวด</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>

                    {/**=================body================= */}

                    <tbody>
                      {ListType.map((item, index) => (
                        <tr key={index}>
                          <>
                            <th scope="row">{index + 1}</th>
                            <td>{item.type_sym}</td>
                            <td>{item.name}</td>
                            <td>
                              <button
                                className="btn btn-warning btn-sm me-3"
                                name="edit"
                                //     onChange={handleChange}
                              >
                                แก้ไข
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                //    onChange={handleChange}
                                onClick={() => handleRemove(item.id)}
                              >
                                ลบ
                              </button>
                            </td>
                          </>
                        </tr>
                      ))}
                    </tbody>

                    {/**=================body================= */}
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
