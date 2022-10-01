import React from "react";
//import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./home.css";
import { Link } from "react-router-dom";
import Image1 from "../../assets/home-zoom.svg";

const Home = () => {
  return (
    <>
      <div className="home__bg">
        <div className="home__container">
          <div className="home__content">
            <img src={Image1} alt="" />
            <div className="home__text">
              <h3>ยินดีต้อนรับ</h3>
            </div>
            <div className="home__btn">
              <Link to="/test">
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  //icon={<DownloadOutlined />}
                >
                  เริ่มทำแบบประเมิน
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
