import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import { Link } from "react-router-dom"
const ResetPassword = () => {
  return (
    <>
      <Meta title={"ResetPassword"} />
      <BreadCrumb title="Reset Password" />
      <div className="signup-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card ">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="password"
                    name="confpassword"
                    className="form-control"
                    placeholder="Confirm Password"
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

export default ResetPassword
