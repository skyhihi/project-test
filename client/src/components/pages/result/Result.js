import React, { useEffect, useState } from "react";
import { RadarChart } from "./RadarChart";
import "./result.css";
import { useLocation, useNavigate } from "react-router-dom";
import { type as typeData } from "../../functions/type";
import { details_type } from "../../functions/details";
import { readAnsRS } from "../../functions/ans_result";
import { Alert, Modal } from "antd";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);

  if (state) {
    var data = state.data;
    //console.log(data);
    var sum = state.sum;
    var sumD = state.sum;
    //console.log(state.sum);
  }

  const [listType, setListType] = useState([]);
  const [listDetailType, setListDetailType] = useState([]);
  const [listAns, setListAns] = useState([]);

  const loadData = () => {
    details_type()
      .then((res) => {
        setListDetailType(res.data);
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

    readAnsRS()
      .then((res) => {
        setListAns(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    //code

    if (!state) {
      navigate("/test");
    }
    loadData();

    // eslint-disable-next-line
  }, []);
  //const [data, setData] = useState();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  sumD.sort((a, b) => a.sumD > b.sumD);
  console.log(sumD);

  console.log(data);
  console.log(sum);
  return (
    <>
      <Modal
        title="สำคัญ!"
        type="warning"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <b>Email ของท่านอาจอยู่ในจดหมายขยะ</b>
        <br />
        <p> กรุณาถ่ายภาพหน้าจอแสดงผลเพื่อใช้ในการเรียนการสอนต่อไป</p>
      </Modal>
      <div className="container-fuild result__page">
        <div className="row">
          <div className="col-lg-6 result__chart-card">
            <div className="result__chart-ch">
              <RadarChart data={sum} />
            </div>
          </div>
          <div className="col-lg-6 result__info container">
            {listType.map((item, index) => (
              <>
                <div className="card_r box-result">
                  <div className="result__info-header">{item.name}</div>

                  {listDetailType.map((it, index) => (
                    <>
                      {sumD.map((i, index) => (
                        <>
                          <p>{sumD},</p>
                          {it.details_t_id === item.type_id ? (
                            <>
                              {/*
                               */}
                              <div className="result__info-title">
                                {it.title}:
                              </div>
                              <p>{it.details}</p>
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      ))}
                    </>
                  ))}
                </div>
              </>
            ))}
            {/**============================================ */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
