import { useEffect, useState } from "react"
import CustomInput from "../components/CustomInput"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useNavigate, useLocation } from "react-router-dom"
import { toast } from "react-toastify"
import * as yup from "yup"
import { useFormik } from "formik"
import {
  createCoupon,
  getACoupon,
  resetState,
  updateACoupon,
} from "../features/coupon/couponSlice"

let schema = yup.object().shape({
  name: yup.string().required("Coupon Name is Required"),
  expiry: yup.date().required("Expiry Date is Required"),
  discount: yup.number().required("Discount Percentage is Required"),
})
const AddCoupon = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const getCouponId: string = location.pathname.split("/")[3]
  const newCoupon = useAppSelector((state) => state.coupon)

  const {
    isSuccess,
    isError,
    isLoading,
    createdCoupon,
    couponName,
    couponDiscount,
    couponExpiry,
    updatedCoupon,
  } = newCoupon

  const changeDateFormet = (date) => {
    const newDate = new Date(date).toLocaleDateString()
    const [month, day, year] = newDate.split("/")
    return [year, month, day].join("-")
  }

  useEffect(() => {
    if (getCouponId !== undefined) {
      dispatch(getACoupon(getCouponId))
    } else {
      dispatch(resetState())
    }
  }, [getCouponId])

  useEffect(() => {
    if (isSuccess && createdCoupon) {
      toast.success("Coupon Added Successfullly!")
    }
    if (isSuccess && updatedCoupon) {
      toast.success("Coupon Updated Successfullly!")
      navigate("/admin/coupon-list")
    }
    if (isError && couponName && couponDiscount && couponExpiry) {
      toast.error("Something Went Wrong!")
    }
  }, [isSuccess, isError, isLoading])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: couponName || "",
      expiry: changeDateFormet(couponExpiry) || "",
      discount: couponDiscount || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getCouponId !== undefined) {
        const data = { id: getCouponId, couponData: values }
        dispatch(updateACoupon(data))
        dispatch(resetState())
      } else {
        dispatch(createCoupon(values))
        formik.resetForm()
        setTimeout(() => {
          dispatch(resetState)
        }, 300)
      }
    },
  })

  return (
    <div>
      <h3 className="mb-4 title">
        {getCouponId !== undefined ? "Edit" : "Add"} Coupon
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          {/* input title */}
          <CustomInput
            type="text"
            name="name"
            onChng={formik.handleChange("name")}
            onBlr={formik.handleBlur("name")}
            val={formik.values.name}
            label="Enter Coupon Name"
            id="name"
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>

          {/* input DATE */}
          <CustomInput
            type="date"
            name="expiry"
            onChng={formik.handleChange("expiry")}
            onBlr={formik.handleBlur("expiry")}
            val={formik.values.expiry}
            label="Enter Expiry Data"
            id="date"
          />
          <div className="error">
            {formik.touched.expiry && formik.errors.expiry}
          </div>

          {/* input Discount (number) */}
          <CustomInput
            type="number"
            name="discount"
            onChng={formik.handleChange("discount")}
            onBlr={formik.handleBlur("discount")}
            val={formik.values.discount}
            label="Enter Discount"
            id="discount"
          />
          <div className="error">
            {formik.touched.discount && formik.errors.discount}
          </div>

          {/* input Submit button*/}
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getCouponId !== undefined ? "Edit" : "Add"} Coupon
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddCoupon
