import React from "react"
import { Link } from "react-router-dom"

import CustomInput from "../components/CustomInput"
const Login = () => {
  return (
    <div
      className="py-5 "
      style={{ background: "#ffd333", minHeight: "100vh" }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <form action="">
          <CustomInput type="email" label="Email Address" i_id="email" />
          <CustomInput type="password" label="Password" i_id="passs" />
          <div className="mb-3 text-end">
            <Link to="forgot-password" className="">
              Forgot Password?
            </Link>
          </div>
          <Link
            to="admin"
            className="border-0 px-3 py-2 mt-3 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
