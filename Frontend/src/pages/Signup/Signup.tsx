import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import "./signup-style.css"
import Container from "../../components/Container"
import CostumInput from "../../components/CostumInput"

const Signup = () => {
  return (
    <>
      <Meta title={"Signup"} />
      <BreadCrumb title="Signup" />
      <Container classI="signup-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card ">
              <h3 className="text-center mb-3">Create Account</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CostumInput type="text" name="name" placeholder="Name" />
                <CostumInput
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                />
                <CostumInput type="email" name="email" placeholder="Email" />
                <CostumInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

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
