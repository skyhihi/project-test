import React, { useState } from "react";
import "./radioBtn.css";
import { Radio } from "antd";

const RadioBtn = () => {
  const [value, setValue] = useState();

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <div className="normal">
        <center>
          <Radio.Group
            buttonStyle="solid"
            size="large"
            onChange={onChange}
            value={value}
            //style={{ marginTop: "20px" }}
          >
            <Radio.Button value="a">น้อยที่สุด</Radio.Button>
            <Radio.Button value="b">น้อย</Radio.Button>
            <Radio.Button value="c">ปานกลาง</Radio.Button>
            <Radio.Button value="d">มาก</Radio.Button>
            <Radio.Button value="e">มากที่สุด</Radio.Button>
          </Radio.Group>
        </center>
        <br />

        <hr />
      </div>
      <div className="mobile-btn">
        <center>
          <Radio.Group
            buttonStyle="solid"
            size="small"
            onChange={onChange}
            value={value}
            style={{ marginTop: "20px" }}
          >
            <Radio.Button value="a">น้อยที่สุด</Radio.Button>
            <Radio.Button value="b">น้อย</Radio.Button>
            <Radio.Button value="c">ปานกลาง</Radio.Button>
            <Radio.Button value="d">มาก</Radio.Button>
            <Radio.Button value="e">มากที่สุด</Radio.Button>
          </Radio.Group>
        </center>
        <br />
        <hr />
      </div>
    </div>
  );
};

export default RadioBtn;
