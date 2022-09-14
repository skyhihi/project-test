import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import MenuAdmin from "../MenuAdmin";
import {
  details_ID,
  createDetail_type,
  editTitle_type,
  editDetail_type,
  deleteDetail_type,
} from "../../../functions/details";
import { type as typeData } from "../../../functions/type";
import { toast } from "react-toastify";
import { Button, Input, Modal, Popconfirm, message } from "antd";
import { FontSizeOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const CreateDetail = () => {
  const [details, setDetails] = useState([]);
  const [listType, setListType] = useState([]);

  const param = useParams();
  const type_id = parseInt(param.id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (detail_id, title, details) => {
    setIsModalOpen(true);
    setEditTitle({ ...editTitle, detail_id: detail_id });
    setTitleOld(title);
    setEditDetails({
      ...editDetails,
      detail_id: detail_id,
    });
    setDetailsOld(details);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangeTitle = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setEditTitle({ ...editTitle, [e.target.name]: e.target.value });
  };

  const handleChangeDetail = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setEditDetails({ ...editDetails, [e.target.name]: e.target.value });
  };

  const [originalTitle, setTitleOld] = useState();
  const [originalDetails, setDetailsOld] = useState();

  const [editTitle, setEditTitle] = useState({
    detail_id: "",
    title: "",
  });

  const [editDetails, setEditDetails] = useState({
    detail_id: "",
    details: "",
  });

  const SubmitTitleChange = () => {
    //console.log(editTitle);

    editTitle_type(editTitle)
      .then((res) => {
        //console.log(res.data.status);
        toast.success(res.data.status);
        loadData(type_id);

        setIsModalOpen(false);
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  };

  const SubmitDetailsChange = () => {
    //console.log(editDetails);
    editDetail_type(editDetails)
      .then((res) => {
        //console.log(res.data.status);
        toast.success(res.data.status);
        loadData(type_id);

        setIsModalOpen(false);
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  };

  const loadData = (id) => {
    //console.log(id);
    details_ID(id)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    typeData()
      .then((res) => {
        setListType(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //  createDetail_type()
    //    .then((res) => {
    //      setCreateDetails(res.data);
    //    })
    //   .catch((err) => {
    //      console.log(err);
    //    });
  };

  useEffect(() => {
    loadData(param.id);
    // eslint-disable-next-line
  }, []);

  //-----button press-----//
  const onClick = (e) => {
    e.preventDefault(); //
    console.log(value);

    createDetail_type(value)
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.status);
        loadData(type_id);
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  }; //-----button press-----//

  const buttonDelete = (detail_id) => {
    deleteDetail_type(detail_id)
      .then((res) => {
        toast.success(res.data.status);
        loadData(type_id);
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  const cancel = () => {
    //console.log(e);
    message.error("Message was not deleted");
  };

  const [value, setValue] = useState({
    title: "",
    details: "",
    detail_id: "",
    type_id: param.id,
  });

  const onChangeTitle = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setValue({ ...value, [e.target.name]: e.target.value });
    //console.log(value);
  };
  const onChangeDetails = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setValue({ ...value, [e.target.name]: e.target.value });
    //console.log(value);
  };

  return (
    <>
      <MenuAdmin />
      <div style={{ paddingLeft: "200px" }}>
        <div className="row">
          <div className="col-lg-12"></div>
          <div className="card">
            <br />

            <td>
              {listType.map((item, index) => (
                <>
                  {
                    // eslint-disable-next-line
                    item.type_id == param.id ? (
                      <>
                        <h3 style={{ paddingLeft: "1rem" }}>{item.name}</h3>
                      </>
                    ) : (
                      <></>
                    )
                  }
                </>
              ))}
            </td>

            <div className="row" style={{ paddingLeft: "1rem" }}>
              <div className="col-lg-4">
                <label> Title : </label>
                <br />
                <br />
                <Input
                  type="text"
                  name="title"
                  //size="large"
                  placeholder=" edit title"
                  allowClear
                  onChange={onChangeTitle}
                  prefix={<FontSizeOutlined className="site-form-item-icon" />}
                />
              </div>
              <br />
              <div className="row">
                <div className="col-10">
                  <br />
                  <label> Details : </label>
                  <br />
                  <br />
                  <TextArea
                    name="details"
                    style={{
                      width: "1000px",
                      height: "150px",
                      marginRight: "1.5rem",
                    }}
                    placeholder="insert details"
                    onChange={onChangeDetails}
                  />
                </div>
                <br />
                <div className="row">
                  <div className="col-1">
                    <Button
                      type="primary"
                      style={{ marginTop: "0.5rem" }}
                      onClick={onClick}
                    >
                      <i class="bi bi-plus"></i> เพิ่มรายละเอียด
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="ques__body">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">no.</th>
                      <th scope="col">Title</th>
                      <th scope="col">Details</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>

                  {/**=================body================= */}
                  <tbody>
                    {details.map((itemT, index) => (
                      <>
                        {itemT.type_id === type_id ? (
                          <>
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{itemT.title}</td>
                              <td>{itemT.details}</td>
                              <td>
                                <button
                                  className="btn btn-warning btn-sm me-3 "
                                  name="edit"
                                  onClick={() =>
                                    showModal(
                                      itemT.detail_id,
                                      itemT.title,
                                      itemT.details
                                    )
                                  }
                                >
                                  แก้ไข
                                </button>

                                <Popconfirm
                                  placement="topRight"
                                  title="Are you sure?"
                                  onConfirm={() =>
                                    buttonDelete(itemT.detail_id)
                                  }
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
                              </td>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ))}
                  </tbody>
                </table>

                <Modal
                  title="แก้ไขชื่อหัวข้อ"
                  open={isModalOpen}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <label>
                    <b>หัวข้อ : {originalTitle}</b>
                  </label>
                  <br />
                  <br />
                  <Input
                    type="text"
                    name="title"
                    placeholder={" แก้ไขหัวข้อ"}
                    onChange={handleChangeTitle}
                    prefix={
                      <FontSizeOutlined className="site-form-item-icon" />
                    }
                  />
                  <Button
                    type="primary"
                    style={{ marginTop: "0.5rem" }}
                    onClick={SubmitTitleChange}
                  >
                    เปลี่ยน
                  </Button>
                  <br />
                  <br />
                  <hr />

                  <label>
                    <b>รายละเอียด : {originalDetails}</b>
                  </label>
                  <br />
                  <br />
                  <Input
                    type="text"
                    name="details" //ควรเป็นชื่อเดียวกันกับในuseState
                    placeholder={" แก้ไขรายละเอียด"}
                    onChange={handleChangeDetail}
                    prefix={
                      <FontSizeOutlined className="site-form-item-icon" />
                    }
                  />
                  <Button
                    type="primary"
                    style={{ marginTop: "0.5rem" }}
                    onClick={SubmitDetailsChange}
                  >
                    เปลี่ยน
                  </Button>
                  <br />
                  <br />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateDetail;
