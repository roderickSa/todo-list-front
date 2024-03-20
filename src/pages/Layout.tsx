import { Link, Outlet, useNavigate } from "react-router-dom";
import { getFromLocalstorage, removeKeyOfLocalstorage } from "../utils";
import { FormEvent } from "react";
import { client } from "../axios/client";
import { HttpErrorResponse } from "../types";

const Layout = () => {
  const access_token = getFromLocalstorage("access_token");

  const navigate = useNavigate();

  const signOut = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await client.post("/api/auth/logout", undefined, {
        headers: {
          Authorization: "bearer " + access_token,
        },
      });

      removeKeyOfLocalstorage("access_token");

      navigate("/login");
    } catch (error) {
      if ((error as HttpErrorResponse).response.status === 401) {
        removeKeyOfLocalstorage("access_token");

        navigate("/login");
      }
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active ${access_token ? "d-none" : ""}`}
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <form onSubmit={signOut}>
            <button
              type="submit"
              className={`btn btn-danger mb-2 ${!access_token ? "d-none" : ""}`}
            >
              Sign Out
            </button>
          </form>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
