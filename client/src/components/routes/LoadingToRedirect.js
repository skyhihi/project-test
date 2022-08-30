import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      <h1>No Permisssion, redirect in {count}</h1>
    </div>
  );
};

export default LoadingToRedirect;
