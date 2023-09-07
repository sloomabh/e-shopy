import { Link } from "react-router-dom"
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs"
import "./Footer-style.css"
import newsletter from "/newsletter.png"

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl ">
          <div className="row align-items-center ">
            <div className="col-5 ">
              <div className="footer-top-data  d-flex gab-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white"> Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6 ">
                  Shinagawa : Kitashinagawa 3-6-13 <br />
                  PostCode : 140-0001
                </address>
                <a
                  href="tel: +90 5984 5586"
                  className="mt-4 d-block mb-1 text-white"
                >
                  +90 5984 5586
                </a>
                <a
                  href="mailto : salimbenhalima94@gmail.com"
                  className="mt-4 d-block mb-2 text-white"
                >
                  salimbenhalima94@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="/" className="text-white ">
                    <BsLinkedin className="text-white" />
                  </a>
                  <a href="/" className="text-white">
                    <BsGithub className="fs-5" />
                  </a>
                  <a href="/" className="text-white">
                    <BsYoutube className=" fs-5" />
                  </a>
                  <a href="/" className="text-white">
                    <BsInstagram className=" fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/refund-policy">
                  Refund Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/shipping-policy">
                  Shiping Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/terms-conditions">
                  Terms & conditions
                </Link>
                <Link className="text-white py-2 mb-1" to="/blogs">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="">
                  About Us
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Faq
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="">
                  Laptops
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Headphones
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Tablets
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Watchs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} ; Powred by Developper's
                corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
