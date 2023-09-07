import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import Container from "../../components/Container"

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"shopping Policy"} />
      <BreadCrumb title="shopping Policy" />
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

export default ShippingPolicy
