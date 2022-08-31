import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/antd.min.css";
import { BrowserRouter } from "react-router-dom";

import { legacy_createStore as createStore } from "redux";
//import { createStore } from "redux";
//Redux
import { Provider } from "react-redux";
//import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./components/reducers/index";

//import 'antd/dist/antd.css'
const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
