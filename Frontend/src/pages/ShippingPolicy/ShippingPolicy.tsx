import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"shopping Policy"} />
      <BreadCrumb title="shopping Policy" />
      <div className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShippingPolicy
