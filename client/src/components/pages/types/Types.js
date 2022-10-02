import React, { useState, useEffect } from "react";
import "./types.css";
import { type as typeData } from "../../functions/type";
import { details_type } from "../../functions/details";
import { Skeleton } from "antd";

const Type = () => {
  const [listType, setListType] = useState([]);
  const [listDetailType, setListDetailType] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    await details_type()
      .then((res) => {
        setListDetailType(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    await typeData()
      .then((res) => {
        setListType(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            {loading ? (
              <>
                <Skeleton active />
              </>
            ) : (
              <></>
            )}

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
          </div>
        </div>
      </div>
    </>
  );
};

export default Type;
