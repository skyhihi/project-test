import React from "react";
//import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./home.css";
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
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                placeat fugiat adipisci ad! Magnam vel labore rem rerum ex
                perspiciatis doloribus eaque, omnis nostrum! Culpa excepturi
                dolores recusandae earum reprehenderit.
              </p>
            </div>
            <div className="home__btn">
              <Button
                type="primary"
                shape="round"
                size="large"
                //icon={<DownloadOutlined />}
              >
                เริ่มทำแบบสอบถาม
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
