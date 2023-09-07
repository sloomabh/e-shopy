import React from "react"
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import "./checkout-style.css"
import { Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi"
import watch from "/watch.jpg"
import Container from "../../components/Container"

const CheckOut = () => {
  const customStyle = {
    ["--bs-breadcrumb-divider" as any]: ">",
  }
  return (
    <>
      <Meta title={"Checkout "} />
      <BreadCrumb title="checkout" />
      <Container classI="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="wesite-name">SalimO TechZone</h3>
              <nav
                style={customStyle as React.CSSProperties}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark total-price ">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item active total-price "
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /<li className="breadcrumb-item active">Shipping</li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item active total-price "
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title">Contact Information</h4>
              <p className="user-details">
                salim ben halima (salimbh@gmail.com)
              </p>
              <h4 className="mb-3">Shipping address</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div
                  className="flex-grow-1
                  "
                >
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div
                  className="flex-grow-1
                  "
                >
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Appartement, Suite,..etc (optional)"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zip-code"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex  justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" /> Return to Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue To shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom  py-4">
              <div className="d-flex gap-10 mb-2 align-items-center">
                <div className=" w-75 d-flex gap-10  border">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "1px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img src={watch} alt="watch" className="img-fluid" />
                  </div>
                  <div>
                    <h5 className="total-price">sdwsdsdd</h5>
                    <p className="total-price">S/ #ABSDC</p>
                  </div>
                </div>
                <div className="flex-grow-1 border">
                  <h5 className=" total">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className=" total ">Subtotal</p>
                <p className=" total-price">$ 980</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 20</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ 1000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CheckOut
