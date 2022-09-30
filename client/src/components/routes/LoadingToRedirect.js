import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "antd";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000); //หลังปีกกาคือระยะเวลา 1000 = 1วินาที

    //redirect ถ้ามี warning ให้ใส่ eslint..
    count === 0 && navigate("/");
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div>
      <Alert
        message={`ไม่ได้รับอนุญาตให้เข้าถึง กลับไปหน้าหลักใน ` + count}
        description=""
        type="error"
        showIcon
        style={{ fontSize: "20px", margin: "2rem", padding: "2rem" }}
      />
    </div>
  );
};

export default LoadingToRedirect;
