import BreadCrumb from "../../components/BreadCrumb"
import Meta from "../../components/Meta"
import "./contact-style.css"
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai"
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi"
import Container from "../../components/Container"
import CostumInput from "../../components/CostumInput"

import * as yup from "yup"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useFormik } from "formik"
import { createQuery } from "../../features/contact/contactSlice"

let contactSchema = yup.object().shape({
  name: yup.string().required("name is Required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  mobile: yup.string().required("phone number is Required"),
  comment: yup.string().required("comments is Required"),
})
const Contact = () => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      tel: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      //  alert(JSON.stringify(values))
      dispatch(createQuery(values))
    },
  })

  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="contact" />
      <Container classI="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51897.47060620238!2d139.69350693299046!3d35.61313176708871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a622d707eed%3A0x7d44bb1b33343845!2sShinagawa%20City%2C%20Tokyo!5e0!3m2!1sen!2sjp!4v1693743667012!5m2!1sen!2sjp"
              width="600"
              height="450"
              className="border-0 w-100"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Shinagawa City, Tokyo"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact Us</h3>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <CostumInput
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formik.values.name}
                    onChng={formik.handleChange("name")}
                    onBlr={formik.handleBlur("name")}
                  />
                  <div className="error mt-2">
                    {formik.touched.name && formik.errors.name}
                  </div>

                  <CostumInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChng={formik.handleChange("email")}
                    onBlr={formik.handleBlur("email")}
                  />
                  <div className="error mt-2">
                    {formik.touched.email && formik.errors.email}
                  </div>

                  <CostumInput
                    type="tel"
                    name="mobile"
                    placeholder="Phone number"
                    value={formik.values.mobile}
                    onChng={formik.handleChange("mobile")}
                    onBlr={formik.handleBlur("mobile")}
                  />
                  <div className="error mt-2">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>

                  <div>
                    <textarea
                      name="comment"
                      id=""
                      cols={30}
                      rows={4}
                      className="w-100 form-control"
                      placeholder="Comment"
                      value={formik.values.comment}
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                    />
                  </div>
                  <div className="error mt-2">
                    {formik.touched.comment && formik.errors.comment}
                  </div>

                  <div>
                    <button type="submit" className="button border-0">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in Touch </h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5 " />
                      <address className="mb-0">
                        kitashinagawa ,3-6-13 90
                      </address>
                    </li>

                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+91 0855 05645">+91 0855 05645</a>
                    </li>

                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mail to:salimbenlima9@gmail.com">
                        salimbenlima9@gmail.com
                      </a>
                    </li>

                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact
