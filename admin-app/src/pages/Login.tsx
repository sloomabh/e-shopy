import React, { useEffect } from "react"
import CustomInput from "../components/CustomInput"
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import { useFormik } from "formik"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { login } from "../features/auth/authSlice"

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
})

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values))
    },
  })

  const { user, isError, isSuccess, isLoading, message } = useAppSelector(
    (state) => state.auth,
  )
  /*
  useEffect(() => {
    if (user || isSuccess) {
      navigate("admin")
    } else {
      alert("nooooo")
      navigate("")
    }
  }, [user, isError, isSuccess, isLoading])
*/
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
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="email"
            name="email"
            label="Email Address"
            i_id="email"
            onChng={formik.handleChange("email")}
            onBlr={formik.handleBlur("email")}
            val={formik.values.email}
          />
          <div className="error mt-2">
            {formik.touched.email && formik.errors.email}
          </div>
          <CustomInput
            type="password"
            name="password"
            label="Password"
            i_id="pass"
            onChng={formik.handleChange("password")}
            onBlr={formik.handleBlur("password")}
            val={formik.values.password}
          />
          <div className="error mt-2">
            {formik.touched.password && formik.errors.password}
          </div>
          <div className="mb-3 text-end">
            <Link to="forgot-password" className="">
              Forgot Password?
            </Link>
          </div>
          <button
            className="border-0 px-3 py-2 mt-3 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
