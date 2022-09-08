import React, { useState, useEffect } from "react";
import MenuAdmin from "../MenuAdmin";
import { message, Popconfirm } from "antd";
//import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";

import {
  type,
  //create_type,
  delete_type,
  //edit_typeName,
  //edit_typeSym,
} from "../../../functions/type.js";

import { toast } from "react-toastify";

const DetailTypes = () => {
  {/**--------------------ลิสหมวดหมู่--------------- */}
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
{/**----------------------------------- */}
  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);
{/**--------------------ตุ่มลบ--------------- */}
  const buttonDelete = (type_id) => {
    delete_type(type_id)
      .then((res) => {
        toast.success(res.data.status);
        loadData();
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };
{/**----------------------------------- */}
  const cancel = () => {
    //console.log(e);
    message.error("Message was not deleted");
  };

  {/**--------------------popup--------------- */}
  const showModal = (id, detail, name) => {
    setIsModalOpen(true);
    setEditDetail({ ...editDetail, id: id });
    setDetailOld(detail);
    setDetailTypeOld(name);
    setEditTypeDetail({ ...editTypeDetail, id: id });
    //console.log(id);
  };

  const [isModalOpen, setIsModalOpen] = useState(false); {/** ปิด popup */}
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [editDetail, setEditDetail] = useState({
    id: "",
    detail: "",
  });

  const [detailOld, setDetailOld] = useState();
  const [detailTypeOld, setDetailTypeOld] = useState();

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
                              <button className="btn btn-info btn-sm me-3 text-light" name="add" >
                              <i class="bi bi-plus"></i> เพิ่มรายละเอียด</button>
                              <button
                                className="btn btn-warning btn-sm me-3 "
                                name="edit"
                              >
                                แก้ไข
                              </button>

                              {/*-------------------------------*/}

                              
                                
                                  <Popconfirm
                                    placement="topRight"
                                    title="Are you sure?"
                                    onConfirm={() => buttonDelete(item.type_id)}
                                    onCancel={cancel}
                                    okText="Yes"
                                    cancelText="No"
                                  >
                                    <button
                                      className="btn btn-danger btn-sm "
                                      type="text"
                                      style={{ marginLeft: "1rem" }}
                                    >
                                      ลบ
                                    </button>
                                  </Popconfirm>
                               

                              {/*-------------------------------*/}
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
