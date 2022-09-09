import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import MenuAdmin from "../MenuAdmin";
import { details_ID } from "../../../functions/details";
import { type as typeData } from "../../../functions/type";
const CreateDetail = () => {
  const [details, setDetails] = useState([]);
  const [listType, setListType] = useState([]);

  const param = useParams();

  const loadData = (id) => {
    details_ID(id)
      .then((res) => {
        setDetails(res.data);
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
    loadData(param.id);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <MenuAdmin />
      <div style={{ paddingLeft: "200px" }}>
        <div className="row">
          <div className="col-lg-12">hello crate details</div>

          {listType.map((item, index) => (
            <>
              {
                // eslint-disable-next-line
                item.type_id == param.id ? (
                  <>
                    <h1>
                      <p>{item.name}</p>
                    </h1>
                  </>
                ) : (
                  <></>
                )
              }
              {details.map((itemT, index) => (
                <>
                  {itemT.type_id === item.type_id ? (
                    <>
                      <p>{itemT.title}</p>
                      <p>{itemT.details}</p>
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
    </>
  );
};

export default CreateDetail;
