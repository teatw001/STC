// import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import App from "./App.tsx";
import "./index.css";
import { store } from "./store/store.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
