import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import router from "./router.tsx";
import { RouterProvider } from "react-router-dom";
import { firebaseConfig } from "./firebase.ts";
import { initializeApp } from "firebase/app";

// config fire base
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

