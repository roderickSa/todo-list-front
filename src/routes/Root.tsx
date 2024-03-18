import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import { useEffect } from "react";

const Root = () => {
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    if (!access_token) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [navigate, access_token]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {access_token && (
          <>
            <Route index element={<Home />} />
            <Route path="*" element={<ErrorPage />} />:
          </>
        )}
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Root;
