import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import { Link, useLocation } from "react-router-dom"
import Container from "../../components/Container"
import CostumInput from "../../components/CostumInput"
import { useFormik } from "formik"
import * as yup from "yup"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { resretPasswordToken } from "../../features/user/userSlice"

let passwordsSchema = yup.object().shape({
  password: yup.string().required("password is Required"),
  confpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
})

const ResetPassword = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const gettoken = location.pathname.split("/")[2]
  // console.log(token)

  const formik = useFormik({
    initialValues: {
      password: "",
      confpassword: "",
    },
    validationSchema: passwordsSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values))
      dispatch(
        resretPasswordToken({ token: gettoken, password: values.password }),
        setTimeout(() => {
          navigate
        }, 300),
      )
    },
  })

  return (
    <>
      <Meta title={"ResetPassword"} />
      <BreadCrumb title="Reset Password" />
      <Container classI="signup-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card ">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
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
                <CostumInput
                  type="password"
                  name="confpassword"
                  placeholder="Confirm Password"
                  value={formik.values.confpassword}
                  onChng={formik.handleChange("confpassword")}
                  onBlr={formik.handleBlur("confpassword")}
                />
                <div className="error mt-2">
                  {formik.touched.confpassword && formik.errors.confpassword}
                </div>

                <div>
                  <div className="mt-3 d-flex flex-column justify-content-center align-items-center gap-15">
                    <button className="button border-0" type="submit">
                      Submit
                    </button>
                    <Link to="/login">Cancel</Link>
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

export default ResetPassword
