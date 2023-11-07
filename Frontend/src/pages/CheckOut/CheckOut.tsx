import React from "react"
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import "./checkout-style.css"
import { Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi"
import watch from "/watch.jpg"
import Container from "../../components/Container"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useState, useEffect } from "react"
import { getUserCart } from "../../features/user/userSlice"
import { useFormik } from "formik"
import * as yup from "yup"

const CheckOut = () => {
  const customStyle = {
    ["--bs-breadcrumb-divider" as any]: ">",
  }

  const dispatch = useAppDispatch()
  const [totalAmount, setTotalAmount] = useState(null)
  const [shippingInfo, setShippingInfo] = useState({})
  useEffect(() => {
    getUserCartFromDb()
  }, [])

  const getUserCartFromDb = () => {
    dispatch(getUserCart())
  }
  const cartState = useAppSelector((state) => state?.auth?.cartProducts)
  console.log(cartState)

  useEffect(() => {
    let sum = 0
    if (cartState) {
      for (let index = 0; index < cartState?.length; index++) {
        sum = sum + cartState[index].quantity * cartState[index].productId.price
        setTotalAmount(sum)
      }
    }
  }, [cartState])

  let shippingSchema = yup.object().shape({
    firstName: yup.string().required("First Name is Required"),
    lastName: yup.string().required("Last Name is Required"),
    address: yup.string().required("address is Required"),
    state: yup.string().required("state is Required"),
    city: yup.string().required("city is Required"),
    country: yup.string().required("country is Required"),
    pincode: yup.string().required("pincode is Required"),
  })

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values))
      // setShippingInfo(values)
      // dispatch(loginUser(values))
    },
  })

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
                onSubmit={formik.handleSubmit}
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange("country")}
                    onBlur={formik.handleBlur("country")}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="" selected disabled>
                      Select Country
                    </option>
                    <option value="Japan">Japan</option>
                    <option value="USA">USA</option>
                    <option value="Germany">Germany</option>
                  </select>
                  <div className="error mt-2">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>
                <div
                  className="flex-grow-1
                  "
                >
                  <input
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                    placeholder="First Name"
                    className="form-control"
                  />
                  <div className="error mt-2">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                </div>
                <div
                  className="flex-grow-1
                  "
                >
                  <input
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                    placeholder="Last Name"
                    className="form-control"
                  />
                  <div className="error mt-2">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                    placeholder="Address"
                    className="form-control"
                  />
                  <div className="error mt-2">
                    {formik.touched.address && formik.errors.address}
                  </div>
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
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                    placeholder="City"
                    className="form-control"
                  />
                  <div className="error mt-2">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange("state")}
                    onBlur={formik.handleBlur("state")}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="" selected disabled>
                      Select State
                    </option>
                    <option value="Tokyo">Tokyo</option>
                    <option value="Berlin">Berlin</option>
                  </select>
                  <div className="error mt-2">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    value={formik.values.pincode}
                    onChange={formik.handleChange("pincode")}
                    onBlur={formik.handleBlur("pincode")}
                    placeholder="Zip-code"
                    className="form-control"
                  />
                  <div className="error mt-2">
                    {formik.touched.pincode && formik.errors.pincode}
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex  justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" /> Return to Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue To shipping
                    </Link>
                    <button className="button" type="submit">
                      Buy Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom  py-4">
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex gap-10 mb-2 align-items-center"
                    >
                      <div className=" w-75 d-flex gap-10  border">
                        <div className="w-25 position-relative">
                          <span
                            style={{ top: "-10px", right: "1px" }}
                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                          >
                            {item?.quantity}
                          </span>
                          <img
                            src={item?.productId?.images[0].url}
                            alt="watch"
                            //   className="img-fluid"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div>
                          <h5 className="total-price">
                            {" "}
                            {item?.productId?.title}
                          </h5>
                          <p className="total-price">{item?.color?.title}</p>
                        </div>
                      </div>
                      <div className="flex-grow-1 border">
                        <h5 className=" total">
                          $ {item?.productId?.price * item?.quantity}
                        </h5>
                      </div>
                    </div>
                  )
                })}
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className=" total ">Subtotal</p>
                <p className=" total-price">
                  $ {totalAmount ? totalAmount : 0}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 20</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">
                $ {totalAmount ? totalAmount + 20 : 0}
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CheckOut
