import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Root/Home/Home";
import Applied from "./Components/Applied/Applied";
import Blogs from "./Components/Blogs/Blogs";
import Error from "./Components/Error/Error";
import JobDetails from "./Components/Job Details/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>, 
    errorElement : <Error></Error>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/applied",
        element : <Applied></Applied>,
        loader : ()=> fetch("/jobs.json") // Warning!!! -- Not a good way
      },
      {
        path : "/blogs",
        element : <Blogs></Blogs>
      },
      {
        path : "/job/:id",
        element : <JobDetails></JobDetails>,
        loader : ()=> fetch("/jobs.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
