import { NavLink, Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs"
import "./Header-style.css"
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-2  ">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-6 text-white mb-0">
              <p>Free Shipping Over $100 & free returns</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                hotline:
                <a className=" text-white " href="tel:+91 82565798">
                  +91 82565798
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-2">
        <div className="container-xxl ">
          <div className="row align-items ">
            <div className="col-3">
              <h1>
                <Link className="text-white" to="/">
                  TechZONE.
                </Link>
              </h1>
            </div>
            <div className="col-4">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-5 " />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between ">
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/compare-product"
                  >
                    <img src="./src/images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/wishlist"
                  >
                    <img src="./src/images/wishlist.svg" alt="whishlist" />
                    <p className="mb-0">
                      Favorite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/login"
                  >
                    <img src="./src/images/user.svg" alt="user" />
                    <p className="mb-0">
                      Log In <br /> My account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white "
                    to="/cart"
                  >
                    <img src="./src/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div
                className="menu-bottom d-flex align-items-center gap-30
              "
              >
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center "
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="./src/images/menu.svg" alt="menu" />
                      <span className="mx-3 d-inline-block ">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item  text-white" to="/">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center text-white gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/blog">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header