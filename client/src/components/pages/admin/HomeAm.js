import React from "react";
import MenuAdmin from "./MenuAdmin";
import { Routes, Route } from "react-router-dom";
import Question from "./questionAd/Question";
import General from "./generalInformation/General";
import { Table } from "antd";
import { listUsers } from "../../functions/user";

import { useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

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
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
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

  const columns = [{ title: "Username" }];

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
                    Add Admin
                  </button>
                </div>
                <div className=" col-1 justify-content-end">
                  <button
                    className="btn btn-sm bg-danger justify-content-end"
                    onClick={logout}
                  >
                    LOGOUT
                  </button>
                </div>

                <Table
                  columns={columns}
                  dataSource={list.map((item, index) => (
                    <>
                      <p>{item.username}</p>
                    </>
                  ))}
                />
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
