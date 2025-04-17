import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLoginMutation } from "../components/Slicers/UserSlice";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      localStorage.setItem("token", res.token);
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };
  function navClick() {
    navigate("/register");
  }
  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {isError && (
          <div className="alert alert-danger">
            {error?.data?.message || "Login failed"}
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
        <div>
          <button onClick={navClick} type="button" className="btn btn-primary">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
