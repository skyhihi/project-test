import React, { useEffect, useState } from "react";
import { RadarChart } from "./RadarChart";
import "./result.css";
import { useLocation, useNavigate } from "react-router-dom";
import { type as typeData } from "../../functions/type";
import { details_type } from "../../functions/details";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  if (state) {
    var data = state.data;
    console.log(data);
    console.log(state.sum);
  }
  const [listType, setListType] = useState([]);
  const [listDetailType, setListDetailType] = useState([]);

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

  console.log(data);

  return (
    <>
      <div className="container-fuild result__page">
        <div className="row">
          <div className="col-lg-6 result__chart-card">
            <div className="result__chart-ch">
              <RadarChart data={data} />
            </div>
          </div>
          <div className="col-lg-6 result__info container">
            <p>กรุณาถ่ายภาพหน้าจอแสดงผลเพื่อใช้ในการเรียนการสอนต่อไป</p>
            {listType.map((item, index) => (
              <>
                <div className="card_r box-result">
                  <div className="result__info-header">{item.name}</div>

                  {listDetailType.map((it, index) => (
                    <>
                      {it.details_t_id === item.type_id ? (
                        <>
                          <div className="result__info-title">{it.title} :</div>
                          <p>{it.details}</p>
                        </>
                      ) : (
                        <></>
                      )}
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
