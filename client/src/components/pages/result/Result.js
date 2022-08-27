import React from "react";
import { RadarChart } from "./RadarChart";
import "./result.css";

const Result = () => {
  return (
    <>
      <div className="container-fuild">
        <div className="row">
          <div className="col-lg-6 result__chart-card">
            <div className="result__chart-ch">
              <RadarChart />
            </div>
          </div>
          <div className="col-lg-6 result__info container">
            <div className="card_r box-red">
              <div className="result__info-header red">แพทย์</div>
              <div className="result__info-body">
                <div className="result__info-title">เงินเดือน :</div>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                  quaerat fugit quas veniam perferendis repudiandae sequi,
                  dolore quisquam illum. Lorem ipsum dolor sit amet, consectetur
                </p>
                <div className="result__info-title">รายละเอียด :</div>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                  quaerat fugit quas veniam perferendis repudiandae sequi,
                  dolore quisquam illum. Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </div>

            <div className="card_r box-blue">
              <div className="result__info-header blue">อาจารย์แพทย์</div>
              <div className="result__info-body">
                <div className="result__info-title">เงินเดือน :</div>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                  quaerat fugit quas veniam perferendis repudiandae sequi,
                  dolore quisquam illum. Lorem ipsum dolor sit amet, consectetur
                </p>
                <div className="result__info-title">รายละเอียด :</div>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                  quaerat fugit quas veniam perferendis repudiandae sequi,
                  dolore quisquam illum. Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </div>

            <div className="card_r box-red">
              <div className="result__info-header red">นักสาธารณสุข</div>
              <div className="result__info-body">
                <div className="result__info-title">เงินเดือน :</div>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                  quaerat fugit quas veniam perferendis repudiandae sequi,
                  dolore quisquam illum. Lorem ipsum dolor sit amet, consectetur
                </p>
                <div className="result__info-title">รายละเอียด :</div>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                  quaerat fugit quas veniam perferendis repudiandae sequi,
                  dolore quisquam illum. Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </div>

            <div className="card_r box-blue">
              <div className="result__info-header blue">วิศวกร</div>
              <div className="result__info-body">
                <div className="result__info-title">เงินเดือน :</div>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                  quaerat fugit quas veniam perferendis repudiandae sequi,
                  dolore quisquam illum. Lorem ipsum dolor sit amet, consectetur
                </p>
                <div className="result__info-title">รายละเอียด :</div>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                  quaerat fugit quas veniam perferendis repudiandae sequi,
                  dolore quisquam illum. Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </div>

            <div className="card_r box-red">
              <div className="result__info-header red">
                นักเทคโนโลยีสารสนเทศ
              </div>
              <div className="result__info-body">
                <div className="result__info-title">เงินเดือน :</div>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                  quaerat fugit quas veniam perferendis repudiandae sequi,
                  dolore quisquam illum. Lorem ipsum dolor sit amet, consectetur
                </p>
                <div className="result__info-title">รายละเอียด :</div>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                  quaerat fugit quas veniam perferendis repudiandae sequi,
                  dolore quisquam illum. Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </div>

            <div className="card_r box-blue">
              <div className="result__info-header blue">
                นักการตลาดการจัดการ
              </div>
              <div className="result__info-body">
                <div className="result__info-title">เงินเดือน :</div>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                  quaerat fugit quas veniam perferendis repudiandae sequi,
                  dolore quisquam illum. Lorem ipsum dolor sit amet, consectetur
                </p>
                <div className="result__info-title">รายละเอียด :</div>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                  quaerat fugit quas veniam perferendis repudiandae sequi,
                  dolore quisquam illum. Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
