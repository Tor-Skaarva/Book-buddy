/* TODO - add your code to create a functional React component that renders a registration form */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRegisterMutation } from "../components/Slicers/AuthSlice";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [register, { isLoading, isError, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!agree) {
      alert("Please agree to the Terms of Service.");
      return;
    }

    try {
      const res = await register({ firstname: name, email, password }).unwrap();
      localStorage.setItem("token", res.token);
      navigate("/user/me");
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          id="form3Example1c"
                          className="form-control"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="form-group mb-4">
                        <input
                          type="email"
                          id="form3Example3c"
                          className="form-control"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-group mb-4">
                        <input
                          type="password"
                          id="form3Example4c"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="form-group mb-4">
                        <input
                          type="password"
                          id="form3Example4cd"
                          className="form-control"
                          placeholder="Repeat your password"
                          value={repeatPassword}
                          onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          id="form2Example3c"
                          checked={agree}
                          onChange={(e) => setAgree(e.target.checked)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3c"
                        >
                          I agree to the <a href="#!">Terms of Service</a>
                        </label>
                      </div>

                      {isError && (
                        <div className="alert alert-danger">
                          {error?.data?.message || "Registration failed"}
                        </div>
                      )}

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          disabled={isLoading}
                        >
                          {isLoading ? "Registering..." : "Register"}
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-xl-7 d-flex align-items-center order-lg-2">
                    <img
                      src="./src/assets/bookBuddy1.jpg"
                      className="reg-img"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
