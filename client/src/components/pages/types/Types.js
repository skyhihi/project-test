import React, { useState,useEffect } from "react";
import "./types.css";
//import { type } from "../../functions/type";
import { details_type } from "../../functions/details";


const Type = () => {
  const [ShowType, setShowType] = useState([]);
  const loadData = () => {
    details_type()
      .then((res) => {
        setShowType(res.data);
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
            <div className="typeBox">
              {ShowType.map((item) => (
                <>
              <div className="type-icon">
                <span>
                  <i className="fa fa-helmet-safety"></i>
                  <h3 className="type__name">{item.name}</h3>
                </span>
              </div>
              
              {/** <h3 className="title">วิศวกร</h3> */}
              <div className="type__content">
                <p className="description_header">{item.title}</p>
                <p className="description">{item.details}</p>
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
                </>
                ))}
            </div>
            {/* ================================== */}
            <div className="typeBox green">
              <div className="type-icon">
                <span>
                  <i className="fa fa-laptop-code"></i>
                  <h3 className="type__name">นักเทคโนโลยีสารสนเทศ</h3>
                </span>
              </div>
              {/** <h3 class="title">นักเทคโนโลยีสารสนเทศ</h3>*/}
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
            </div>
            {/* ================================== */}
            <div className="typeBox blue">
              <div className="type-icon">
                <span>
                  <i className="fa fa-comments-dollar"></i>
                  <h3 className="type__name">นักการตลาดการจัดการ</h3>
                </span>
              </div>
              {/** <h3 class="title">นักการตลาดการจัดการ</h3>*/}
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
            </div>
            {/* ================================== */}
            <div className="typeBox yellow">
              <div className="type-icon">
                <span>
                  <i className="fa fa-school"></i>
                  <h3 className="type__name">นักสาธารณสุข</h3>
                </span>
              </div>
              {/** <h3 class="title">นักการตลาดการจัดการ</h3>*/}
              <div className="type__content">
                <p className="description_header">เงินเดือน :</p>
                <p class="description">
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
            </div>
            {/* ================================== */}
            <div className="typeBox red">
              <div className="type-icon">
                <span>
                  <i className="fa fa-chalkboard-user"></i>
                  <h3 className="type__name">อาจารย์แพทย์</h3>
                </span>
              </div>
              {/** <h3 class="title">นักการตลาดการจัดการ</h3>*/}
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
            </div>
            {/* ================================== */}
            <div className="typeBox navy">
              <div className="type-icon">
                <span>
                  <i className="fa fa-kit-medical"></i>
                  <h3 className="type__name">แพทย์</h3>
                </span>
              </div>
              {/** <h3 class="title">นักการตลาดการจัดการ</h3>*/}
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
            </div>
          </div>

          <div className="col-lg-1"></div>
        </div>
      </div>
     
    </>
   );
};

export default Type;
