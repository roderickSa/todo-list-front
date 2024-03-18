import { ChangeEvent, FormEvent, useState } from "react";
import { client } from "../axios/client";
import { useNavigate } from "react-router-dom";

import { HttpErrorResponse } from "../types/index";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [name]: value });
  };

  const signIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await client.post("/api/auth/login", form);

      localStorage.setItem(
        "access_token",
        JSON.stringify(response.data.access_token)
      );

      navigate("/");
    } catch (error) {
      console.log((error as HttpErrorResponse).response.data?.error);
    }
  };

  return (
    <div className="container" style={{ padding: "10rem 0" }}>
      <div className="row justify-content-center">
        <div
          className="col-md-7 col-lg-5"
          style={{ background: "rgba(0, 0, 0, 0.1)" }}
        >
          <div className="login-wrap p-4 p-md-5">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa fa-user-o"></span>
            </div>
            <h3 className="text-center mb-4">Sign In</h3>
            <form action="#" className="login-form" onSubmit={signIn}>
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control rounded-left"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group d-flex mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control rounded-left"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="form-control btn btn-primary rounded submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
