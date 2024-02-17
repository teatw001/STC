import * as ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
// import { PersistGate } from "redux-persist/integration/react";
// import { QueryClient, QueryClientProvider } from "react-query";
// import * as React from "react";
// import { Toaster } from "react-hot-toast";
// const queryClient = new QueryClient();
(ReactDOM as any).createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
