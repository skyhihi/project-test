import React, { useState, useEffect } from "react";
import "./types.css";
import { type as typeData } from "../../functions/type";
import { details_type } from "../../functions/details";

const Type = () => {
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
    loadData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            {listType.map((item, index) => (
              <>
                <div className="typeBox">
                  <div className="type-icon">
                    <span>
                      <i className="bi bi-info-circle"></i>
                      <h3 className="type__name">{item.name}</h3>
                    </span>
                  </div>
                  {listDetailType.map((it, index) => (
                    <>
                      {it.details_t_id === item.type_id ? (
                        <>
                          <div className="type__content">
                            <p className="description_header">{it.title} :</p>
                            <p className="description">{it.details}</p>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </div>
              </>
            ))}
            {/**
            <div className="typeBox">
              <div className="type-icon">
                <span>
                  <i className="fa fa-helmet-safety"></i>
                  <h3 className="type__name">วิศวกร</h3>
                </span>
              </div>
              <div className="type__content">
                <p className="description_header">เงินเดือน :</p>
                <p className="description">
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                  quaerat fugit quas veniam perferendis repudiandae sequi,
                  dolore quisquam illum. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Vel tempora impedit saepe rerum officiis
                  cupiditate itaque exercitationem explicabo commodi quae quis
                  perspiciatis excepturi est, reprehenderit dignissimos non
                  sequi unde ab!
                </p>

                <p className="description_header">รายละเอียด :</p>
                <p className="description">
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
                  quaerat fugit quas veniam perferendis repudiandae sequi,
                  dolore quisquam illum. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Vel tempora impedit saepe rerum officiis
                  cupiditate itaque exercitationem explicabo commodi quae quis
                  perspiciatis excepturi est, reprehenderit dignissimos non
                  sequi unde ab!
                </p>
              </div>
            </div> */}
          </div>

          <div className="col-lg-1"></div>
        </div>
      </div>
    </>
  );
};

export default Type;
