import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Phones from "./Components/Phones.jsx";
import Root from "./Components/Root.jsx";
import SinglePhone from "./Components/SinglePhone.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/phones",
        element: <Phones></Phones>,
        loader : ()=> fetch("http://localhost:5000/phones")
      },
      {
        path : "/phone/:id",
        element : <SinglePhone></SinglePhone>,
        loader : ({params}) => fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
