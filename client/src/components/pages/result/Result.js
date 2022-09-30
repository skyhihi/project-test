import React, { useEffect, useState } from "react";
import { RadarChart } from "./RadarChart";
import "./result.css";
import { useLocation, useNavigate } from "react-router-dom";
import { type as typeData } from "../../functions/type";
import { details_type } from "../../functions/details";
import { readAnsRS } from "../../functions/ans_result";
import { Modal, Skeleton } from "antd";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  if (state) {
    var data = state.data;
    //console.log(data);
    var sum = state.sum;
    //console.log(state.sum);
    //console.log("data", data);
  }

  const [listType, setListType] = useState([]);
  const [listDetailType, setListDetailType] = useState([]);
  const [listAns, setListAns] = useState([]);

  //console.log(listAns);

  const loadData = async () => {
    await details_type()
      .then((res) => {
        setListDetailType(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });

    await typeData()
      .then((res) => {
        setListType(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });

    await readAnsRS()
      .then((res) => {
        setListAns(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
    setLoading(false);
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
  //console.log(data);
  //console.log(sum);
  return (
    <>
      {loading ? (
        <>
          <Skeleton active />
        </>
      ) : (
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
                {data.map((item, index) => (
                  <>
                    {listType.map((itemT, index) => (
                      <>
                        {item.id === itemT.type_id ? (
                          <>
                            <div className="card_r box-result">
                              <div className="result__info-header">
                                {item.name} : {item.value}
                              </div>

                              {listDetailType.map((it, index) => (
                                <>
                                  {it.details_t_id === itemT.type_id ? (
                                    <>
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
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ))}
                  </>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Result;
