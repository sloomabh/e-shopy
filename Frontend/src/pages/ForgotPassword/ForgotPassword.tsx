import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import { Link } from "react-router-dom"
import Container from "../../components/Container"
import CostumInput from "../../components/CostumInput"

const ForgotPassword = () => {
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
              <form action="" className="d-flex flex-column gap-15">
                <CostumInput type="email" name="email" placeholder="email" />

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
      </Container>
    </>
  )
}

export default ForgotPassword
