import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import "./signup-style.css"
import Container from "../../components/Container"
import CostumInput from "../../components/CostumInput"
import { useFormik } from "formik"
import * as yup from "yup"

let signUpSchema = yup.object().shape({
  firstname: yup.string().required("First Name is Required"),

  lastName: yup.string().required("Last Name is Required"),

  mobile: yup.string().required("Mobile is Required"),

  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),

  password: yup.string().required("Password is Required"),
})

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <Meta title={"Signup"} />
      <BreadCrumb title="Signup" />
      <Container classI="signup-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card ">
              <h3 className="text-center mb-3">Create Account</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CostumInput
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChng={formik.handleChange("firstname")}
                  onBlr={formik.handleBlur("firstname")}
                />
                <div className="error mt-2">
                  {formik.touched.firstName && formik.errors.firstName}
                </div>

                <CostumInput
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formik.values.lastName}
                  onChng={formik.handleChange("lastname")}
                  onBlr={formik.handleBlur("lastname")}
                />
                <div className="error mt-2">
                  {formik.touched.lastName && formik.errors.lastName}
                </div>

                <CostumInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formik.values.mobile}
                  onChng={formik.handleChange("mobile")}
                  onBlr={formik.handleBlur("mobile")}
                />
                <div className="error mt-2">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>

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
                  <div className="my-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0" type="submit">
                      Submit
                    </button>
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

export default Signup
