import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const UserRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));

  return user && user.token ? children : <LoadingToRedirect />;
  // เครื่องหมายคำถามคือถ้ามี
  // เครื่องหมาย : คือถ้าไม่มี
};

export default UserRoute;
