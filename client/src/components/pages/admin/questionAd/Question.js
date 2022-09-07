import React, { useState, useEffect } from "react";
import MenuAdmin from "../MenuAdmin";
import { Select, Input, Tooltip, Button, Modal } from "antd";
import {
  listQuestions,
  removeQuestion,
  createQuestion,
  changeQuestion,
  changeType,
} from "../../../functions/question";

import { type } from "../../../functions/type";

import { FormOutlined, FontSizeOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
const { Option } = Select;

const Question = () => {
  const [selected, setSelected] = useState("ทั้งหมด");
  const clearSelected = () => {
    setSelected("ทั้งหมด");
  };

  const handleChange = (value) => {
    setSelected(value);
    //console.log(`selected ${value}`);
  };

  const [questions, setQuestions] = useState([]);

  const [value, setValue] = useState({
    detail: "",
    type_id: "",
  });

  const [typeData, setTypeData] = useState([]);

  const loadData = () => {
    listQuestions()
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadDataType = () => {
    type()
      .then((res) => {
        setTypeData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
    loadDataType();
    // eslint-disable-next-line
  }, []);

  //===========================
  const onChange = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
    //console.log(value);
  };

  const onClick = (e) => {
    e.preventDefault(); //
    //console.log(value);

    createQuestion(value)
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

  const handleRemove = (id) => {
    if (window.confirm("Are You Sure Delete")) {
      removeQuestion(id)
        .then((res) => {
          //console.log(res.data.status);
          toast.success(res.data.status);
          loadData();
        })
        .catch((err) => {
          //console.log(err.response.data.error);
          toast.error(err.response.data.error);
        });
    }
  };
  const [selectedType, setSelectedType] = useState();
  const handleChangeType = (id) => {
    setSelectedType(id);
    let values = {
      type_id: id,
    };
    setValue({ ...value, type_id: values.type_id });
  };

  //======pop up edit===============
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (id, detail, name) => {
    setIsModalOpen(true);
    setEditDetail({ ...editDetail, id: id });
    setDetailOld(detail);
    setDetailTypeOld(name);
    setEditTypeDetail({ ...editTypeDetail, id: id });
    //console.log(id);
  };

  const [detailOld, setDetailOld] = useState();
  const [detailTypeOld, setDetailTypeOld] = useState();

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [editDetail, setEditDetail] = useState({
    id: "",
    detail: "",
  });
  const handleChangeDetail = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    setEditDetail({ ...editDetail, [e.target.name]: e.target.value });
  };

  const handleSubmitDetail = () => {
    //console.log(editDetail);
    changeQuestion(editDetail)
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
  };
  const [editTypeDetail, setEditTypeDetail] = useState({
    id: "",
    type_id: "",
  });
  const [selectedEditType, setSelectedEditType] = useState("ทั้งหมด");
  const handleChangeEditType = (id) => {
    let values = {
      type_id: id,
    };
    setSelectedEditType(id);
    setEditTypeDetail({ ...editTypeDetail, type_id: values.type_id });
  };
  const handleSubmitTypeDetail = () => {
    //console.log(editTypeDetail);
    changeType(editTypeDetail)
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
  };

  return (
    <>
      <MenuAdmin />
      <div style={{ paddingLeft: "200px" }}>
        <div className="row">
          {/*<div className="col-lg-1"></div>*/}
          <div className="col-lg-12">
            <div className="card">
              <br />
              <h5 style={{ textAlign: "center" }}>ข้อมูลคำถาม</h5>
              <div className="card-body">
                <div
                  className="ques__layout-head"
                  style={{ textAlign: "center" }}
                >
                  {/**<div className="col-lg-6"></div>*/}
                  <Select
                    defaultValue="ทั้งหมด"
                    style={{
                      width: "50%",
                      margin: "0 2rem",
                    }}
                    onChange={(value) => handleChange(value)}
                    value={selected}
                    //onChange={handleChange}
                  >
                    {typeData.map((item, index) => (
                      <Option value={item.name} key={index}>
                        {item.name}
                      </Option>
                    ))}
                  </Select>

                  <Button onClick={clearSelected}>Clear Selected</Button>
                </div>

                <div className="ques__body">
                  {/**================================== */}
                  <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                      <Input
                        type="text"
                        name="detail"
                        size="large"
                        placeholder=" เพิ่มคำถาม"
                        onChange={onChange}
                        prefix={
                          <FontSizeOutlined className="site-form-item-icon" />
                        }
                        suffix={
                          <Tooltip title="Extra Information">
                            <FormOutlined
                              style={{ color: "rgba(0,0,0,.45)" }}
                            />
                          </Tooltip>
                        }
                      />
                    </div>
                    <div className="col-md-3">
                      <Select
                        placeholder="กรุณาเลือก"
                        style={{
                          width: "100%",
                        }}
                        size="large"
                        onChange={(id) => handleChangeType(id)}
                        value={selectedType}
                        //onChange={handleChange}
                      >
                        {typeData.map((item, index) => (
                          <Option value={item.type_id} key={index}>
                            {item.name}
                          </Option>
                        ))}
                      </Select>
                    </div>
                    <div className="col-md-2">
                      <button
                        type="button"
                        class="btn btn-success btn-sm"
                        onClick={onClick}
                      >
                        <i class="bi bi-plus-square me-2"></i>
                        เพิ่มคำถาม
                      </button>
                    </div>
                    <div className="col-md-1"></div>
                  </div>

                  {/**================================== */}

                  <br />
                  <br />

                  {/** ======bootstap====== */}
                  {/** */}
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
                      {questions.map((item, index) => (
                        <tr key={index}>
                          {selected === "ทั้งหมด" ? (
                            <>
                              <th scope="row">{index + 1}</th>
                              <td>{item.detail}</td>
                              <td>{item.name}</td>
                              <td>
                                <Button
                                  type="primary"
                                  style={{ marginRight: "1rem" }}
                                  onClick={() =>
                                    showModal(item.id, item.detail, item.name)
                                  }
                                >
                                  แก้ไข
                                </Button>

                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() => handleRemove(item.id)}
                                >
                                  ลบ
                                </button>
                              </td>
                            </>
                          ) : (
                            <></>
                          )}

                          {selected === item.name ? (
                            <>
                              <th scope="row">{index + 1}</th>
                              <td>{item.detail}</td>

                              <td>{item.name}</td>
                              <td>
                                <Button
                                  type="primary"
                                  style={{ marginRight: "1rem" }}
                                  onClick={() =>
                                    showModal(item.id, item.detail, item.name)
                                  }
                                >
                                  แก้ไข
                                </Button>

                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() => handleRemove(item.id)}
                                >
                                  ลบ
                                </button>
                              </td>
                            </>
                          ) : (
                            <></>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Modal
                    title="แก้ไขคำถาม"
                    open={isModalOpen}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <label>
                      <b>คำถาม : {detailOld}</b>
                    </label>
                    <br />
                    <br />
                    <Input
                      type="text"
                      name="detail"
                      placeholder={" แก้ไขคำถาม"}
                      onChange={handleChangeDetail}
                      prefix={
                        <FontSizeOutlined className="site-form-item-icon" />
                      }
                    />
                    <Button
                      type="primary"
                      style={{ marginTop: "0.5rem" }}
                      onClick={handleSubmitDetail}
                    >
                      เปลี่ยน
                    </Button>
                    <br />
                    <br />
                    <hr />

                    <label>
                      <b>หมวดหมู่ : {detailTypeOld}</b>
                    </label>
                    <br />
                    <br />
                    <Select
                      defaultValue="ทั้งหมด"
                      style={{
                        width: "100%",
                      }}
                      onChange={(value) => handleChangeEditType(value)}
                      value={selectedEditType}
                      //onChange={handleChange}
                    >
                      {typeData.map((item, index) => (
                        <Option value={item.type_id} key={index}>
                          {item.name}
                        </Option>
                      ))}
                    </Select>
                    <Button
                      type="primary"
                      style={{ marginTop: "0.5rem" }}
                      onClick={handleSubmitTypeDetail}
                    >
                      เปลี่ยน
                    </Button>
                  </Modal>
                  {/**================================== */}
                </div>
              </div>
            </div>
          </div>
          {/*<div className="col-lg-1"></div>*/}
        </div>
      </div>
    </>
  );
};

export default Question;
