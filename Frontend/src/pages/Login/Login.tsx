import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"

import { Link, useNavigate } from "react-router-dom"
import Container from "../../components/Container"
import CostumInput from "../../components/CostumInput"
import { useFormik } from "formik"
import * as yup from "yup"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { loginUser } from "../../features/user/userSlice"

let loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),

  password: yup.string().required("Password is Required"),
})

const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const authState = useAppSelector((state) => state?.auth)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values))
      dispatch(loginUser(values))

      if (authState.isSuccess) {
        navigate("/")
      }
    },
  })

  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container classI="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card ">
              <h3 className="text-center mb-3">Login</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CostumInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChng={formik.handleChange("email")}
                  onBlr={formik.handleBlur("email")}
                />
                <div className="error mt-2">
                  {formik.touched.email && formik.errors.email}
                </div>

                <CostumInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChng={formik.handleChange("password")}
                  onBlr={formik.handleBlur("password")}
                />
                <div className="error mt-2">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  <Link to="/forgot-password">Forgot Password</Link>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/signup" className="button signup">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login
