import { useEffect, useState } from "react"
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import Container from "../../components/Container"
import { useFormik } from "formik"
import * as yup from "yup"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { updateUserProfile } from "../../features/user/userSlice"
import CostumInput from "../../components/CostumInput"
import { FiEdit } from "react-icons/fi"

let ProfileSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  firstname: yup.string().required("firstname is Required"),
  lastname: yup.string().required("lastname is Required"),
  mobile: yup.string().required("mobile is Required"),
})

const Profile = () => {
  const dispatch = useAppDispatch()
  const [edit, setEdit] = useState(true)
  const userState = useAppSelector((state) => state?.auth?.user)

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: userState?.email,
      firstname: userState?.firstname,
      lastname: userState?.lastname,
      mobile: userState?.mobile,
    },
    validationSchema: ProfileSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values))
      dispatch(updateUserProfile(values))
      setEdit(true)
    },
  })

  return (
    <>
      <Meta title={"My Profile"} />
      <BreadCrumb title="My Profile" />
      <Container classI="wishlit-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center ">
              <h3 className="my-3"> Update Profile</h3>
              <FiEdit
                type="button"
                className="fs-2 cursor-pointer "
                onClick={() => {
                  setEdit(false)
                }}
              />
            </div>
          </div>
          <div className="col-12">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <CostumInput
                  type="text"
                  name="firstname"
                  className="form-control"
                  value={formik.values.firstname}
                  onChng={formik.handleChange("firstname")}
                  onBlr={formik.handleBlur("firstname")}
                  disabled={edit}
                />
                <div className="error mt-2">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <CostumInput
                  type="text"
                  name="lastname"
                  className="form-control"
                  id="lastname"
                  value={formik.values.lastname}
                  onChng={formik.handleChange("lastname")}
                  onBlr={formik.handleBlur("lastname")}
                  disabled={edit}
                />
                <div className="error mt-2">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <CostumInput
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  value={formik.values.email}
                  onChng={formik.handleChange("email")}
                  onBlr={formik.handleBlur("email")}
                  disabled={edit}
                />
                <div className="error mt-2">
                  {formik.touched.email && formik.errors.email}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile phone
                </label>
                <CostumInput
                  type="number"
                  name="mobile"
                  className="form-control"
                  id="mobile"
                  value={formik.values.mobile}
                  onChng={formik.handleChange("mobile")}
                  onBlr={formik.handleBlur("mobile")}
                  disabled={edit}
                />
                <div className="error mt-2">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
              </div>
              {edit === false && (
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              )}
            </form>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Profile

/*
 <div className="row">
          {WishlistState?.length === 0 && (
            <div className="text-center fs-3">No DATA</div>
          )}
          {WishlistState?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="wishlist-card position-relative">
                  <img
                    src="./src/images/cross.svg"
                    alt="cross"
                    className="cross position-absolute img-fluid "
                    onClick={() => {
                      removeFromWishlist(item?._id)
                    }}
                  />
                  <div className="wishlist-card-image">
                    <img
                      src={
                        item?.images[0].url
                          ? item?.images[0].url
                          : "./src/images/watch.jpg"
                      }
                      alt="watch"
                      className=" img-fluid  w-100"
                    />
                    <div className=" px-2 py-3">
                      <h5 className="title">{item?.title}</h5>
                      <h6 className="price mb-3 mt-3">$ {item?.price}</h6>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

*/
