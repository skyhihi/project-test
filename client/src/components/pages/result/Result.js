import React from "react";
import { RadarChart } from "./RadarChart";
import "./result.css";

const Result = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 result__chart-card">
            <div className="result__chart-ch">
              <RadarChart />
            </div>
          </div>
          <div className="col-lg-6 result__info">
            <div className="card_r box-red">
              <div className="result__info-header">
                <h3>hi</h3>
              </div>
              <div className="result__info-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                explicabo nemo dolores neque ipsum quisquam atque reiciendis
                voluptas, quod doloremque assumenda cumque magni quo vero, iure
                suscipit magnam debitis vitae.
              </div>
            </div>

            <div className="card_r box-blue">
              <div className="result__info-header">
                <h3>hi</h3>
              </div>
              <div className="result__info-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                explicabo nemo dolores neque ipsum quisquam atque reiciendis
                voluptas, quod doloremque assumenda cumque magni quo vero, iure
                suscipit magnam debitis vitae.
              </div>
            </div>

            <div className="card_r box-red">
              <div className="result__info-header">
                <h3>hi</h3>
              </div>
              <div className="result__info-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                explicabo nemo dolores neque ipsum quisquam atque reiciendis
                voluptas, quod doloremque assumenda cumque magni quo vero, iure
                suscipit magnam debitis vitae.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
