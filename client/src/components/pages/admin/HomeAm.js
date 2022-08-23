import React from "react";
import MenuAdmin from "./MenuAdmin";
import { Routes, Route } from "react-router-dom";
import Question from "./questionAd/Question";
const HomeAm = () => {
  return (
    <>
      <MenuAdmin />

      <div className="admin__content" style={{ paddingLeft: "200px" }}>
        <div className="row">
          <div className="col-lg-9">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            laborum nam voluptatibus. Molestiae cum necessitatibus quaerat
            excepturi soluta rerum quis minima assumenda commodi incidunt
            pariatur laborum, neque unde non dolorem?
            <Routes>
              <Route path="/admin/question" element={<Question />} />
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
