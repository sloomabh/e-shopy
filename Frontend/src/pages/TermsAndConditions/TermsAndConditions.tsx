import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
//import { Link } from "react-router-dom"
import Container from "../../components/Container"
const TermsAndConditions = () => {
  return (
    <>
      <Meta title={"Terms And Conditions"} />
      <BreadCrumb title="Terms And Conditions" />
      <Container classI="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default TermsAndConditions
