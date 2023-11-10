import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import { Link } from "react-router-dom"
import Container from "../../components/Container"
import CostumInput from "../../components/CostumInput"
import { useFormik } from "formik"
import * as yup from "yup"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { forgotPasswordToken } from "../../features/user/userSlice"

let emailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
})

const ForgotPassword = () => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      //  alert(JSON.stringify(values))
      dispatch(forgotPasswordToken(values))
    },
  })

  return (
    <>
      <Meta title={"ForgotPassword"} />
      <BreadCrumb title="Forgot Password" />
      <Container classI="forgot-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card ">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center my-2 mb-3">
                we will send you an email to rest your password
              </p>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CostumInput
                  type="email"
                  name="email"
                  placeholder="email"
                  value={formik.values.email}
                  onChng={formik.handleChange("email")}
                  onBlr={formik.handleBlur("email")}
                />
                <div className="error mt-2">
                  {formik.touched.email && formik.errors.email}
                </div>
                <div>
                  <div className="mt-3 d-flex flex-column justify-content-center align-items-center gap-15">
                    <button type="submit" className="button border-0">
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

export default ForgotPassword
