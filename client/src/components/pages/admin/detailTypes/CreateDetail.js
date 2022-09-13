import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import MenuAdmin from "../MenuAdmin";
import {
  details_ID,
  editTitle_type,
  editDetail_type,
} from "../../../functions/details";
import { type as typeData } from "../../../functions/type";
import { toast } from "react-toastify";
import { Button, Input } from "antd";
import { FontSizeOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const CreateDetail = () => {
  const [details, setDetails] = useState([]);
  const [listType, setListType] = useState([]);

  const param = useParams();

  const loadData = (id) => {
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
  };

  useEffect(() => {
    loadData(param.id);
    // eslint-disable-next-line
  }, []);

  const onClick = (e) => {
    e.preventDefault(); //
    console.log(value);

    editTitle_type(value)
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.status);
        loadData();
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });

    editDetail_type(value)
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.status);
        loadData();
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  };

  const [value, setValue] = useState({
    details: "",
    title: "",
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

          {listType.map((item, index) => (
            <>
              {
                // eslint-disable-next-line
                item.type_id == param.id ? (
                  <>
                    <h1>
                      <p>{item.name}</p>
                    </h1>
                    <tr>
                      <label> Title : </label>
                      <td>
                        <Input
                          type="text"
                          name="title"
                          //size="large"
                          placeholder=" edit title"
                          allowClear
                          onChange={onChangeTitle}
                          prefix={
                            <FontSizeOutlined className="site-form-item-icon" />
                          }
                        />
                      </td>
                    </tr>
                    <tr>
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

                      <Button
                        type="primary"
                        style={{ marginTop: "0.5rem" }}
                        onClick={onClick}
                      >
                        เปลี่ยน
                      </Button>
                    </tr>
                  </>
                ) : (
                  <></>
                )
              }
              <div className="card-body">
                <div className="ques__body">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">no.</th>
                        <th scope="col">Title</th>
                        <th scope="col">Details</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {details.map((itemT, index) => (
                        <tr key={index}>
                          <>
                            <th scope="col"></th>
                            <th scope="row">{index + 1}</th>{" "}
                            {itemT.type_id === item.type_id ? (
                              <>
                                <td>{itemT.title}</td>
                                <td>{itemT.details}</td>
                                <td>
                                  <button
                                    className="btn btn-warning btn-sm me-3 "
                                    name="edit"
                                    /*onClick={() =>
                                  showModal(
                                    item.type_id,
                                    item.name,
                                    item.type_sym
                                  )
                                }*/
                                  >
                                    แก้ไข
                                  </button>
                                  <button
                                    className="btn btn-danger btn-sm "
                                    type="text"
                                    style={{ marginLeft: "1rem" }}
                                  >
                                    ลบ
                                  </button>
                                </td>
                              </>
                            ) : (
                              <></>
                            )}
                          </>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CreateDetail;
