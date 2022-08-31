import React from "react";
import MenuAdmin from "./MenuAdmin";
import { Routes, Route } from "react-router-dom";
import Question from "./questionAd/Question";
import General from "./generalInformation/General";

import { useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
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
  return (
    <>
      <MenuAdmin />

      <div className="admin__content" style={{ paddingLeft: "200px" }}>
        <div className="row">
          <div className="col-lg-9">
            {user && (
              <>
                <button className="btn btn-sm bg-danger" onClick={logout}>
                  LOGOUT
                </button>
              </>
            )}
            {!user && (
              <>
                <p>login now</p>
              </>
            )}
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            laborum nam voluptatibus. Molestiae cum necessitatibus quaerat
            excepturi soluta rerum quis minima assumenda commodi incidunt
            pariatur laborum, neque unde non dolorem?
            <Routes>
              <Route path="/admin/question" element={<Question />} />
              <Route path="/admin/genral" element={<General />} />
            </Routes>
          </div>
          <div className="col-lg-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            impedit atque consequatur unde nihil doloribus excepturi quis
            architecto, facere corrupti fuga reiciendis cum inventore porro
            temporibus amet maiores repudiandae incidunt!
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAm;
