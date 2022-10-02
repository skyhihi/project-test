import React from "react";
import MenuAdmin from "./MenuAdmin";
import { message, Popconfirm } from "antd";
import { listUsers, deleteUsers, changeRole } from "../../functions/user";

import { useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Tag, Button, Dropdown, Menu, Space, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";
//useSelector คือการเข้าถึง store

const HomeAm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const roleData = ["admin", "user"];
  const { user } = useSelector((state) => ({ ...state }));
  //console.log("user navbar " + user.username);

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/");
  };
  const menu = (
    <Menu
      items={[
        {
          label: <div onClick={logout}>ออกจากระบบ</div>,
          key: "0",
        },
      ]}
    />
  );
  /*
  const addAdmin = () => {
    navigate("/register");
  };
*/
  const loadData = (authtoken) => {
    listUsers(authtoken)
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData(user.token);
    // eslint-disable-next-line
  }, []);

  //---------Pop delete------------//
  const cancel = () => {
    //console.log(e);
    message.error("This account is not deleted.");
  };
  const buttonDelete = (id) => {
    //console.log(id);

    deleteUsers(user.token, id)
      .then((res) => {
        toast.success(res.data.status);
        loadData();
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  const handleChangeRole = (e, username) => {
    let values = {
      username: username,
      role: e,
    };
    changeRole(user.token, values)
      .then((res) => {
        //console.log(res);
        toast.success(res.data.status);
        loadData(user.token);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
      <MenuAdmin />
      <div className="admin__content" style={{ paddingLeft: "200px" }}>
        <Button type="primary">
          <Dropdown overlay={menu} trigger={["click"]}>
            <p onClick={(e) => e.preventDefault()}>
              <Space>
                {user.username}
                <DownOutlined />
              </Space>
            </p>
          </Dropdown>
        </Button>
        <br />
        <br />
        <div class="card">
          <div class="card-header">ผู้ใช้งาน</div>
          <div class="card-body">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>role</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item, index) => (
                  <>
                    <tr key={index}>
                      <th style={{ fontWeight: "normal" }}>{item.name}</th>
                      <th style={{ fontWeight: "normal" }}>{item.username}</th>
                      <th>
                        {user.role === "admin" ? (
                          <>
                            <Select
                              style={{ width: "35%" }}
                              value={item.role}
                              onChange={(e) =>
                                handleChangeRole(e, item.username)
                              }
                            >
                              {roleData.map((item, index) => (
                                <Select.Option value={item} key={index}>
                                  {item === "user" ? (
                                    <Tag color="green"> {item}</Tag>
                                  ) : (
                                    <Tag color="red">{item}</Tag>
                                  )}
                                </Select.Option>
                              ))}
                            </Select>
                          </>
                        ) : (
                          <>
                            {item.role === "admin" ? (
                              <>
                                <Tag color="red">{item.role}</Tag>
                              </>
                            ) : (
                              <>
                                <Tag color="green">{item.role}</Tag>
                              </>
                            )}
                          </>
                        )}
                      </th>
                      <th>
                        {user.role === "admin" ? (
                          <>
                            <Popconfirm
                              placement="topRight"
                              title="Are you sure?"
                              onConfirm={() => buttonDelete(item.id)}
                              onCancel={cancel}
                              okText="Yes"
                              cancelText="No"
                            >
                              <button
                                className="btn btn-danger btn-sm "
                                type="text"
                              >
                                <i class="bi bi-trash3"></i> Delete
                              </button>
                            </Popconfirm>
                          </>
                        ) : (
                          <></>
                        )}
                      </th>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAm;
