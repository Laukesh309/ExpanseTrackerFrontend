import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./component/App";
import { store } from "./component/Redux/store";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
