import React, { useState, useEffect } from "react";
import MenuAdmin from "../MenuAdmin";
import { Button, Modal, Input, message, Popconfirm } from "antd";
//import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
import { FontSizeOutlined } from "@ant-design/icons";

import {
  type,
  create_type,
  delete_type,
  edit_typeName,
  edit_typeSym,
} from "../../../functions/type.js";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const DetailTypes = () => {
  /**--------------------ลิสหมวดหมู่--------------- */
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
  /**----------------------------------- */
  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);
  /**--------------------ตุ่มลบ--------------- */
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
  /**----------------------------------- */

  const cancel = () => {
    //console.log(e);
    message.error("Message was not deleted");
  };

  const [editType, setEditType] = useState({
    type_id: "",
    name: "",
  }); //แก้ไขหมวดหมู่
  const [editTypeSym, setEditSymbol] = useState({
    type_id: "",
    symbol: "",
  }); //แก้ไขตัวย่อหมวดหมู่
  const [value, setValue] = useState({
    name: "",
    type_sym: "",
  });

  /**--------------------popup--------------- */
  const showModal = (type_id, name, type_sym) => {
    setIsModalOpen(true);
    setEditType({ ...editType, type_id: type_id, name: name });
    setOriginalType(name);
    setOriginalSymbol(type_sym);
    setEditSymbol({ ...editTypeSym, type_id: type_id, symbol: type_sym });
  }; /**--------------------popup--------------- */

  const [isModalOpen, setIsModalOpen] = useState(false); /** ปิด popup */
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //-------------------<button>กดปุ่มเพื่อเปลี่ยนหมวดหมู่-------------------//
  const handleSubmitChange = () => {
    console.log(editType);
    edit_typeName(editType)
      .then((res) => {
        //console.log(res.data.status);
        toast.success(res.data.status);
        loadData();

        setIsModalOpen(false);
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  }; //-------------------<button>กดปุ่มเพื่อเปลี่ยนหมวดหมู่-------------------//

  //-------------------รับ<Input>หมวดหมู่ที่ต้องการเปลี่ยน-------------------//
  const handleChangeType = (e) => {
    setEditType({ ...editType, [e.target.name]: e.target.value });
  }; //-------------------รับ<Input>หมวดหมู่ที่ต้องการเปลี่ยน-------------------//

  const [originalType, setOriginalType] = useState(); //แสดงค่าหมวดหมู่เดิม
  const [originalSymbol, setOriginalSymbol] = useState(); //แสดงค่าตัวย่อหมวดหมู่เดิม

  //-------------------รับ<Input>ตัวย่อหมวดหมู่ที่ต้องการเปลี่ยน-------------------//
  const handleChangeTypeSym = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    setEditSymbol({ ...editTypeSym, symbol: e.target.value });
  }; //-------------------รับ<Input>ตัวย่อหมวดหมู่ที่ต้องการเปลี่ยน-------------------//

  //-------------------<button>กดปุ่มเพื่อเปลี่ยนตัวย่อหมวดหมู่-------------------//
  const handleSubmitSymbolType = () => {
    console.log(editTypeSym);
    edit_typeSym(editTypeSym)
      .then((res) => {
        console.log(res.data.status);
        toast.success(res.data.status);
        loadData();

        setIsModalOpen(false);
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  }; //<button>กดปุ่มเพื่อเปลี่ยนตัวย่อหมวดหมู่//

  //
  const onChangeType = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setValue({ ...value, [e.target.name]: e.target.value });
    //console.log(value);
  };
  const onChangeTypeSym = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setValue({ ...value, [e.target.name]: e.target.value });
    //console.log(value);
  };

  //button press//
  const onClick = (e) => {
    e.preventDefault(); //
    console.log(value);

    create_type(value)
      .then((res) => {
        //console.log(res.data);
        toast.success(res.data.status);
        loadData();
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  };

  return (
    <>
      <MenuAdmin />
      <div style={{ paddingLeft: "200px" }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <br />

              {/**=========================== */}
              <tr>
                <td>
                  <h5 style={{ paddingLeft: "1rem" }}>ข้อมูลหมวดหมู่</h5>
                  <br />
                </td>

                <div className="row" style={{ paddingLeft: "1rem" }}>
                  <div className="col-md-6">
                    <label>หมวดหมู่</label>
                    <Input
                      type="text"
                      name="name"
                      //size="large"
                      placeholder=" เพิ่มหมวดหมู่"
                      allowClear
                      onChange={onChangeType}
                      prefix={
                        <FontSizeOutlined className="site-form-item-icon" />
                      }
                    />
                  </div>
                  <div className="col-md-3">
                    <label>อักษรย่อหมวดหมู่</label>
                    <Input
                      type="text"
                      name="type_sym"
                      maxLength={1}
                      placeholder=" ใส่ตัวอักษรเพียงหนึ่งตัว"
                      allowClear
                      onChange={onChangeTypeSym}
                      prefix={
                        <FontSizeOutlined className="site-form-item-icon" />
                      }
                    />
                  </div>
                  <div className="col-md-3">
                    <br />
                    <button
                      className="btn btn-outline-success btn-sm"
                      type="text"
                      onClick={onClick}
                      //style={{ marginLeft: "1rem" }}
                    >
                      <i class="bi bi-plus-circle"></i> เพิ่มหมวดหมู่
                    </button>
                  </div>
                </div>
              </tr>

              <div className="card-body">
                <div className="ques__body">
                  <br />

                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">no.</th>
                        <th scope="col">ชื่อหมวด</th>
                        <th scope="col">symbol</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>

                    {/**=================body================= */}

                    <tbody>
                      {ListType.map((item, index) => (
                        <tr key={index}>
                          <>
                            <th scope="col"></th>
                            <th scope="row">{index + 1}</th>{" "}
                            <td>{item.name}</td>
                            <td>{item.type_sym}</td>
                            <td>
                              <Link to={`/admin/detail-types/${item.type_id}`}>
                                <button
                                  className="btn btn-info btn-sm me-3 text-light"
                                  name="add"
                                >
                                  <i class="bi bi-plus"></i> เพิ่มรายละเอียด
                                </button>
                              </Link>
                              <button
                                className="btn btn-warning btn-sm me-3 "
                                name="edit"
                                onClick={() =>
                                  showModal(
                                    item.type_id,
                                    item.name,
                                    item.type_sym
                                  )
                                }
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

                  {/*-------------popup------------------*/}
                  <Modal
                    title="แก้ไขชื่อหมวดหมู่"
                    open={isModalOpen}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <label>
                      <b>หมวดหมู่ : {originalType}</b>
                    </label>
                    <br />
                    <br />
                    <Input
                      type="text"
                      name="name"
                      placeholder={" แก้ไขหมวดหมู่"}
                      onChange={handleChangeType}
                      prefix={
                        <FontSizeOutlined className="site-form-item-icon" />
                      }
                    />
                    <Button
                      type="primary"
                      style={{ marginTop: "0.5rem" }}
                      onClick={handleSubmitChange}
                    >
                      เปลี่ยน
                    </Button>
                    <br />
                    <br />
                    <hr />

                    <label>
                      <b>อักษรย่อ : {originalSymbol}</b>
                    </label>
                    <br />
                    <br />
                    <Input
                      type="text"
                      name="symbol" //ควรเป็นชื่อเดียวกันกับในuseState
                      maxLength={1}
                      placeholder={
                        " แก้ไขอักษรย่อ ( กรุณาใส่ตัวอักษรเพียงหนึ่งตัวอักษร )"
                      }
                      onChange={handleChangeTypeSym}
                      prefix={
                        <FontSizeOutlined className="site-form-item-icon" />
                      }
                    />
                    <Button
                      type="primary"
                      style={{ marginTop: "0.5rem" }}
                      onClick={handleSubmitSymbolType}
                    >
                      เปลี่ยน
                    </Button>
                    <br />
                    <br />
                  </Modal>

                  {/*-------------popup------------------*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailTypes;
