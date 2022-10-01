import React from "react";
import MenuAdmin from "./MenuAdmin";
import { Routes, Route } from "react-router-dom";
import Question from "./questionAd/Question";
import General from "./generalInformation/General";
import { message, Popconfirm } from "antd";
import { listUsers } from "../../functions/user";
import { deleteUsers } from "../../functions/user";

import { useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

//useSelector คือการเข้าถึง store

const HomeAm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => ({ ...state }));
  //console.log("user navbar " + user.username);

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/");
  };

  const addAdmin = () => {
    navigate("/register");
  };

  const [list, setList] = useState([]);

  const loadData = () => {
    listUsers()
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  //---------Pop delete------------//
  const cancel = () => {
    //console.log(e);
    message.error("This account is not deleted.");
  };
  const buttonDelete = (id) => {
    console.log(id);

    deleteUsers(user.token, id)
      .then((res) => {
        toast.success(res.data.status);
        loadData();
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  return (
    <>
      <MenuAdmin />

      <div className="admin__content" style={{ paddingLeft: "200px" }}>
        <div className="row">
          <div className="row">
            {user && (
              <>
                <div className="col-10" style={{ marginLeft: "1rem" }}>
                  <h4>Hello {user.username}!</h4>
                  <button
                    className="btn btn-sm btn-info justify-content-end"
                    onClick={addAdmin}
                  >
                    <i class="bi bi-person-plus"></i> Add Admin
                  </button>
                </div>
                <div className=" col-1 justify-content-end">
                  <button
                    className="btn btn-sm bg-danger "
                    type="text"
                    onClick={logout}
                  >
                    <i class="bi bi-door-closed"></i> LOGOUT
                  </button>
                </div>
                <br />
                <table className="table " style={{ marginLeft: "2rem" }}>
                  {list.map((item, index) => (
                    <>
                      <br />
                      <br />

                      <thead></thead>
                      <tbody>
                        <tr>
                          <td style={{ marginLeft: "2rem" }}>
                            <h5>{item.name}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
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
                          </td>
                        </tr>
                      </tbody>
                    </>
                  ))}
                </table>
                {/*<div className="card col-12">
                  <div className="card-body ">
                    <table className="table table-striped">
                      <thead>
                        <tr>List Admin</tr>
                        
                      </thead>
                      <tbody>
                        <tr></tr>
                      </tbody>
                    </table>
                  </div>
            </div>*/}
              </>
            )}
            {!user && <>Please Login </>}
            <br />

            <Routes>
              <Route path="/admin/question" element={<Question />} />
              <Route path="/admin/general" element={<General />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAm;
