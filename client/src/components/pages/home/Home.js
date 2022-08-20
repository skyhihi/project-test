import React from "react";
//import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./home.css";
import Image1 from "../../assets/home-zoom.svg";
//import Bg1 from "../../assets/home-layered-waves2.svg";

const Home = () => {
  return (
    <>
      <div className="home__container">
        {/** <img src={Bg1} alt="" />*/}
        <div className="home__content">
          <img src={Image1} alt="" />
          <p className="home__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus mollitia ea, eaque enim illum facere. Tempora, illum
            nesciunt labore repellendus, assumenda sunt maiores veritatis sed
            error maxime dolores, minima optio.
          </p>
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
    </>
  );
};

export default Home;
