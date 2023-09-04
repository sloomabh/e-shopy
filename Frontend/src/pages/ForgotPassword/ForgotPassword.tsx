import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import { Link } from "react-router-dom"

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"ForgotPassword"} />
      <BreadCrumb title="Forgot Password" />
      <div className="forgot-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card ">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center my-2 mb-3">
                we will send you an email to rest your password
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="form-control"
                  />
                </div>

                <div>
                  <div className="mt-3 d-flex flex-column justify-content-center align-items-center gap-15">
                    <button className="button border-0"> Submit</button>
                    <Link to="/login">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
