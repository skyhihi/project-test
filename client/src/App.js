import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import HeaderApp from "./components/pages/layout/HeaderApp";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Result from "./components/pages/result/Result";
import Register from "./components/pages/register/Register";
import HomeAm from "./components/pages/admin/HomeAm";
import Question from "./components/pages/admin/questionAd/Question";
import DetailTypes from "./components/pages/admin/detailTypes/DetailTypes";
import Types from "./components/pages/types/Types";
import Test from "./components/pages/test/Test";
const { Header, Content } = Layout;

const App = () => (
  <>
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          padding: 0,
        }}
      >
        <HeaderApp />
      </Header>
      <Content
        style={{
          marginTop: 64,
          backgroundColor: "hsl(258, 60%, 99%)",
          padding: "1rem 2rem",
          width: "100vw",
          //height: "100%",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/types" element={<Types />} />
          <Route path="/login" element={<Login />} />

          <Route path="/result" element={<Result />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<Test />} />
          <Route path="/admin" element={<HomeAm />} />
          <Route path="/admin/question" element={<Question />} />
          <Route path="/admin/detail-types" element={<DetailTypes />} />
        </Routes>
      </Content>
    </Layout>
  </>
);

export default App;
