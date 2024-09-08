import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Chatbot from "./components/Chatbot/Chatbot.jsx";
import ContactUs from "./components/Contact/Contact.jsx";
import Services from "./components/Services/Services.jsx";
import ResourceCorner from "./components/ResourceCorner/ResourceCorner.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/SignUp/SignUp.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="resource_corner" element={<ResourceCorner />} />
      <Route path="chatbot" element={<Chatbot />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* If we use React Router, we need to render it like this and It takes a prop through which we provide the path of each page. */}
  </React.StrictMode>
);
